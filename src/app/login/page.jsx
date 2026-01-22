"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const MOCK_EMAIL = "admin@foodhub.com";
const MOCK_PASSWORD = "password123";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) { 
      document.cookie=" auth=true; path:/"; 
            alert('Login Successful')

      // Cookies.set("auth", "true", { expires: 1 });
      router.push("/foods");

    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-5">MOCK_EMAIL = admin@foodhub.com MOCK_PASSWORD = password123</p>
      </div>
    </div>
  );
};

export default LoginPage;
