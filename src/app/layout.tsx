import type { Metadata } from 'next';

import './globals.css';
import NavBar from './_components/Navbar';
import { PageProvider } from './context/ScrollContext';
import Script from 'next/script';
import AuthProvider from './_components/AuthProvider';
import { createServerSupabaseClient } from '@/utils/supabase/server';
export const API = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`;

export const metadata: Metadata = {
  title: '더블유브이알',
  description: '(주)더블유브아알 웹사이트',
  icons: '/images/logo/PNG 1.png',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={`antialiased [&::-webkit-scrollbar]:hidden`}>
        <PageProvider>
          <AuthProvider accessToken={session?.access_token}>
            <NavBar />
            {children}
          </AuthProvider>
        </PageProvider>

        {/* ✅ Kakao Map 스크립트 추가 (환경변수 적용) */}
        <Script src={API} strategy="beforeInteractive" />
      </body>
    </html>
  );
}
