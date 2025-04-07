'use client';

import { useQuery } from '@tanstack/react-query';
import Footer from '../Footer';
import { getNotices } from '@/actions/community';
import { useRouter } from 'next/navigation';

export default function LastMain() {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ['notices'],
    queryFn: () => getNotices(1),
  });

  return (
    <div className="relative w-full h-screen overflow-y-hidden">
      {/* 배경 이미지 전용 레이어: 좌우 반전 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-x-[-1]"
        style={{ backgroundImage: "url('/images/main/lastMain.png')" }}
      />
      {/* 메인 컨텐츠 영역: 배경 이미지 위에 표시 */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        {/* ✅ 메인 컨텐츠 영역 */}
        <div className="h-[75%] w-full flex flex-col lg:flex-row">
          {/* ✅ Contact (왼쪽) */}
          <div className="w-full lg:w-2/5 h-[40vh] lg:h-full p-8 md:p-16 lg:p-28 flex justify-start items-center bg-cover bg-center bg-no-repeat">
            <div className="text-black flex flex-col items-start justify-center">
              <h3 className="text-xl md:text-3xl font-semibold mb-16">
                여러분을 기다리고 있습니다
              </h3>
              <h3 className="text-sm md:text-base font-medium mb-3">
                ㈜ 더블유이알
              </h3>
              <span className="text-sm md:text-base font-medium mb-3">
                광주광역시 북구 용봉로 77,제 1산학협력공학관 607호
                <br />
                (용봉동, 전남대학교)
              </span>
              <span className="text-sm md:text-base font-medium mb-3">
                연락처 : 062-716-7702
              </span>
              <span className="text-sm md:text-base font-medium">
                이메일 : wvr0607@gmail.com
              </span>
            </div>
          </div>

          {/* ✅ 공지사항 (오른쪽) */}
          <div className="w-full lg:w-3/5 h-[60vh] lg:h-full flex flex-col justify-center items-start px-6 md:px-16 lg:px-20 py-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              공지사항
            </h3>
            {/* 전체 공지사항 리스트 영역에 overflow-y-auto 적용 */}
            <div
              className="w-4/5 flex flex-col gap-4 overflow-y-scroll"
              style={{ maxHeight: '100%' }}
            >
              {data?.slice(0, 5).map((item) => (
                <div
                  onClick={() => router.push(`/community/${item.id}`)}
                  key={item.id}
                  className="w-full p-4 md:p-5 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-1 max-h-16 truncate">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Footer 영역 */}
        <Footer />
      </div>
    </div>
  );
}
