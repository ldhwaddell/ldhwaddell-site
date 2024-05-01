import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { Terminal } from "@/components/terminal";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center mx-auto">
      <Header />
      <Terminal/>
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <ContactForm />
      <Separator />
      <Footer />
    </main>
  );
}
