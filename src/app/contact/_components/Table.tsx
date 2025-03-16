'use client';

import { deleteContact, getContacts } from '@/actions/contact';
import trashCan from '@/../public/svgs/trashCan.svg';
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
import Image from 'next/image';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function ContactTable() {
  const queryClient = useQueryClient();

  const { data, error } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => getContacts(1),
  });

  const { mutate: handleDelete, isPending } = useMutation({
    mutationFn: deleteContact,
    onSuccess: (_, variables) => {
      alert('삭제 성공');
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
    onError: (error) => {
      console.error('삭제 실패:', error.message);
    },
  });

  return (
    <Table className="w-full">
      <TableCaption>A list of recent notices.</TableCaption>
      <TableHeader className="border-t-black border-t">
        <TableRow>
          <TableHead className="">번호</TableHead>
          <TableHead className="">이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead className="min-w-1/3 max-w-96">내용</TableHead>
          <TableHead>날짜</TableHead>
          <TableHead>삭제</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b">
        {data?.map((item, i) => (
          <TableRow key={item.id}>
            <TableCell className="pl-5 py-5">{i + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell className="min-w-1/3 max-w-96 whitespace-normal break-words overflow-x-hidden">
              {item.content}
            </TableCell>
            <TableCell>{formatDate(item.created_at)}</TableCell>
            <TableCell>
              <button
                disabled={isPending}
                className="cursor-pointer"
                onClick={() => handleDelete(item.id)}
              >
                <div>
                  <Image src={trashCan} alt="trashCan" />
                </div>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
