"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import type { ClientSafeProvider } from "next-auth/react";

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

  useEffect(() => {
    const setupProviders = async () => {
      const authProviders = await getProviders();
      setProviders(authProviders);
    };
    
    setupProviders();
  }, []);

  if (!providers) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <div className="bg-white text-black border border-gray-200 rounded-2xl p-8 shadow-lg w-full max-w-md">
        <h1 className="text-2xl mb-6 text-black text-center">
          Welcome to SlickLink
        </h1>
        <div className="space-y-4">
          {Object.values(providers).map((provider) => (
            <div key={provider.id} className="flex justify-center">
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="w-full py-2 px-4 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}