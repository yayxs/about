import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "关于我 | 10k",
  description: "个人介绍网站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning data-oid="_6bcgl:">
      <body className={inter.className} data-oid="05pni7a">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          data-oid="u1c59j7"
        >
          <main
            className="min-h-screen bg-background antialiased"
            data-oid="wnaw6yv"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
