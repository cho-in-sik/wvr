import scroll from '@/../public/images/main/scroll.png';
import Image from 'next/image';

export default function FirstMain() {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* ✅ 배경 이미지 (전체 너비 유지) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed animate-fade-zoom-1"
        style={{ backgroundImage: "url('/images/main/main1.jpeg')" }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed animate-fade-zoom-2"
        style={{ backgroundImage: "url('/images/main/main2.jpeg')" }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed animate-fade-zoom-3"
        style={{ backgroundImage: "url('/images/main/main3.jpeg')" }}
      ></div>

      {/* ✅ 콘텐츠 영역 (max-w 적용, 가운데 정렬) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center max-w-[1440px] mx-auto px-4 sm:px-8">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-play">
          WHATEVER
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-play">
          Dreaming Empowering
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 font-extrabold font-play">
          Innovation With AI
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-[900px]">
          더블유브이알은 분광 이미지 센서 기술과 최첨단 인공지능 알고리즘을
          결합하여 환경 모니터링, 건강 진단 등의 다양한 분야에서 혁신적인 맞춤형
          솔루션을 제공합니다.
        </p>
      </div>

      {/* ✅ 스크롤 안내 */}
      <div className="absolute bottom-6 flex flex-col items-center w-full">
        <Image
          src={scroll}
          alt="scroll"
          width={50}
          className="w-10 sm:w-12 lg:w-14"
        />
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium font-play">
          Scroll
        </span>
      </div>
    </div>
  );
}
