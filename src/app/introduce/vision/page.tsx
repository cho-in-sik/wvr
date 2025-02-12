import visionLeft from '@/../public/images/introduce/visionLeft.jpg';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold">
        비전
      </h1>
      <div className="w-3/5 flex justify-between items-center h-96">
        <Image src={visionLeft} alt="vision-image" />
        <div className="flex flex-col justify-center items-center text-4xl gap-4">
          <h2 className="">
            WVR은 기후변화 대응을 위한 계측 및 이미지 센서 데이터를 활용한
          </h2>
          <h2 className="font-semibold">
            인공지능 맞춤형 솔루션을 제공합니다.
          </h2>
        </div>
        <Image src={visionLeft} alt="vision-image" className="-scale-x-100" />
      </div>

      <div className="w-3/5 h-96 flex justify-between items-center mb-10">
        <div className="rounded-full shadow-sm  w-80 h-80 border-slate-300 border-2 flex justify-center items-center">
          <div className="w-64 h-64 rounded-full shadow-xl flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold mb-4">센싱기술</h4>
            <h5 className="text-lg">유량, 수질, 수압, 대기질</h5>
            <h5 className="text-lg">에너지, 이미지</h5>
          </div>
        </div>
        <div className="rounded-full shadow-sm bg-slate-100 w-96 h-96 flex justify-center items-center">
          <div className="rounded-full shadow-sm bg-slate-600 w-80 h-80 flex flex-col justify-center items-center text-white">
            <h4 className="text-3xl font-bold mb-4">더블유브이알</h4>
            <h5 className="text-2xl font-semibold">Empowering Innovation</h5>
            <h5 className="text-2xl font-semibold">with AI</h5>
          </div>
        </div>

        <div className="rounded-full shadow-sm  w-80 h-80 border-slate-300 border-2 flex justify-center items-center">
          <div className="w-64 h-64 rounded-full shadow-xl flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold mb-4">On-device AI 기술</h4>
            <h5 className="text-lg">환경 인프라 상태 진단</h5>
            <h5 className="text-lg">및 예측</h5>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96">
        {/* ✅ 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/introduce/introduce2.jpg')" }}
        ></div>

        {/* ✅ 흐려지는 효과 (그라데이션 오버레이) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent"></div>
      </div>
    </div>
  );
}
