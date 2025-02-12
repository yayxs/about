"use client";

import * as React from "react";
import Image from "next/image";

interface DailyContributionsProps {
  username: string;
  preview?: boolean;
}

export function DailyContributions({ username, preview = false }: DailyContributionsProps) {
  return (
    <div className={`p-4 border border-border rounded-lg shadow bg-background ${preview ? 'h-[300px]' : ''}`}>
      <h2 className="mb-6 text-2xl font-semibold text-foreground">每日代码量</h2>
      <div className={`w-full overflow-hidden ${preview ? 'max-h-[200px]' : ''}`}>
        <Image
          src={`https://ghchart.rshah.org/${username}`}
          alt={`${username} 的 GitHub 贡献图表`}
          width={800}
          height={128}
          className="w-full h-auto rounded-md border border-border/50"
          loading="lazy"
          priority={!preview}
        />
      </div>
    </div>
  );
}
