import { RegisterForm } from '@/components/auth/register-form';
import { Toaster } from 'sonner';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-8">Create Your Account</h1>
      <RegisterForm />
      <Toaster />
    </div>
  );
} 