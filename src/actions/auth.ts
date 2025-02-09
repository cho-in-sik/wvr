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

export async function signupWithEmailPassword({
  email,
  password,
  nickname,
}: TAuth) {
  const supabase = await createServerSupabaseClient();

  //   const {
  //     data: { session },
  //     error: sessionError,
  //   } = await supabase.auth.getSession();

  //   if (sessionError || !session?.user) {
  //     throw new Error('세션에러발생');
  //   }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nickname,
      },
    },
  });

  if (error) {
    return { error: handleError(error) };
  }

  return { data };
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

export async function signout() {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Logout error:', error);
    throw new Error('Failed to log out');
  }

  redirect('/signin');
}
