"use client";

import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();

  return (
    <div className="w-[15%] rounded-bl-3xl rounded-tl-3xl bg-linear-to-r to-gray-800 from-gray-950 min-h-screen">
      <aside className="flex flex-row sm:flex-col h-[90%] text-center font-extrabold text-xl text-purple-300 fixed w-[13%] py-10">
        <div className="w-full text-center fs-xl mt-5 text-3xl text-white">
          Mororo
        </div>

        <div className="w-full h-full mt-30 m">
          <ul className="flex w-full flex-col h-full justify-between">
            <li className="mt-5">
              <Link href="/Home">Home</Link>
            </li>

            <li className="mt-5">
              <Link href="/favorite">Favorite</Link>
            </li>
            <li>
              <Link href="/Profile">My profile</Link>
            </li>

            <li className="mt-5">
              {session ? (
                <button onClick={() => signOut({ callbackUrl: "/login" })}>
                  {" "}
                  LogOut
                </button>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
