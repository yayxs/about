import { Header } from "../components/Header";
import { DailyContributions } from "../components/DailyContributions";

export default function ContributionsChartPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">代码贡献统计</h1>
          <DailyContributions username="yayxs" />
        </div>
      </main>
    </>
  );
}
