import { Header } from "../components/Header";
import { GitHubStats } from "../components/GitHubStats";

export default function GitHubStatsPage() {
  return (
    <>
      <Header data-oid="3v57xf7" />
      <main className="min-h-screen bg-background pt-16" data-oid="lz8ad7o">
        <div className="container mx-auto px-4 py-8" data-oid="-z-lfh:">
          <h1 className="text-2xl font-bold mb-6" data-oid="x606g5g">
            GitHub 统计详情
          </h1>
          <GitHubStats username="yayxs" data-oid="w1y2.cy" />
        </div>
      </main>
    </>
  );
}
