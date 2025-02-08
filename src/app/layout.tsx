import type { Metadata } from 'next';

import './globals.css';
import NavBar from './_components/Navbar';
import { PageProvider } from './context/ScrollContext';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '더블유브이알',
  description: '(주)더블유브아알 웹사이트',
  icons: '/images/logo/PNG 1.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased [&::-webkit-scrollbar]:hidden`}>
        <PageProvider>
          <NavBar />
          {children}
        </PageProvider>
        <Script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=%Next_PUBLIC_KAKAOMAP_KEY%&libraries=services,clusterer"
        ></Script>
      </body>
    </html>
  );
}
