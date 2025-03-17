import type { Metadata } from 'next';
import './globals.css';
import Navbar from './_components/Navbar';
import { Providers } from './_components/Providers';
import Script from 'next/script';
import { createServerSupabaseClient } from '@/utils/supabase/server';
import ReactQueryClientProvider from './_components/ReactQueryClientProvider';
import LoadingScreen from './_components/LoadingScreen';

export const API = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`;

export const metadata: Metadata = {
  title: '더블유브이알',
  description: '(주)더블유브아알 웹사이트',
  icons: '/images/logo/PNG 14.png',
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
      <body className="antialiased">
        {/* Providers는 앱 전체에 한 번만 마운트되어 상태가 유지됩니다. */}
        <ReactQueryClientProvider>
          <LoadingScreen />
          <Providers accessToken={session?.access_token}>
            <Navbar />
            {/* 콘텐츠 컨테이너에 최대 너비 적용 */}
            <div className="mx-auto">{children}</div>
          </Providers>
        </ReactQueryClientProvider>
        <Script src={API} strategy="beforeInteractive" />
      </body>
    </html>
  );
}
