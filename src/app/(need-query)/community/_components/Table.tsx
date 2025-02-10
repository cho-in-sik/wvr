'use client';

import { getNotices } from '@/actions/community';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/utils/date';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NoticeTable() {
  const { data, error } = useQuery({
    queryKey: ['notices'],
    queryFn: () => getNotices(1),
  });

  const router = useRouter();

  return (
    <Table className="w-full">
      <TableCaption>A list of recent notices.</TableCaption>
      <TableHeader className="border-t-black border-t">
        <TableRow className="">
          <TableHead className="">번호</TableHead>
          <TableHead className="w-1/2">제목</TableHead>
          <TableHead>글쓴이</TableHead>
          <TableHead>날짜</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b">
        {data?.map((item, i) => (
          <TableRow
            key={item.id}
            onClick={() => router.push(`/community/${item.id}`)}
          >
            <TableCell className="pl-5 py-5">{i + 1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.writer}</TableCell>
            <TableCell>{formatDate(item.created_at)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
