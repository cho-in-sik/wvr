import type { Metadata } from 'next';
import './globals.css';
import Navbar from './_components/Navbar';

import Script from 'next/script';
import { createServerSupabaseClient } from '@/utils/supabase/server';
import { Providers } from './_components/Providers';

export const API = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`;

export const metadata: Metadata = {
  title: '더블유브이알',
  description: '(주)더블유브아알 웹사이트',
  icons: '/images/logo/PNG 1.png',
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className="antialiased [&::-webkit-scrollbar]:hidden">
        {/* Providers는 루트 레이아웃에 한 번만 마운트되므로, Link 내비게이션 시 상태가 유지됩니다. */}
        <Providers accessToken={session?.access_token}>
          <Navbar />
          {children}
        </Providers>
        <Script src={API} strategy="beforeInteractive" />
      </body>
    </html>
  );
}
