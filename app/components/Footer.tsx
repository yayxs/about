import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 个人信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">个人信息</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/former-names"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  曾用名
                </Link>
              </li>
              <li>
                <Link
                  href="/band-hobby"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  乐队收藏
                </Link>
              </li>
            </ul>
          </div>

          {/* GitHub 相关 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GitHub</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/github-stats"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  统计详情
                </Link>
              </li>
              <li>
                <Link
                  href="/contributions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  开源贡献
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
