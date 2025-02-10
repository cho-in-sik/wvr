'use client';

import { addNotice } from '@/actions/community';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { title, content, writer };
    try {
      setLoading(true);
      const res = await addNotice(formData);
      setLoading(false);
      if (res.status === 201 || 200) {
        router.push('/community');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-start py-5 text-3xl font-semibold">
        공지사항 등록하기
      </h1>
      <Card className="w-1/2">
        <CardHeader></CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">제목</Label>
                <Input
                  name="title"
                  id="title"
                  placeholder="title of your notice"
                  className="w-1/2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="content">내용</Label>
                <Textarea
                  name="content"
                  id="content"
                  placeholder="content of your notice"
                  className="w-full whitespace-pre-wrap"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="writer">작성자</Label>
                <Input
                  name="writer"
                  id="writer"
                  placeholder="writer of your notice"
                  className="w-1/2"
                  value={writer}
                  onChange={(e) => setWriter(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              뒤로가기
            </Button>
            <Button type="submit" disabled={loading}>
              등록하기
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
