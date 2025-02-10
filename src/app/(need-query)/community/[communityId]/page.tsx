'use client';

import { getNotice } from '@/actions/community';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/utils/date';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Page({ params }: { params: { communityId: string } }) {
  const { data } = useQuery({
    queryKey: ['notice', params.communityId],
    queryFn: () => getNotice(params.communityId),
  });
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-start py-5 text-3xl font-semibold">공지사항</h1>
      <div className="w-1/2 min-h-[30vh] bg-slate-50 border-b">
        <div className="w-full h-12 bg-gray-100 px-5 py-3 text-lg font-semibold flex justify-start items-center">
          {data.title}
        </div>
        <div className="w-full h-12 bg-white border-b p-2 text-sm text-slate-500 flex justify-start items-center">
          {`작성일: ${formatDate(data.created_at)}`}
        </div>
        <div className="w-full p-5">{data.content}</div>
      </div>
      <div className="w-1/2 flex justify-end items-center my-5">
        <Link href={'/community'}>
          <Button className="bg-slate-600">목록</Button>
        </Link>
      </div>
    </div>
  );
}
