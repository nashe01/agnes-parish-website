import { useState, useEffect } from "react";

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isLoggingIn) {
      timeout = setTimeout(() => {
        setIsLoggingIn(false);
      }, 3000); // 3 seconds
    }

    return () => clearTimeout(timeout);
  }, [isLoggingIn]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    // Simulate login process
    setTimeout(() => {
      // replace this with real login logic
      console.log("Logged in");
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-sky-800 text-white py-2 rounded-md hover:from-sky-600 hover:to-sky-900 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {isLoggingIn && (
          <p className="mt-4 text-center text-sm text-skyblue-700 animate-fade-in opacity-0 animate-[fade-in_0.8s_ease-in-out_forwards]">
            Logging in...
          </p>
        )}
      </div>
    </section>
  );
};

export default Login;


