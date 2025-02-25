"use client";

import { Github, Users, UserPlus } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function Header() {
  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      data-oid="1mup6kc"
    >
      <div className="container flex h-14 items-center" data-oid="7d0rxvm">
        <div
          className="flex flex-1 items-center justify-between space-x-2 md:justify-end"
          data-oid="wasqm-x"
        >
          <nav className="flex items-center space-x-2" data-oid="a2wp6y9">
            <Link
              href="/fans"
              className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Users className="h-5 w-5" />
              <span className="ml-2">
                Fans
              </span>
            </Link>
            <Link
              href="/following"
              className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <UserPlus className="h-5 w-5" />
              <span className="ml-2">
                Following
              </span>
            </Link>
            <a
              href="https://github.com/yayxs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              data-oid="7jf57-x"
            >
              <Github className="h-5 w-5" data-oid="1gsww0k" />
              <span className="ml-2" data-oid="e5aqlwi">
                GitHub
              </span>
            </a>
            <ThemeToggle data-oid=":xpfxjf" />
          </nav>
        </div>
      </div>
    </header>
  );
}
