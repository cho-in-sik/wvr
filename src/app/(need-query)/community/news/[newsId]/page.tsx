'use client';

import { getNewsById } from '@/actions/news';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { newsId: string } }) {
  const newsId = Number(params.newsId);
  const router = useRouter();

  const {
    data: news,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['news', newsId],
    queryFn: () => getNewsById(newsId),
    enabled: !isNaN(newsId),
  });

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
      {/* 뉴스 대표 이미지 영역 */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-sm overflow-hidden ">
        <Image
          src={news.image_url!}
          alt={news.title!}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-700 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* 뉴스 정보 */}
      <div className="mt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          {news.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          {new Date(news.created_at).toLocaleDateString()}
        </p>
        <div className="prose prose-xl text-gray-800 whitespace-pre-wrap">
          {news.content}
        </div>
      </div>

      {/* 돌아가기 버튼 (오른쪽 정렬) */}
      <div className="mt-10 flex justify-end">
        <button
          onClick={() => router.push('/community/news')}
          className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          뉴스 목록으로 돌아가기
        </button>
      </div>
    </div>
  );
}
