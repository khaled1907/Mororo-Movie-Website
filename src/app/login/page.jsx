"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/Home");
    }
  }, [session]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/55 p-10 rounded-tr-3xl rounded-br-3xl gap-8 w-full">
      <h1 className="text-4xl font-bold text-white text-center">
        Welcome to Mororo
      </h1>
      <p className="text-gray-300 text-center max-w-md">
        Sign in with GitHub to access the best movies
      </p>
      <button
        onClick={() => signIn("github", { callbackUrl: "/Home" })}
        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 transition text-white font-semibold rounded-xl shadow-lg"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
