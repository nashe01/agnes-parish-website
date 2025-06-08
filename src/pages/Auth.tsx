import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { signIn, signUp, user } = useAuth();
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
      const { error } = isLogin
        ? await signIn(email, password)
        : await signUp(email, password);

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: isLogin ? 'Welcome back!' : 'Account created!',
          description: isLogin
            ? 'You have successfully signed in.'
            : 'Please check your email to verify your account.',
        });
        setIsSubmitted(true);
        setTimeout(() => {
          navigate('/');
        }, 800); // Allow animation to finish
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card
        className={`w-full max-w-md transform transition-all duration-500 ${
          isSubmitted ? 'opacity-0 -translate-y-5 scale-95' : ''
        }`}
      >
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {isLogin ? 'Sign In' : 'Create Account'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitted}
                className={`peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 bg-white text-sm placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                  isSubmitted ? 'opacity-0 -translate-y-2 scale-95' : ''
                }`}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 text-gray-500 text-xs transition-all duration-300 transform peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
              >
                Email
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitted}
                className={`peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 bg-white text-sm placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                  isSubmitted ? 'opacity-0 -translate-y-2 scale-95' : ''
                }`}
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-2 text-gray-500 text-xs transition-all duration-300 transform peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
              >
                Password
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || isSubmitted}
            >
              {isLoading ? 'Loading...' : isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Toggle Auth Mode */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-600 hover:underline"
              disabled={isSubmitted}
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;


