'use client';

import { deleteNotice, getNotice } from '@/actions/community';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/utils/date';
import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import trashCan from '@/../public/svgs/trashCan.svg';
import Image from 'next/image';
import { createBrowserSupabaseClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
  const supabase = createBrowserSupabaseClient();
  const [token, setToken] = useState(false);
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ['notice', params.communityId],
    queryFn: () => getNotice(params.communityId),
  });

  const { mutate: handleDelete, isPending } = useMutation({
    mutationFn: deleteNotice,
    onSuccess: (_, variables) => {
      console.log(`삭제 성공`);
      router.push('/community');
    },
    onError: (error) => {
      console.error('삭제 실패:', error.message);
    },
  });

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.access_token) setToken(true);
    }
    fetchUser();
  }, [supabase.auth]);

  return (
    <div className="w-1/2 min-h-[30vh] bg-slate-50 border-b">
      <div className="w-full h-12 bg-gray-100 px-5 py-3 text-lg font-semibold flex justify-between items-center">
        <h3>{data?.title}</h3>
        {token ? (
          <button disabled={isPending} onClick={() => handleDelete(data?.id)}>
            <div>
              <Image src={trashCan} alt="trashCan" />
            </div>
          </button>
        ) : null}
      </div>
      <div className="w-full h-12 bg-white border-b p-2 text-sm text-slate-500 flex justify-start items-center">
        {/* {`작성일: ${formatDate(data?.created_at)}`} */}
      </div>
      <div className="w-full p-5 whitespace-pre-wrap">{data?.content}</div>
    </div>
  );
}
