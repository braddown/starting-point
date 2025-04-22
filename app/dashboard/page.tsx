'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserDashboard } from '@/components/dashboard/user-dashboard';
import { Toaster } from 'sonner';
import { supabase } from '@/lib/supabase';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const { data, error } = await supabase.auth.getSession();
      
      if (error || !data.session) {
        router.replace('/login');
        return;
      }
      
      setLoading(false);
    }

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <UserDashboard />
      <Toaster />
    </div>
  );
} 