
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState<'admin' | 'cprs' | null>(null);
  const { signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  if (user) {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await signIn(email, password);

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Welcome back!',
          description: 'You have successfully signed in.',
        });
        
        // Redirect based on login type
        if (loginType === 'admin') {
          navigate('/admin');
        } else {
          // For CPRS system, redirect to main page for now
          // Later this can be connected to external API
          navigate('/');
        }
      }
    } catch {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!loginType) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Select Login Type
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={() => setLoginType('admin')}
              className="w-full h-12"
              variant="default"
            >
              Admin Panel Login
            </Button>
            <Button
              onClick={() => setLoginType('cprs')}
              className="w-full h-12"
              variant="outline"
            >
              CPRS System Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {loginType === 'admin' ? 'Admin Panel Login' : 'CPRS System Login'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 bg-white text-sm placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 text-gray-500 text-xs transition-all duration-300 transform peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 bg-white text-sm placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-2 text-gray-500 text-xs transition-all duration-300 transform peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
              >
                Password
              </label>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setLoginType(null)}
              className="text-sm text-blue-600 hover:underline"
            >
              Back to login options
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
