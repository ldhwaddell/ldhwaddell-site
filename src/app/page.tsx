import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center mx-auto">
      <Header />
      <Separator className="mt-24" />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Footer/>
    </main>
  );
}
