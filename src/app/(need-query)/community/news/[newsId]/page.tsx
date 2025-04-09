'use client';

import { getNewsById, deleteNews } from '@/actions/news';
import { Button } from '@/components/ui/button';
import { createBrowserSupabaseClient } from '@/utils/supabase/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { newsId: string } }) {
  const supabase = createBrowserSupabaseClient();
  const [token, setToken] = useState<null | boolean>(null);
  const newsId = Number(params.newsId);
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    data: news,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['news', newsId],
    queryFn: () => getNewsById(newsId),
    enabled: !isNaN(newsId),
  });

  const { mutate: handleDelete, isPending } = useMutation({
    mutationFn: () => deleteNews(newsId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
      alert('뉴스가 삭제되었습니다.');
      router.push('/community/news');
    },
    onError: (err) => {
      alert('삭제 실패: ' + err.message);
    },
  });

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setToken(session?.access_token ? true : false);
    }
    fetchUser();
  }, [supabase.auth]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-gray-700 animate-pulse">
          뉴스 로딩 중...
        </p>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-bold text-red-500">
          ❌ 뉴스 데이터를 불러올 수 없습니다.
        </p>
        <button
          onClick={() => router.push('/community/news')}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          뉴스 목록으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-8">
      {/* 삭제 버튼 */}
      <div className="flex justify-end mb-6">
        {token && (
          <Button onClick={() => handleDelete()} disabled={isPending}>
            {isPending ? '삭제 중...' : '삭제'}
          </Button>
        )}
      </div>

      {/* 제목 + 작성일 (이미지 위에) */}
      <div className="bg-gray-100 px-4 py-6 rounded-t-md border-b-0 border-gray-300">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {news.title}
        </h1>
        <div className="mt-2 text-sm sm:text-base text-gray-600">
          작성일: {new Date(news.created_at).toLocaleString('ko-KR')}
        </div>
      </div>

      {/* 이미지 */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]  border-t-0 rounded-b-md overflow-hidden mb-8">
        <Image
          src={news.image_url!}
          alt={news.title!}
          fill
          style={{ objectFit: 'contain' }}
          className="bg-white"
        />
      </div>

      {/* 뉴스 본문 */}
      <div className="prose prose-lg text-gray-800 whitespace-pre-wrap">
        {news.content}
      </div>

      {/* 돌아가기 버튼 */}
      <div className="mt-10 flex justify-end">
        <Button onClick={() => router.push('/community/news')}>목록</Button>
      </div>
    </div>
  );
}
