'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signinWithEmailPassword } from '@/actions/auth';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signinWithEmailPassword({ email, password });
      console.log(res);
      if (res?.error) {
        alert(res.error);
        return;
      }
      if (res?.data?.session) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-6 w-full sm:w-3/5 lg:w-1/3 max-w-md mx-auto',
        className,
      )}
      {...props}
    >
      <Card className="p-6 sm:p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-lg sm:text-xl">WVR 로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ✅ 이메일 입력 필드 */}
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  이메일
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              {/* ✅ 비밀번호 입력 필드 */}
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-sm sm:text-base">
                  비밀번호
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              {/* ✅ 로그인 버튼 */}
              <Button type="submit" className="w-full text-sm sm:text-base">
                로그인
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* ✅ 약관 안내 */}
      {/* <div className="text-center text-xs sm:text-sm text-gray-500">
        <span>By clicking continue, you agree to our</span>{' '}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </div> */}
    </div>
  );
}
