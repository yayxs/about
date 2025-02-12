"use client";

import * as React from "react";

interface GitHubStatsProps {
  username: string;
  preview?: boolean;
}

export function GitHubStats({ username, preview = false }: GitHubStatsProps) {
  // 构建多种统计卡片
  const allStatsCards = [
    {
      title: "代码统计",
      url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&theme=default&locale=cn`
    },
    {
      title: "语言分布",
      url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=default&locale=cn`
    },
    {
      title: "周代码活动",
      url: `https://github-readme-stats.vercel.app/api/wakatime?username=${username}&layout=compact&theme=default&locale=cn`
    }
  ];

  const displayCards = preview ? allStatsCards.slice(0, 2) : allStatsCards;

  return (
    <div className="p-4 border border-border rounded-lg shadow bg-background">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">GitHub 开发统计</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {displayCards.map((card, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
            <img
              src={card.url}
              alt={`${username} ${card.title}`}
              className="w-full h-auto rounded-md border border-border/50"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
