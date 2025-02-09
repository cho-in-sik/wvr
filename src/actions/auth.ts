'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';
import { AuthError } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

type TAuth = {
  email: string;
  password: string;
  nickname?: string;
};

function handleError(error: AuthError) {
  console.error('Supabase Error:', error.name);
  console.log('error', error.code);
  if (error.code === 'invalid_credentials') {
    return '올바르지 않은 정보입니다.';
  }
  throw new Error(error.message);
}

export async function signinWithEmailPassword({ email, password }: TAuth) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: handleError(error) };
  }

  return { data };
}
