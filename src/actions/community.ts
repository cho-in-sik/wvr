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

  if (error) {
    handleError(error);
  }
  return data;
}

export async function addTank(formData) {
  const supabase = await createServerSupabaseClient();

  const insertData = {
    region: formData.region,
    clientName: formData.clientName,
    tank: formData.tank,
    usage: formData.usage,
    dueDate: formData.dueDate,
    lastMRemainAmount: formData.lastRemain,
    thisMRemainAmount: formData.currentRemain,
  };

  const { error, status } = await supabase.from('notice').insert([insertData]);

  if (error) {
    console.error('삽입 중 오류 발생:', error.message);
    throw new Error('데이터 삽입 실패');
  }

  return status;
}
