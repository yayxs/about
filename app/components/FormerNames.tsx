"use client";

import * as React from "react";

export function FormerNames() {
  // 初始化曾用名列表和输入框状态
  const [names, setNames] = React.useState<string[]>([
    "洋小洋同学",
    "前端厚说",
    "前端诗人",
    "前端响蜜鴷",
    "vast",
    "vanlee",
    "vlee"
  ]);
  const [newName, setNewName] = React.useState<string>("");

  // 处理输入框内容变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  // 处理添加新名称操作
  const handleAddName = () => {
    if (!newName.trim()) return;
    setNames(prev => [...prev, newName.trim()]);
    setNewName("");
  };

  return (
    <div className="max-w-md p-6 border border-border rounded-xl shadow-lg bg-background">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">曾用名记录</h2>
      <ul className="mb-6 divide-y divide-border/50">
        {names.length === 0 ? (
          <li className="py-3 text-muted-foreground/80">暂无记录</li>
        ) : (
          names.map((name, index) => (
            <li key={index} className="py-3 text-foreground hover:bg-accent/5 transition-colors">
              <span className="pl-2">{name}</span>
            </li>
          ))
        )}
      </ul>
      <div className="flex gap-3">
        <input
          type="text"
          value={newName}
          onChange={handleInputChange}
          placeholder="请输入新的曾用名"
          className="flex-1 px-4 py-2 border border-border/50 rounded-lg bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/80 focus:border-transparent transition-all"
          aria-label="新的曾用名"
        />
        <button
          type="button"
          onClick={handleAddName}
          className="px-4 py-2 font-medium border border-transparent rounded-lg bg-accent text-accent-foreground hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/80 focus:ring-offset-1 transition-colors"
          aria-label="添加曾用名"
        >
          添加
        </button>
      </div>
    </div>
  );
}
