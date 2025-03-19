'use client';

import { uploadNews } from '@/actions/news';
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
import { createBrowserSupabaseClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
  const supabase = createBrowserSupabaseClient();
  const [token, setToken] = useState<null | boolean>(null);
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];

    if (!file || !title || !content) {
      alert('모든 필드를 입력하세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('content', content);

    try {
      setLoading(true);
      const response = await uploadNews(formData);
      setLoading(false);

      if (response.success) {
        alert('뉴스가 성공적으로 등록되었습니다.');
        router.push('/community/news');
      }
    } catch (error: any) {
      alert('업로드 실패: ' + error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setToken(session?.access_token ? true : false);
    }
    fetchUser();
  }, [supabase.auth]);

  useEffect(() => {
    if (token === false) {
      router.push('/');
    }
  }, [token, router]);

  if (token === null) {
    return (
      <div className="flex h-screen justify-center items-center">
        <p className="text-lg font-semibold">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-start py-5 text-3xl font-semibold">뉴스 등록하기</h1>
      <Card className="w-1/2">
        <CardHeader></CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              {/* 제목 */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">제목</Label>
                <Input
                  maxLength={20}
                  name="title"
                  id="title"
                  placeholder="뉴스 제목을 입력하세요"
                  className="w-1/2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* 내용 */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="content">내용</Label>
                <Textarea
                  name="content"
                  id="content"
                  placeholder="뉴스 내용을 입력하세요"
                  className="w-full whitespace-pre-wrap"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              {/* 이미지 업로드 */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">이미지</Label>
                <Input
                  type="file"
                  name="image"
                  id="image"
                  ref={fileRef}
                  accept="image/*"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => router.push('/community/news')}
            >
              뒤로가기
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? '업로드 중...' : '등록하기'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
