import { Button } from '@/components/ui/button';

import Link from 'next/link';

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-start py-5 text-3xl font-semibold">공지사항</h1>
      {children}

      <div className="w-1/2 flex justify-end items-center my-5">
        <Link href={'/community'}>
          <Button className="bg-slate-600">목록</Button>
        </Link>
      </div>
    </div>
  );
}
