import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  
  console.log('Auth callback triggered, code exists:', !!code);

  if (!code) {
    console.error('No code provided in auth callback');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase environment variables');
      return NextResponse.redirect(new URL('/login?error=config', request.url));
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (error) {
      console.error('Error exchanging code for session:', error);
      return NextResponse.redirect(new URL('/login?error=auth', request.url));
    }
    
    console.log('Session successfully created:', !!data.session);
    
    // URL to redirect to after sign in process completes
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } catch (error) {
    console.error('Exception in auth callback:', error);
    return NextResponse.redirect(new URL('/login?error=unknown', request.url));
  }
} 