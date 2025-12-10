import { Header } from "./_features/header";
import { SideBarAndGenerator } from "./_features/sideBarAndGenerator";

export default function Home() {
  return (
    <div className="bg-white w-full h-screen flex flex-col">
      <Header />
      <SideBarAndGenerator />
    </div>
  );
}
