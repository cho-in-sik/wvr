'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';

function handleError(error) {
  console.error(error);
  throw new Error(error.message);
}

export async function getNotices(a: any) {
  console.log(a);
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('notice').select('*');

  console.log('data2', data);

  if (error) {
    handleError(error);
  }
  return data;
}
