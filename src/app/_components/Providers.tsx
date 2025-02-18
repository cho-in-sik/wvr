'use client';

import { PageProvider } from '../context/ScrollContext';
import AuthProvider from './AuthProvider';

export function Providers({
  children,
  accessToken,
}: {
  children: React.ReactNode;
  accessToken?: string;
}) {
  return (
    <PageProvider>
      <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
    </PageProvider>
  );
}
