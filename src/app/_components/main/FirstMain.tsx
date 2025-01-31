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
      <div className="relative flex justify-center items-center flex-col h-4/5 isolate z-10">
        <h1 className="text-3xl mb-5 font-bold font-play">WHATEVER</h1>
        <h2 className="text-8xl font-extrabold font-play">Empowering</h2>
        <h2 className="text-8xl mb-16 font-extrabold font-play">
          Innovation With AI
        </h2>
        <h3 className="text-2xl font-semibold">
          더블유브이알은 분광 이미지 센서 기술과 최첨단 인공지능 알고리즘을
          결합하여
        </h3>
        <h3 className="text-2xl font-semibold">
          환경 모니터링, 건강 진단 등의 다양한 분야에서 혁신적인 맞춤형 솔루션을
          제공합니다.
        </h3>
      </div>

      <div className="relative flex flex-col justify-center items-center">
        <Image src={scroll} alt="scroll" width={70} />
        <span className="font-play text-xl font-medium">Scroll</span>
      </div>
    </div>
  );
}
