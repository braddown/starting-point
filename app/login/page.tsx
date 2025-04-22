import { LoginForm } from '@/components/auth/login-form';
import { Toaster } from 'sonner';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-8">Welcome to the App</h1>
      <LoginForm />
      <Toaster />
    </div>
  );
} 