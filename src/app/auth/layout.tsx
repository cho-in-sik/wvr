import { createServerSupabaseClient } from '@/utils/supabase/server';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user) {
    redirect('/');
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ✅ 네비게이션 영역 (반응형) */}
      <div
        className="min-h-[40vh] sm:min-h-[50vh] w-full bg-gray-400 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-5 relative px-4 sm:px-6"
        style={{ backgroundImage: "url('/images/introduce/ceo.jpeg')" }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          로그인
        </h1>
      </div>

      {/* ✅ 컨텐츠 영역 (반응형) */}
      <div className="flex-grow w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 bg-slate-50">
        {children}
      </div>

      {/* ✅ Footer (항상 하단 고정) */}
      <div className="w-full bg-black py-16 sm:py-12">
        <Footer />
      </div>
    </div>
  );
}
