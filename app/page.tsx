import { About } from "@/components/sections/About";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
      </main>
    </>
  );
}
