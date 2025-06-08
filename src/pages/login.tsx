import { useState, useEffect } from "react";

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [inputsVisible, setInputsVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isLoggingIn) {
      setInputsVisible(false); // trigger fade out

      timeout = setTimeout(() => {
        setIsLoggingIn(false);
        setInputsVisible(true); // reset input visibility after animation
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [isLoggingIn]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    setTimeout(() => {
      console.log("Logged in");
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center animate-slide-in-left">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className={`${inputsVisible ? "animate-slide-in-left" : "animate-fade-out-up"}`}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <div className={`${inputsVisible ? "animate-slide-in-left" : "animate-fade-out-up"}`}>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-sky-800 text-white py-2 rounded-md hover:from-sky-600 hover:to-sky-900 transition-all duration-300 disabled:opacity-50"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        </form>

        {isLoggingIn && (
          <p className="mt-4 text-center text-sm text-skyblue-700 opacity-0 animate-[fade-in_2s_ease-in-out_forwards]">
            Please wait...
          </p>
        )}
      </div>
    </section>
  );
};

export default Login;



