"use client";

import * as React from "react";
import Image from "next/image";

interface GitHubStatsProps {
  username: string;
  preview?: boolean;
}

export function GitHubStats({ username, preview = false }: GitHubStatsProps) {
  const statsCards = [
    {
      title: "代码统计",
      url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&theme=default&locale=cn&hide_border=true&bg_color=ffffff`,
    },
    {
      title: "语言分布",
      url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&locale=cn&hide_border=true&bg_color=ffffff`,
    },
  ];

  return (
    <div className="space-y-6" data-oid="5wg-xfg">
      <div className="grid md:grid-cols-2 gap-4" data-oid=":u0v-h9">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className="p-4 border border-border rounded-lg bg-background"
            data-oid="dv4z-1h"
          >
            <h3
              className="text-sm font-medium text-muted-foreground mb-4"
              data-oid="u3t8kqh"
            >
              {card.title}
            </h3>
            <Image
              src={card.url}
              alt={card.title}
              width={450}
              height={195}
              className="w-full rounded-md"
              priority
              data-oid="k4:xnj_"
            />
          </div>
        ))}
      </div>
      {!preview && (
        <div
          className="p-4 border border-border rounded-lg bg-background"
          data-oid="ptz3r:i"
        >
          <h3
            className="text-sm font-medium text-muted-foreground mb-4"
            data-oid="y6zvxjx"
          >
            年度贡献
          </h3>
          <Image
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub Contributions"
            width={800}
            height={128}
            className="w-full rounded-md"
            priority
            data-oid="dyt5y7w"
          />
        </div>
      )}
    </div>
  );
}
