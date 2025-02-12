"use client";

import * as React from "react";

interface BandInfo {
  id: number;
  name: string;
  favoriteWork: string;
  comment?: string;
  scene?: string;
}

export function BandHobby() {
  // 初始化乐队信息
  const [bands, setBands] = React.useState<BandInfo[]>([
    {
      id: 1,
      name: "告五人",
      favoriteWork: "《带我去找夜生活》",
      comment: "场次时常爆满，很火",
      scene: "在晚上的某个时间节点，你骑着车子，吹着风…… 表达夜生活的喧嚣 深夜的晚风 孤独又快乐"
    },
    {
      id: 2,
      name: "棱镜乐队",
      favoriteWork: "《别在 livehouse 哭泣》",
      comment: "这首律动很让人舒服",
      scene: "适合喧闹的场景，人多的场景，带摇摆、动感"
    },
    {
      id: 3,
      name: "黑屋乐队",
      favoriteWork: "《逆旅》",
      comment: "就是要逆着风",
      scene: "挣脱感 破土"
    },
    // 其他乐队信息...
  ]);

  return (
    <div className="max-w-4xl p-6 border border-border rounded-xl shadow-lg bg-background">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">乐队收藏夹</h2>
      <ul className="space-y-3">
        {bands.length === 0 ? (
          <li className="py-3 text-muted-foreground/80">暂无记录</li>
        ) : (
          bands.map((band) => (
            <li
              key={band.id}
              className="p-4 border border-border/50 rounded-lg bg-background hover:bg-accent/5 transition-colors"
            >
              <div className="space-y-2.5">
                <h3 className="text-lg font-medium text-foreground">{band.name}</h3>
                <div className="space-y-1.5 text-muted-foreground/80">
                  <p className="flex items-baseline">
                    <span className="w-20 shrink-0">🎵 作品</span>
                    <span className="text-foreground/90">{band.favoriteWork}</span>
                  </p>
                  {band.comment && (
                    <p className="flex items-baseline">
                      <span className="w-20 shrink-0">💬 简评</span>
                      <span>{band.comment}</span>
                    </p>
                  )}
                  {band.scene && (
                    <p className="flex items-baseline">
                      <span className="w-20 shrink-0">🌆 场景</span>
                      <span>{band.scene}</span>
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
