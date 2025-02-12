import { Header } from "../components/Header";
import { OpenSourceContributions } from "../components/OpenSourceContributions";

export default function ContributionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">开源贡献详情</h1>
          <OpenSourceContributions />
        </div>
      </main>
    </>
  );
}
