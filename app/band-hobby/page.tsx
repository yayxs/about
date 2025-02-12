import { Header } from "../components/Header";
import { BandHobby } from "../components/BandHobby";

export default function BandHobbyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">乐队收藏夹</h1>
          <BandHobby />
        </div>
      </main>
    </>
  );
}
