"use client";

import * as React from "react";

interface BandInfo {
  id: number;
  name: string;
  favoriteWork: string;
  comment?: string;
  scene?: string;
}

interface BandHobbyProps {
  preview?: boolean;
}

export function BandHobby({ preview = false }: BandHobbyProps) {
  // 初始化乐队信息
  const [bands] = React.useState<BandInfo[]>([
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
    {
      id: 4,
      name: "痛仰乐队",
      favoriteWork: "《西湖》",
      scene: "湖场景"
    },
    {
      id: 5,
      name: "夏日入侵企画",
      favoriteWork: "《想去海边》",
      scene: "温暖 暖阳"
    },
    {
      id: 6,
      name: "橘子海",
      favoriteWork: "《夏日漱石》",
      scene: "节奏感 行进中 汽水 记忆中的夏天"
    },
    {
      id: 7,
      name: "马赛克",
      favoriteWork: "《霓虹甜心》",
      scene: "节奏感 复古 8,9 年代"
    },
    {
      id: 8,
      name: "回春丹",
      favoriteWork: "《初恋》"
    },
    {
      id: 9,
      name: "鹿先森乐队",
      favoriteWork: "《春风十里》"
    },
    {
      id: 10,
      name: "新裤子",
      favoriteWork: "《没有理想的人不伤心》"
    },
    {
      id: 11,
      name: "落日飞车",
      favoriteWork: "《My Jinji》"
    },
    {
      id: 12,
      name: "八三夭",
      favoriteWork: "《想见你想见你想见你》"
    },
    {
      id: 13,
      name: "康姆士乐团",
      favoriteWork: "《你永远是我的宝贝，宝贝》"
    },
    {
      id: 14,
      name: "和平饭店",
      favoriteWork: "《你不爱我我就爱别人》"
    },
    {
      id: 15,
      name: "不可撤销",
      favoriteWork: "《她》"
    },
    {
      id: 16,
      name: "帆布小镇",
      favoriteWork: "《今夜无法入眠》"
    },
    {
      id: 17,
      name: "deca joins",
      favoriteWork: "《浴室》"
    },
    {
      id: 18,
      name: "旅行团乐队",
      favoriteWork: "《逝去的歌》"
    },
    {
      id: 19,
      name: "霓虹花园",
      favoriteWork: "《无人的花园》"
    },
    {
      id: 20,
      name: "丢火车乐队",
      favoriteWork: "《晚安》"
    },
    {
      id: 21,
      name: "麻园诗人",
      favoriteWork: "《晚安》"
    },
    {
      id: 22,
      name: "草东没有派对",
      favoriteWork: "《山海》"
    },
    {
      id: 23,
      name: "岛屿心情",
      favoriteWork: "《8+8=8》"
    },
    {
      id: 24,
      name: "万能青年旅店",
      favoriteWork: "《山雀》"
    },
    {
      id: 25,
      name: "SoulFa 灵魂沙发",
      favoriteWork: "《沙发上的白日梦》"
    },
    {
      id: 26,
      name: "达达乐队",
      favoriteWork: "《南方》"
    },
    {
      id: 27,
      name: "椅子乐团",
      favoriteWork: "《Rollin on》"
    },
    {
      id: 28,
      name: "达闻西乐队",
      favoriteWork: "《我要让你心碎》"
    },
    {
      id: 29,
      name: "时间不够以后",
      favoriteWork: "《旋涡》"
    },
    {
      id: 30,
      name: "声音玩具",
      favoriteWork: "《你的城市》"
    }
  ]);

  const displayBands = preview ? bands.slice(0, 3) : bands;

  return (
    <div className="p-4 border border-border rounded-lg shadow bg-background">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">乐队收藏夹</h2>
      <ul className="space-y-2">
        {displayBands.length === 0 ? (
          <li className="py-2 text-muted-foreground/80">暂无记录</li>
        ) : (
          displayBands.map((band) => (
            <li
              key={band.id}
              className="p-3 border border-border/50 rounded-md bg-background hover:bg-accent/5 transition-colors"
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
