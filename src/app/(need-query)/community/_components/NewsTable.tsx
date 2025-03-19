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
    <div className="flex flex-wrap gap-10">
      {news?.map((item) => {
        return (
          <div key={item.id} className="w-[30%]">
            <div className="h-80 mb-3 relative">
              {item.image_url && (
                <Link href={`/community/news/${item.id}`}>
                  <Image
                    src={item.image_url}
                    alt={item.title as string}
                    layout="fill"
                    objectFit="contain"
                  />
                </Link>
              )}
            </div>
            <h6 className="text-xl font-medium text-center">{item.title}</h6>
          </div>
        );
      })}
    </div>
  );
}
