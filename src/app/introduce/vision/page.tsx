import visionLeft from '@/../public/images/introduce/visionLeft.jpg';
import vision from '@/../public/images/introduce/vision.jpeg';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mt-20">
        비전
      </h1> */}
      {/* <div className="w-3/5 flex justify-between items-center h-96">
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
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/introduce/introduce2.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent"></div>
      </div> */}
      <div className="font-sans flex flex-col justify-center items-center mt-10">
        <h1 className="font-medium text-3xl mb-10">
          지속 가능한 환경 인프라를 위한 스마트 솔루션
        </h1>
        <h2 className="font-semibold text-2xl mb-20 border-t-2 pt-10">
          더블유브이알은 AI와 데이터를 통해 새로운 가능성을 열고 환경과 미래를
          설계합니다
        </h2>
        <div className="flex justify-center items-center gap-28">
          <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl px-6 py-4 w-80">
            <div className="text-blue-400 text-2xl font-semibold">
              스마트 인프라와 AI 솔루션
            </div>
            <div>효율적 운영과 탄소중립 실현</div>
          </div>
          <Image src={vision} alt="vision" width={350} />
          <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl px-6 py-4 w-80">
            <div className="text-blue-400 text-2xl font-semibold">
              스마트 자산관리
            </div>
            <div>자산의 체계적 관리와 최적화</div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl px-6 py-4 w-80">
            <div className="text-green-600 text-2xl font-semibold">
              지속가능한 환경 관리
            </div>
            <div>자산의 체계적 관리와 최적화</div>
          </div>
        </div>
      </div>
    </div>
  );
}
