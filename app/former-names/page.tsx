import { Header } from "../components/Header";
import { FormerNames } from "../components/FormerNames";

export default function FormerNamesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">我的曾用名</h1>
          <FormerNames />
        </div>
      </main>
    </>
  );
}
