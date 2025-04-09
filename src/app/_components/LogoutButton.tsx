'use client';

import { createBrowserSupabaseClient } from '@/utils/supabase/client';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function LogoutButton({ children }: Props) {
  const supabase = createBrowserSupabaseClient();
  return (
    <button
      className="text-black cursor-default"
      onClick={async () => supabase.auth.signOut()}
    >
      {children}
    </button>
  );
}
