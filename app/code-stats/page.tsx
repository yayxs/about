import { Header } from "../components/Header";
import { CodeCommitStats } from "../components/CodeCommitStats";

export default function CodeStatsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">代码提交统计</h1>
          <CodeCommitStats username="yayxs" />
        </div>
      </main>
    </>
  );
}
