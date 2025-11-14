// app/profile/page.jsx
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const revalidate = 60;

async function getProfileData() {
  return {
    name: "KHALED MOHAMED MAHMOUD",
    username: "khaled1907",
    bio: "I'm Khaled Mohamed Mahmoud ✨A Front-End Developer and Cross-Platform Developer 💻I build modern web and mobile apps using React, React Native, and Flutter ⚡",
    avatar: "/profile.jpg",
  };
}

export default async function ProfilePage() {
  const profile = await getProfileData();
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/login?callbackUrl=/Profile`);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/55 p-10 rounded-tr-3xl rounded-br-3xl gap-8 w-full text-white">
      <Image
        width={150}
        height={150}
        src={profile.avatar}
        alt={profile.name}
        className=" w-50 h-50 rounded-full mb-5 object-cover"
      />
      <h1 className="text-3xl font-bold">{profile.name}</h1>
      <p className="text-gray-300">@{profile.username}</p>
      <p className="text-center max-w-md mt-3">{profile.bio}</p>
    </div>
  );
}
