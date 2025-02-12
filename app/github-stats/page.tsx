import { Header } from "../components/Header";
import { GitHubStats } from "../components/GitHubStats";

export default function GitHubStatsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">GitHub 统计详情</h1>
          <GitHubStats username="yayxs" />
        </div>
      </main>
    </>
  );
}
