import { Button } from '@/components/ui/button';
import { createServerSupabaseClient } from '@/utils/supabase/server';
import Link from 'next/link';
import News from '../_components/NewsTable';

export default async function Page() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <div className="py-16 sm:py-20 flex flex-col justify-center items-center gap-12 sm:gap-20 px-4 sm:px-6">
      <div className="w-3/5">
        <News />
      </div>
      {session ? (
        <div className="w-1/2 flex justify-end items-end">
          <Link href={'/community/news/register'}>
            <Button>등록하기</Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
