"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

interface Fan {
  id: string;
  name: string;
  avatar: string;
  joinDate: string;
  description?: string;
  juejinUrl?: string;
}

interface FansProps {
  preview?: boolean;
  userId?: string;
}

export function Fans({ preview = false, userId = "3491704661872910" }: FansProps) {
  const [fans, setFans] = React.useState<Fan[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [cursor, setCursor] = React.useState("0");
  const [hasMore, setHasMore] = React.useState(true);

  const fetchFans = React.useCallback(async (reset = false) => {
    try {
      setLoading(true);
      if (reset) {
        setCursor("0");
        setFans([]);
      }

      const response = await fetch(
        `/api/juejin-fans?userId=${userId}&cursor=${reset ? "0" : cursor}&limit=${preview ? 3 : 20}`
      );

      if (!response.ok) {
        throw new Error(`请求失败: ${response.status}`);
      }

      const data = await response.json();

      setFans(prev => (reset ? data.fans : [...prev, ...data.fans]));
      setCursor(data.cursor);
      setHasMore(data.has_more);
    } catch (err) {
      console.error("获取粉丝数据失败:", err);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [userId, cursor, preview]);

  React.useEffect(() => {
    fetchFans();
  }, [fetchFans]);

  // 如果是预览模式，使用静态数据
  if (preview) {
    return (
      <div className="p-4 border border-border rounded-lg shadow bg-background">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-foreground">
            我的掘金粉丝
          </h2>
          <a
            href="/fans"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            查看全部 →
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {loading ? (
            <div className="col-span-full flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : fans.length === 0 ? (
            <div className="col-span-full py-4 text-center text-muted-foreground">
              暂无粉丝记录
            </div>
          ) : (
            fans.slice(0, 3).map((fan) => (
              <FanCard key={fan.id} fan={fan} />
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 border border-border rounded-lg shadow bg-background">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">
        我的掘金粉丝
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md">
          错误: {error}
          <button
            onClick={() => fetchFans(true)}
            className="ml-2 underline"
          >
            重试
          </button>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {fans.length === 0 && !loading ? (
          <div className="col-span-full py-4 text-center text-muted-foreground">
            暂无粉丝记录
          </div>
        ) : (
          fans.map((fan) => (
            <FanCard key={fan.id} fan={fan} />
          ))
        )}
      </div>

      {loading && (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )}

      {!loading && hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={() => fetchFans()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            加载更多
          </button>
        </div>
      )}
    </div>
  );
}

// 粉丝卡片组件
function FanCard({ fan }: { fan: Fan }) {
  return (
    <div className="p-4 border border-border/50 rounded-md bg-background hover:bg-accent/5 transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={fan.avatar}
            alt={`${fan.name}的头像`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-foreground">
            {fan.juejinUrl ? (
              <a
                href={fan.juejinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {fan.name}
              </a>
            ) : (
              fan.name
            )}
          </h3>
          <p className="text-sm text-muted-foreground">
            关注于 {fan.joinDate}
          </p>
        </div>
      </div>
      {fan.description && (
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          {fan.description}
        </p>
      )}
    </div>
  );
}
