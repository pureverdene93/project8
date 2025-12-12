import prisma from "@/lib/prisma";
import { Header } from "./_features/header";
import { SideBarAndGenerator } from "./_features/sideBarAndGenerator";

export default async function Home() {
  const users = await prisma.user.findMany();

  console.log(users, "users");

  return (
    <div className="bg-white w-full h-screen flex flex-col">
      <Header />
      <SideBarAndGenerator />
    </div>
  );
}
