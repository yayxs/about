import { Header } from "./components/Header";
import { GitHubStats } from "./components/GitHubStats";
import { OpenSourceContributions } from "./components/OpenSourceContributions";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-6 space-y-12">
          {/* GitHub 统计区域 */}
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  GitHub 统计
                </h2>
                <Link
                  href="/github-stats"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  查看详情 →
                </Link>
              </div>
              <GitHubStats username="yayxs" preview={true} />
            </div>
          </div>

          {/* 开源贡献区域 */}
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  开源贡献
                </h2>
                <Link
                  href="/contributions"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  查看更多 →
                </Link>
              </div>
              <OpenSourceContributions preview={true} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
