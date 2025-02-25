import { NextResponse } from 'next/server';
import axios from 'axios';

// 掘金关注用户数据接口基础URL
const JUEJIN_API_URL = 'https://api.juejin.cn/user_api/v1/follow/followees';

export async function GET(request: Request) {
  try {
    // 获取查询参数
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || '3491704661872910';
    const cursor = searchParams.get('cursor') || '0';
    const limit = parseInt(searchParams.get('limit') || '20');

    // 构建完整的请求参数
    const requestParams = {
      aid: '2608',
      uuid: '7463051489033504296',
      spider: '0',
      user_id: userId,
      cursor,
      limit,
      verifyFp: 'verify_m696bcd6_za1BiOoL_ywdV_47hM_9WDW_WYpmpk3jb6ZS',
      fp: 'verify_m696bcd6_za1BiOoL_ywdV_47hM_9WDW_WYpmpk3jb6ZS',
      msToken: 'rmRUh8Pn_Ghd2GsLWB_cUIJ2n3wW8ZNTln7jD1tXjBTzRoabeUX1x2XdSaWRwrjN_AcLjvDra2BK_4UERC-jaQXZLv9EfIhErNX393ESjJF8gfI2i8D_t_XTnMsKsoL0',
      a_bogus: 'OJsYhc2LMsm1JEv6z7Dz9e0m1vD0YW-QgZEPtYbhu0qe'
    };

    // 请求掘金API
    const response = await axios.post(JUEJIN_API_URL, requestParams, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://juejin.cn/',
        'Origin': 'https://juejin.cn'
      }
    });

    // 处理响应数据
    const data = response.data;
    if (!data || data.err_no !== 0) {
      throw new Error('获取掘金关注用户数据失败');
    }

    // 格式化关注用户数据
    const following = data.data.map((item: any) => ({
      id: item.user_id,
      name: item.user_name,
      avatar: item.avatar_large,
      joinDate: new Date(item.follow_time * 1000).toISOString().split('T')[0],
      description: item.description || undefined,
      juejinUrl: `https://juejin.cn/user/${item.user_id}`
    }));

    return NextResponse.json({
      following,
      has_more: data.has_more,
      cursor: data.cursor
    });
  } catch (error) {
    console.error('获取掘金关注用户数据出错:', error);
    return NextResponse.json(
      { error: '获取关注用户数据失败', message: (error as Error).message },
      { status: 500 }
    );
  }
}
