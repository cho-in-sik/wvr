'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';

type TNotice = {
  title: string;
  content: string;
  writer: string;
};

function handleError(error) {
  console.error(error);
  throw new Error(error.message);
}

export async function getNotices(a: any) {
  console.log(a);
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('notice').select('*');

  if (error) {
    handleError(error);
  }
  return data;
}

export async function getNotice(communityId: any) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('notice')
    .select('*')
    .eq('id', communityId)
    .single();

  if (error) {
    handleError(error);
  }
  return data;
}

export async function addNotice(formData: TNotice) {
  const supabase = await createServerSupabaseClient();

  const insertData = {
    title: formData.title,
    content: formData.content,
    writer: formData.writer,
  };

  const { error, status } = await supabase.from('notice').insert([insertData]);

  if (error) {
    console.error('삽입 중 오류 발생:', error.message);
    throw new Error('데이터 삽입 실패');
  }

  return { status };
}
