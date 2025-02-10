'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-start py-5 text-3xl font-semibold">
        공지사항 등록하기
      </h1>
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>공지</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">제목</Label>
                <Input
                  id="title"
                  placeholder="title of your notice"
                  className="w-1/2"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="content">내용</Label>
                <Input
                  id="content"
                  placeholder="content of your notice"
                  className="w-full"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            뒤로가기
          </Button>
          <Button>등록하기</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
