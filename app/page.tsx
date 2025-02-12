import { Header } from "./components/Header";
import { FormerNames } from "./components/FormerNames";
import { BandHobby } from "./components/BandHobby";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b pb-2 border-border">
                我的曾用名
              </h2>
              <FormerNames />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b pb-2 border-border">
                乐队收藏夹
              </h2>
              <BandHobby />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
