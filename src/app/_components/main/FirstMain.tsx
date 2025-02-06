import scroll from '@/../public/images/main/scroll.png';
import Image from 'next/image';

export default function FirstMain() {
  return (
    <div className="relative h-screen w-screen min-h-screen bg-black text-white overflow-hidden">
      {/* 🚀 첫 번째 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-zoom-1"
        style={{ backgroundImage: "url('/images/main/main4.jpg')" }}
      ></div>

      {/* 🚀 두 번째 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-zoom-2"
        style={{ backgroundImage: "url('/images/main/main1.jpg')" }}
      ></div>

      {/* 🚀 세 번째 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-zoom-3"
        style={{ backgroundImage: "url('/images/main/main2.jpg')" }}
      ></div>

      {/* 🚀 텍스트 컨텐츠 (배경 이미지 위에 고정됨) */}
      <div className="relative flex justify-center items-center flex-col h-4/5 isolate z-10 text-center px-4">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-5 font-bold font-play">
          WHATEVER
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-extrabold font-play">
          Dreaming Empowering
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl mb-10 md:mb-12 lg:mb-14 xl:mb-16 font-extrabold font-play">
          Innovation With AI
        </h2>
        <h3 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl font-semibold">
          더블유브이알은 분광 이미지 센서 기술과 최첨단 인공지능 알고리즘을
          결합하여
        </h3>
        <h3 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl font-semibold">
          환경 모니터링, 건강 진단 등의 다양한 분야에서 혁신적인 맞춤형 솔루션을
          제공합니다.
        </h3>
      </div>

      <div className="relative flex flex-col justify-center items-center">
        <Image
          src={scroll}
          alt="scroll"
          width={50}
          className="w-10 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-18"
        />
        <span className="font-play text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-medium">
          Scroll
        </span>
      </div>
    </div>
  );
}
