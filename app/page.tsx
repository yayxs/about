import { Header } from "./components/Header";
import { FormerNames } from "./components/FormerNames";
import { BandHobby } from "./components/BandHobby";
import { GitHubStats } from "./components/GitHubStats";
import { OpenSourceContributions } from "./components/OpenSourceContributions";
import { DailyContributions } from "./components/DailyContributions";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-6 space-y-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  我的曾用名
                </h2>
                <Link
                  href="/formernames"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  查看更多 →
                </Link>
              </div>
              <FormerNames preview />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  开源贡献
                </h2>
                <Link
                  href="/contributions"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  查看更多 →
                </Link>
              </div>
              <OpenSourceContributions preview />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  GitHub 统计
                </h2>
                <Link
                  href="/github-stats"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  查看更多 →
                </Link>
              </div>
              <GitHubStats username="yayxs" preview />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  乐队收藏夹
                </h2>
                <Link
                  href="/bandhobby"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  查看更多 →
                </Link>
              </div>
              <BandHobby preview />
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  代码量统计
                </h2>
                <Link
                  href="/contributions-chart"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  查看更多 →
                </Link>
              </div>
              <DailyContributions username="yayxs" preview />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
