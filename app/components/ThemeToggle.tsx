"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils";

export function ThemeToggle({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "rounded-md p-2 hover:bg-accent hover:text-accent-foreground",
        className,
      )}
      {...props}
      aria-label="切换主题"
      data-oid="lo4cyif"
    >
      <Sun
        className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        data-oid="l06ey:l"
      />
      <Moon
        className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        data-oid="afhyid0"
      />
      <span className="sr-only" data-oid="yng6.n-">
        切换主题
      </span>
    </button>
  );
}
