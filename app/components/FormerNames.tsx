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
    <div className="max-w-md p-6 border border-border rounded-lg shadow bg-background">
      <h2 className="mb-4 text-xl font-bold text-foreground">曾用名记录</h2>
      <ul className="mb-4 divide-y divide-border">
        {names.length === 0 ? (
          <li className="py-2 text-muted">暂无记录</li>
        ) : (
          names.map((name, index) => (
            <li key={index} className="py-2 text-foreground">
              {name}
            </li>
          ))
        )}
      </ul>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newName}
          onChange={handleInputChange}
          placeholder="请输入新的曾用名"
          className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="新的曾用名"
        />
        <button
          type="button"
          onClick={handleAddName}
          className="px-3 py-2 font-medium border border-transparent rounded-md bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          aria-label="添加曾用名"
        >
          添加
        </button>
      </div>
    </div>
  );
}
