import Link from 'next/link';
import top from '@/../public/svgs/top.svg';
import Image from 'next/image';
import { usePage } from '@/app/context/ScrollContext';

export default function LastMain() {
  const { setCurrentPage } = usePage();

  const handleScrollToTop = () => {
    setCurrentPage(1); // 🔥 첫 번째 페이지(FirstMain)로 이동
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen overflow-y-hidden">
      <div className="h-3/4 w-full bg-white flex">
        <div
          className="w-2/5 h-full bg-gray-200 p-28 flex justify-start items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/main/lastMain1.jpg')" }}
        >
          <div className="text-white flex flex-col items-start justify-center">
            <h3 className="text-2xl font-extrabold mb-3">Contact</h3>
            <h4 className="font-normal text-4xl mb-1">
              궁금한 사항이 있으시면
            </h4>
            <h4 className="font-extrabold text-4xl mb-5">문의 부탁드립니다.</h4>

            <span className="text-base font-bold">Tel : 062-716-7702</span>
            <span className="font-bold">Email : asdasd@asdasdasd</span>
          </div>
        </div>
        <div className="w-3/5 h-full flex flex-col justify-center items-start bg-gray-100 px-20">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">공지사항</h3>
          <div className="w-full flex flex-col gap-5">
            {/* 개별 공지사항 카드 */}
            <div className="w-full p-5 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h4 className="text-lg font-semibold text-gray-800">
                - 2023-06 공지사항 test
              </h4>
              <p className="text-sm text-gray-600 mt-1">최신 업데이트 안내</p>
            </div>
            <div className="w-full p-5 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h4 className="text-lg font-semibold text-gray-800">
                - 2023-06 공지사항 test
              </h4>
              <p className="text-sm text-gray-600 mt-1">새로운 기능 추가</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/4 w-full bg-black text-white flex flex-col justify-center items-start px-48 gap-7 relative">
        <div className="flex justify-start items-center gap-5 text-lg">
          <Link href="#">
            <span>이용약관</span>
          </Link>
          <Link href="#">
            <span>개인정보취급방침</span>
          </Link>
          <Link href="#">
            <span>이메일주소무단수집거부</span>
          </Link>
        </div>
        <div className="text-base text-slate-300">
          <h6>
            광주광역시 북구 용봉로 77, 제 1산학협력공학관 607호 (용봉동,
            전남대학교)
          </h6>
          <h6>
            회사명 : (주)더블유브이알 ｜ 대표이사 : 박용균 ｜ 사업자등록번호 :
            634-86-02784 ｜ Tel : 062-716-7702
          </h6>
        </div>
        <div className="text-sm text-slate-400">
          <h6>© (주)더블유브이알 All rights reserved.</h6>
        </div>
        <div
          className="rounded-md absolute right-20 cursor-pointer"
          onClick={handleScrollToTop}
        >
          <Image src={top} alt="top-arrow" />
        </div>
      </div>
    </div>
  );
}
