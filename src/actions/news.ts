'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';

function handleError(error) {
  console.error(error);
  throw new Error(error.message);
}

// 🔹 이미지 + 뉴스 데이터를 저장하는 함수
export async function uploadNews(formData: FormData) {
  const supabase = await createServerSupabaseClient();

  const file = formData.get('file') as File;
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!file || !title || !content) {
    throw new Error('모든 필드를 입력해야 합니다.');
  }

  // 🟢 올바른 이미지 저장
  const { data: imageData, error: imageError } = await supabase.storage
    .from('news')
    .upload(`news/${file.name}`, file, { upsert: true });

  if (imageError) {
    handleError(imageError);
  }

  // 🟢 올바른 이미지 URL 생성
  const imageUrl = imageData?.fullPath
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imageData.fullPath}`
    : null;

  // 🟢 뉴스 데이터 삽입
  const { data: newsData, error: newsError } = await supabase
    .from('news')
    .insert([{ title, content, image_url: imageUrl }]);

  if (newsError) {
    handleError(newsError);
  }

  return { success: true, news: newsData };
}

export async function getNews() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    handleError(error);
  }

  return data;
}

export async function getNewsById(newsId: number) {
  const supabase = await createServerSupabaseClient();

  if (!newsId) {
    throw new Error('newsId가 필요합니다.');
  }

  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', newsId)
    .single();

  if (error) {
    handleError(error);
  }

  return data;
}
