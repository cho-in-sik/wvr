'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';

type TContact = {
  name: string;
  email: string;
  content: string;
};

function handleError(error) {
  console.error(error);
  throw new Error(error.message);
}

export async function getContacts(a: any) {
  console.log(a);
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('contact').select('*');

  if (error) {
    handleError(error);
  }
  return data;
}

export async function getContct(contactId: any) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('contact')
    .select('*')
    .eq('id', contactId)
    .single();

  if (error) {
    handleError(error);
  }
  return data;
}

export async function addContact(formData: TContact) {
  const supabase = await createServerSupabaseClient();
  const insertData = {
    name: formData.name,
    content: formData.content,
    email: formData.email,
  };

  const { error, status } = await supabase.from('contact').insert([insertData]);

  if (error) {
    console.error('삽입 중 오류 발생:', error.message);
    throw new Error('데이터 삽입 실패');
  }

  return { status };
}
