import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border" data-oid="2m3kuj:">
      <div className="container mx-auto px-4 py-8" data-oid="jrc1hz6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          data-oid="tz4_rt3"
        >
          {/* 个人信息 */}
          <div data-oid="gji:5q7">
            <h3 className="text-lg font-semibold mb-4" data-oid="op-hosw">
              个人信息
            </h3>
            <ul className="space-y-2" data-oid="_h7_i4x">
              <li data-oid="qkbu.fd">
                <Link
                  href="/former-names"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-oid="0dm2nob"
                >
                  曾用名
                </Link>
              </li>
              <li data-oid="wcpud-n">
                <Link
                  href="/band-hobby"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-oid="b94x3q8"
                >
                  乐队收藏
                </Link>
              </li>
            </ul>
          </div>

          {/* GitHub 相关 */}
          <div data-oid="gb21u4s">
            <h3 className="text-lg font-semibold mb-4" data-oid="rpq4uv2">
              GitHub
            </h3>
            <ul className="space-y-2" data-oid=".g8htua">
              <li data-oid="kp8nk1d">
                <Link
                  href="/github-stats"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-oid="mjfn:0n"
                >
                  统计详情
                </Link>
              </li>
              <li data-oid="vyplyg-">
                <Link
                  href="/contributions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-oid="cei7fvu"
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
