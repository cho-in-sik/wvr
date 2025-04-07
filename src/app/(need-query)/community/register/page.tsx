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
import { createBrowserSupabaseClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const supabase = createBrowserSupabaseClient();
  const [token, setToken] = useState<boolean | null>(null);
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
      if (res.status === 201 || res.status === 200) {
        router.push('/community');
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.access_token) {
          setToken(true);
        } else {
          setToken(false);
          router.push('/');
        }
      } catch (error) {
        console.error('Auth error:', error);
        setToken(false);
        router.push('/');
      }
    }

    fetchUser();
  }, [supabase.auth, router]);

  // Show loading or null while checking auth
  if (token === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // Only render the form if token is true
  if (token === false) {
    return null; // Return nothing while redirecting
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-start py-5 text-3xl font-semibold">
        공지사항 등록하기
      </h1>
      <Card className="w-full md:w-3/4 lg:w-1/2">
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
                  className="w-full md:w-2/3 lg:w-1/2"
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
                  className="w-full whitespace-pre-wrap min-h-32"
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
                  className="w-full md:w-2/3 lg:w-1/2"
                  value={writer}
                  onChange={(e) => setWriter(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push('/community')}>
              뒤로가기
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? '처리 중...' : '등록하기'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
