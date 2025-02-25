"use client";

import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Octokit } from "@octokit/rest";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface CodeStats {
  additions: number;
  deletions: number;
  total: number;
  date: string;
}

interface CodeStatsProps {
  username: string;
}

export function CodeStats({ username }: CodeStatsProps) {
  const [stats, setStats] = React.useState<CodeStats[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [viewType, setViewType] = React.useState<"line" | "bar">("line");
  const [dataType, setDataType] = React.useState<
    "additions" | "deletions" | "total"
  >("total");

  React.useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("开始获取数据...");

        const octokit = new Octokit({
          auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
        });

        // 获取用户的所有仓库
        const { data: repos } = await octokit.repos.listForUser({
          username,
          per_page: 5, // 减少获取的仓库数量
          sort: "pushed",
          direction: "desc",
        });

        console.log(`获取到 ${repos.length} 个仓库`);

        const statsMap = new Map<string, CodeStats>();

        // 获取最近7天的提交统计
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        for (const repo of repos) {
          try {
            console.log(`正在处理仓库: ${repo.name}`);

            const { data: commits } = await octokit.repos.listCommits({
              owner: username,
              repo: repo.name,
              since: sevenDaysAgo.toISOString(),
              author: username,
              per_page: 30,
            });

            console.log(`仓库 ${repo.name} 有 ${commits.length} 个提交`);

            for (const commit of commits) {
              const date = new Date(
                commit.commit.author?.date || "",
              ).toLocaleDateString("zh-CN");

              try {
                const { data: commitData } = await octokit.repos.getCommit({
                  owner: username,
                  repo: repo.name,
                  ref: commit.sha,
                });

                const current = statsMap.get(date) || {
                  additions: 0,
                  deletions: 0,
                  total: 0,
                  date,
                };

                if (commitData.stats) {
                  current.additions += commitData.stats.additions;
                  current.deletions += commitData.stats.deletions;
                  current.total = current.additions - current.deletions;
                  statsMap.set(date, current);
                }
              } catch (commitError) {
                console.error(`获取提交详情失败: ${commit.sha}`, commitError);
              }
            }
          } catch (repoError) {
            console.error(`处理仓库失败: ${repo.name}`, repoError);
          }
        }

        const sortedStats = Array.from(statsMap.values()).sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );

        console.log("统计数据:", sortedStats);
        setStats(sortedStats);
        setLoading(false);
      } catch (error) {
        console.error("获取统计数据失败:", error);
        setError(error instanceof Error ? error.message : "获取数据失败");
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  const chartData = {
    labels: stats.map((stat) => stat.date),
    datasets: [
      {
        label:
          dataType === "additions"
            ? "新增代码行数"
            : dataType === "deletions"
              ? "删除代码行数"
              : "净增代码行数",
        data: stats.map((stat) => stat[dataType]),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "代码量统计",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (loading)
    return (
      <div className="p-4 space-y-2" data-oid=":4qu09i">
        <div data-oid=":-cljs6">加载中...</div>
        <div className="text-sm text-muted-foreground" data-oid="s.mcaps">
          正在获取最近7天的代码统计数据，这可能需要一点时间
        </div>
      </div>
    );

  if (error)
    return (
      <div className="p-4 text-red-500" data-oid="3zg:jx-">
        错误: {error}
      </div>
    );

  return (
    <div
      className="p-4 border border-border rounded-lg shadow bg-background"
      data-oid="k_z8e5y"
    >
      <div
        className="mb-6 flex justify-between items-center"
        data-oid="60cq4n2"
      >
        <div className="space-x-2" data-oid="vfs0trt">
          <button
            onClick={() => setDataType("additions")}
            className={`px-3 py-1 rounded ${dataType === "additions" ? "bg-primary text-primary-foreground" : "bg-accent"}`}
            data-oid="4od8gc4"
          >
            新增代码
          </button>
          <button
            onClick={() => setDataType("deletions")}
            className={`px-3 py-1 rounded ${dataType === "deletions" ? "bg-primary text-primary-foreground" : "bg-accent"}`}
            data-oid="gd1xlgh"
          >
            删除代码
          </button>
          <button
            onClick={() => setDataType("total")}
            className={`px-3 py-1 rounded ${dataType === "total" ? "bg-primary text-primary-foreground" : "bg-accent"}`}
            data-oid="qygo9nu"
          >
            净增代码
          </button>
        </div>
        <div className="space-x-2" data-oid="in._2li">
          <button
            onClick={() => setViewType("line")}
            className={`px-3 py-1 rounded ${viewType === "line" ? "bg-primary text-primary-foreground" : "bg-accent"}`}
            data-oid="yssa9y7"
          >
            折线图
          </button>
          <button
            onClick={() => setViewType("bar")}
            className={`px-3 py-1 rounded ${viewType === "bar" ? "bg-primary text-primary-foreground" : "bg-accent"}`}
            data-oid="lejx966"
          >
            柱状图
          </button>
        </div>
      </div>
      <div className="h-[500px]" data-oid="9fy440f">
        {viewType === "line" ? (
          <Line options={options} data={chartData} data-oid="ncdwfpy" />
        ) : (
          <Bar options={options} data={chartData} data-oid="su30s5e" />
        )}
      </div>
    </div>
  );
}
