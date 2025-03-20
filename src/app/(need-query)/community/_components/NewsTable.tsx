'use client';

import { getNews } from '@/actions/news';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  const { data: news } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
      {news?.map((item) => (
        <div key={item.id} className="w-full">
          <div className="relative aspect-[4/3] rounded-md overflow-hidden">
            {item.image_url && (
              <Link href={`/community/news/${item.id}`}>
                <Image
                  src={item.image_url}
                  alt={item.title as string}
                  fill
                  className="object-contain"
                />
              </Link>
            )}
          </div>
          <h6 className="text-lg sm:text-xl font-semibold text-center mt-3">
            {item.title}
          </h6>
        </div>
      ))}
    </div>
  );
}
