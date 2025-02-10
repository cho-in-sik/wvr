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

import { useQuery } from '@tanstack/react-query';

export default function NoticeTable() {
  const { data, error } = useQuery({
    queryKey: ['notices'],
    queryFn: () => getNotices(1),
  });

  console.log('1', data);

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
        <TableRow>
          <TableCell className="pl-5 py-5">1</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
