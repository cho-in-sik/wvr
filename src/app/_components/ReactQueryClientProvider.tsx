'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react';

// export const queryClient = new QueryClient({});

export default function ReactQueryClientProvider({
  children,
}: React.PropsWithChildren) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
        },
      },
    });
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
