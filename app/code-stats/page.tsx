import { Header } from "../components/Header";
import { CodeCommitStats } from "../components/CodeCommitStats";

export default function CodeStatsPage() {
  return (
    <>
      <Header data-oid="5g9tdr4" />
      <main className="min-h-screen bg-background pt-16" data-oid="a8_uct5">
        <div className="container mx-auto px-4 py-8" data-oid="ipumykt">
          <h1 className="text-2xl font-bold mb-6" data-oid="xk9khva">
            代码提交统计
          </h1>
          <CodeCommitStats username="yayxs" data-oid="8e.w-is" />
        </div>
      </main>
    </>
  );
}
