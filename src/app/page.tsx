import { ModeToggle } from "@/components/mode-toggle";
import Pipes from "@/components/pipes";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import About from "@/components/about";


export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center mx-auto">
      <Header />
      <Separator />
      <About />
      <Separator />



    </main>
  );
}
