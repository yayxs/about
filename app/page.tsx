import { Header } from "./components/Header";
import { GitHubStats } from "./components/GitHubStats";
import { OpenSourceContributions } from "./components/OpenSourceContributions";
import { Fans } from "./components/Fans";
import { Following } from "./components/Following";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header data-oid=".x:vv9p" />
      <main className="min-h-screen bg-background pt-16" data-oid="bb5ewgj">
        <div
          className="container mx-auto px-4 py-6 space-y-12"
          data-oid="pe_fnk."
        >
          {/* GitHub 统计区域 */}
          <div className="max-w-7xl mx-auto" data-oid="p-kox4k">
            <div className="space-y-4" data-oid="l7:3ijy">
              <div
                className="flex justify-between items-center"
                data-oid="_7-7sqm"
              >
                <h2
                  className="text-xl font-bold text-foreground border-b pb-2 border-border"
                  data-oid="a2zvtpu"
                >
                  GitHub 统计
                </h2>
                <Link
                  href="/github-stats"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  data-oid="avihj7k"
                >
                  查看详情 →
                </Link>
              </div>
              <GitHubStats username="yayxs" preview={true} data-oid="l4:.x3n" />
            </div>
          </div>

          {/* 掘金粉丝区域 */}
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  掘金粉丝
                </h2>
                <Link
                  href="/fans"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  查看全部 →
                </Link>
              </div>
              <Fans preview={true} />
            </div>
          </div>

          {/* 掘金关注区域 */}
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground border-b pb-2 border-border">
                  掘金关注
                </h2>
                <Link
                  href="/following"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  查看全部 →
                </Link>
              </div>
              <Following preview={true} />
            </div>
          </div>

          {/* 开源贡献区域 */}
          <div className="max-w-7xl mx-auto" data-oid="zi-ams4">
            <div className="space-y-4" data-oid="xn7iu.8">
              <div
                className="flex justify-between items-center"
                data-oid=".xws1te"
              >
                <h2
                  className="text-xl font-bold text-foreground border-b pb-2 border-border"
                  data-oid="pbl4jod"
                >
                  开源贡献
                </h2>
                <Link
                  href="/contributions"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  data-oid="ic13g::"
                >
                  查看更多 →
                </Link>
              </div>
              <OpenSourceContributions preview={true} data-oid="bzf:i-b" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
