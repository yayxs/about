"use client";

import * as React from "react";

interface FormerNamesProps {
  preview?: boolean;
}

export const FormerNames: React.FC<FormerNamesProps> = ({ preview = false }) => {
  // 直接使用固定的曾用名列表，不再支持新增
  const names = [
    "洋小洋同学",
    "前端厚说",
    "前端诗人",
    "前端响蜜鴷",
    "vast",
    "vanlee",
    "vlee"
  ];

  const displayNames = preview ? names.slice(0, 3) : names;

  return (
    <div className="max-w-md p-6 border border-border rounded-xl shadow-lg bg-background">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">曾用名记录</h2>
      <ul className="mb-6 divide-y divide-border/50">
        {displayNames.length === 0 ? (
          <li className="py-3 text-muted-foreground/80">暂无记录</li>
        ) : (
          displayNames.map((name, index) => (
            <li
              key={index}
              className="py-3 text-foreground hover:bg-accent/5 transition-colors"
            >
              <span className="pl-2">{name}</span>
            </li>
          ))
        )}
      </ul>
      {/* 不支持新增 */}
    </div>
  );
};
