import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Page() {
  return (
    <div className="py-16 sm:py-20 flex flex-col justify-center items-center gap-12 sm:gap-20 px-4 sm:px-6">
      <div className="w-3/5">
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
      </div>
    </div>
  );
}
