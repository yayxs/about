import { Header } from "./components/Header";
import { FormerNames } from "./components/FormerNames";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <FormerNames />
      </main>
    </>
  );
}
