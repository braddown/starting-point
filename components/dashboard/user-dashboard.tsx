'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export function UserDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: sessionData } = await supabase.auth.getSession();
        const { data: userData } = await supabase.auth.getUser();
        
        if (userData?.user && sessionData?.session) {
          setUser(userData.user);
          setSession(sessionData.session);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error checking user:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Signed out successfully');
      router.push('/login');
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || 'An error occurred during sign out');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const formatDate = (timestamp: string) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleString();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Welcome to your Dashboard</CardTitle>
        <CardDescription>You are successfully logged in</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border">
            <h3 className="font-medium text-lg mb-4">User Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-sm text-gray-500">{user?.email || 'N/A'}</p>
              </div>
              <div>
                <h4 className="font-medium">User ID</h4>
                <p className="text-sm text-gray-500 break-all">{user?.id || 'N/A'}</p>
              </div>
              <div>
                <h4 className="font-medium">Email Verified</h4>
                <p className="text-sm text-gray-500">{user?.email_confirmed_at ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h4 className="font-medium">Last Sign In</h4>
                <p className="text-sm text-gray-500">{formatDate(user?.last_sign_in_at)}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border">
            <h3 className="font-medium text-lg mb-4">Session Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Session Created</h4>
                <p className="text-sm text-gray-500">{formatDate(session?.created_at)}</p>
              </div>
              <div>
                <h4 className="font-medium">Session Expires</h4>
                <p className="text-sm text-gray-500">{formatDate(session?.expires_at)}</p>
              </div>
              <div>
                <h4 className="font-medium">Provider</h4>
                <p className="text-sm text-gray-500">{user?.app_metadata?.provider || 'email'}</p>
              </div>
              <div>
                <h4 className="font-medium">Role</h4>
                <p className="text-sm text-gray-500">{user?.role || 'authenticated'}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
      </CardFooter>
    </Card>
  );
} 