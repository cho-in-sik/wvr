'use client';

import { useIsFetching } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  const isFetching = useIsFetching();
  const display = isFetching ? 'inherit' : 'none';

  return (
    <div
      style={{
        position: 'absolute',
        display,
        zIndex: 999,
        top: '50%',
        left: '50%',
      }}
    >
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
}
