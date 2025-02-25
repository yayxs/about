"use client";

import * as React from "react";

interface Contribution {
  title: string;
  description: string;
  url: string;
  platform: "gitee" | "github";
}

interface OpenSourceContributionsProps {
  preview?: boolean;
}

export const OpenSourceContributions: React.FC<
  OpenSourceContributionsProps
> = ({ preview = false }) => {
  const contributions: Contribution[] = [
    {
      title: "uni-app 中文文档修复",
      description: "修复 uni-app 官方文档中的问题，提升文档质量",
      url: "https://gitee.com/dcloud/unidocs-zh/pulls/245",
      platform: "gitee",
    },
    {
      title: "uni-app fix: 支付宝真机偶现缩小问题",
      description: "修复 lime-f2 在支付宝小程序真机环境下的显示问题",
      url: "https://gitee.com/liangei/lime-f2/pulls/1",
      platform: "gitee",
    },
  ];

  const displayContributions = preview
    ? contributions.slice(0, 2)
    : contributions;

  return (
    <div
      className="p-4 border border-border rounded-lg shadow bg-background"
      data-oid="w43jbs3"
    >
      <div className="grid gap-3" data-oid=":1ijivy">
        {displayContributions.map((contribution, index) => (
          <div
            key={index}
            className="p-3 border border-border/50 rounded-md bg-background hover:bg-accent/5 transition-colors group"
            data-oid="z9qzgj_"
          >
            <a
              href={contribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-2"
              aria-label={`查看${contribution.title}的详情`}
              data-oid="ld3xqwd"
            >
              <h3
                className="text-lg font-medium text-foreground group-hover:text-accent-foreground"
                data-oid="zkh22in"
              >
                {contribution.title}
              </h3>
              <p className="text-muted-foreground/80" data-oid="u1qrx5g">
                {contribution.description}
              </p>
              <div
                className="flex items-center text-sm text-muted-foreground"
                data-oid="yzc38xz"
              >
                <span className="flex items-center" data-oid="0rbihg6">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="w-4 h-4 mr-1.5"
                    data-oid="mcq1ppj"
                  >
                    <path
                      fill="currentColor"
                      d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z"
                      data-oid="ss3tkjp"
                    />
                  </svg>
                  Gitee Pull Request
                </span>
                <span className="mx-2" data-oid="t5fpclq">
                  •
                </span>
                <span className="text-success" data-oid="i..99bk">
                  已合并
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
