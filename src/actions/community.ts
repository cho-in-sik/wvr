'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';

function handleError(error) {
  console.error(error);
  throw new Error(error.message);
}

export async function getNotices() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('tank-remain').select('*');

  if (error) {
    handleError(error);
  }
  return data;
}
