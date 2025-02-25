"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

interface FollowingUser {
  id: string;
  name: string;
  avatar: string;
  joinDate: string;
  description?: string;
  juejinUrl?: string;
}

interface FollowingProps {
  preview?: boolean;
  userId?: string;
}

export function Following({ preview = false, userId = "3491704661872910" }: FollowingProps) {
  const [following, setFollowing] = React.useState<FollowingUser[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [cursor, setCursor] = React.useState("0");
  const [hasMore, setHasMore] = React.useState(true);

  const fetchFollowing = React.useCallback(async (reset = false) => {
    try {
      setLoading(true);
      if (reset) {
        setCursor("0");
        setFollowing([]);
      }

      const response = await fetch(
        `/api/juejin-following?userId=${userId}&cursor=${reset ? "0" : cursor}&limit=${preview ? 3 : 20}`
      );

      if (!response.ok) {
        throw new Error(`请求失败: ${response.status}`);
      }

      const data = await response.json();

      setFollowing(prev => (reset ? data.following : [...prev, ...data.following]));
      setCursor(data.cursor);
      setHasMore(data.has_more);
    } catch (err) {
      console.error("获取关注用户数据失败:", err);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [userId, cursor, preview]);

  React.useEffect(() => {
    fetchFollowing();
  }, [fetchFollowing]);

  // 如果是预览模式，使用简化布局
  if (preview) {
    return (
      <div className="p-4 border border-border rounded-lg shadow bg-background">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-foreground">
            我的关注
          </h2>
          <a
            href="/following"
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
          ) : following.length === 0 ? (
            <div className="col-span-full py-4 text-center text-muted-foreground">
              暂无关注记录
            </div>
          ) : (
            following.slice(0, 3).map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 border border-border rounded-lg shadow bg-background">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">
        我的关注
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md">
          错误: {error}
          <button
            onClick={() => fetchFollowing(true)}
            className="ml-2 underline"
          >
            重试
          </button>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {following.length === 0 && !loading ? (
          <div className="col-span-full py-4 text-center text-muted-foreground">
            暂无关注记录
          </div>
        ) : (
          following.map((user) => (
            <UserCard key={user.id} user={user} />
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
            onClick={() => fetchFollowing()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            加载更多
          </button>
        </div>
      )}
    </div>
  );
}

// 用户卡片组件
function UserCard({ user }: { user: FollowingUser }) {
  return (
    <div className="p-4 border border-border/50 rounded-md bg-background hover:bg-accent/5 transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={user.avatar}
            alt={`${user.name}的头像`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-foreground">
            {user.juejinUrl ? (
              <a
                href={user.juejinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {user.name}
              </a>
            ) : (
              user.name
            )}
          </h3>
          <p className="text-sm text-muted-foreground">
            关注于 {user.joinDate}
          </p>
        </div>
      </div>
      {user.description && (
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          {user.description}
        </p>
      )}
    </div>
  );
}
