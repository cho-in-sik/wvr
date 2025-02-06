import Link from 'next/link';
import top from '@/../public/svgs/top.svg';
import Image from 'next/image';
import { usePage } from '@/app/context/ScrollContext';
import Footer from '../Footer';

export default function LastMain() {
  const { setCurrentPage } = usePage();

  const handleScrollToTop = () => {
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen overflow-y-hidden">
      {/* ✅ 메인 컨텐츠 영역 */}
      <div className="h-[75%] w-full flex flex-col lg:flex-row">
        {/* ✅ Contact (왼쪽) */}
        <div
          className="w-full lg:w-2/5 h-[40vh] lg:h-full bg-gray-200 p-8 md:p-16 lg:p-28 flex justify-start items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/main/lastMain1.jpg')" }}
        >
          <div className="text-white flex flex-col items-start justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold mb-3">Contact</h3>
            <h4 className="text-lg md:text-3xl font-normal mb-1">
              궁금한 사항이 있으시면
            </h4>
            <h4 className="text-lg md:text-3xl font-extrabold mb-5">
              문의 부탁드립니다.
            </h4>

            <span className="text-sm md:text-base font-bold">
              Tel : 062-716-7702
            </span>
            <span className="text-sm md:text-base font-bold">
              Email : asdasd@asdasdasd
            </span>
          </div>
        </div>

        {/* ✅ 공지사항 (오른쪽) */}
        <div className="w-full lg:w-3/5 h-[60vh] lg:h-full flex flex-col justify-center items-start bg-gray-100 px-6 md:px-16 lg:px-20 py-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            공지사항
          </h3>
          <div className="w-full flex flex-col gap-4">
            {/* ✅ 개별 공지사항 카드 */}
            {['최신 업데이트 안내', '새로운 기능 추가'].map((content, idx) => (
              <div
                key={idx}
                className="w-full p-4 md:p-5 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h4 className="text-base md:text-lg font-semibold text-gray-800">
                  - 2023-06 공지사항 test
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Footer 영역 */}
      <Footer />
    </div>
  );
}
