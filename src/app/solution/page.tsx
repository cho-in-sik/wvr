import solutionArrow from '@/../public/images/solution/solutionArrow.png';
import solution1 from '@/../public/images/solution/solution/solution1.png';
import solution2 from '@/../public/images/solution/solution/solution2.png';
import solution3 from '@/../public/images/solution/solution/solution3.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mt-20">
        청음식 누수 탐지 구축
      </h2>
      <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold mt-10 text-slate-700 mb-20">
        &apos;AIoT 임베디드 누수탐지 시스템 개발을 통해 지능형 물관리 시스템
        구축&apos;
      </h3>

      <div className="w-3/5">
        <hr className="w-full" />
        <div className="flex flex-col items-center justify-center py-10">
          <h3 className="mb-5 text-[#41C7EB] text-xl font-play">
            AIoT 기반 누수 탐지
          </h3>
          <h3 className="mb-5 font-bold text-3xl">
            더블유브이알이 더하는 가치
          </h3>
          <h5 className="text-slate-600">
            AIoT 기반 누수 탐지AIoT 기반 누수 탐지
          </h5>
          <h5 className="text-slate-600">
            AIoT 기반 누수 탐지AIoT 기반 누수 탐지
          </h5>
        </div>
        <div className="flex justify-around items-center gap-10 mb-20">
          <div className="bg-slate-50 rounded-md h-80 w-1/3 flex flex-col justify-center items-center gap-5">
            <Image className="mb-3" src={solution2} alt="solution-image" />
            <h5 className="text-2xl font-semibold text-slate-500">
              상수관로 누수 및 파손 발생
            </h5>

            <h6>청음식 누수 탐지 장비로 감지</h6>
          </div>
          <div className="bg-slate-50 rounded-md h-80 w-1/3 flex flex-col justify-center items-center gap-5">
            <Image className="mb-3" src={solution1} alt="solution-image" />
            <h5 className="text-2xl font-semibold text-slate-500">
              AIoT 누수 탐지
            </h5>

            <div className="text-center">
              <h6>사운드 데이터 LSTM 자동 분석</h6>
              <h6>On-device 데이터 분석 및 처리</h6>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md h-80 w-1/3 flex flex-col justify-center items-center gap-5">
            <Image className="mb-3" src={solution3} alt="solution-image" />
            <h5 className="text-2xl font-semibold text-slate-500">
              현장 관리자
            </h5>

            <div className="text-center">
              <h6>AI 분석 결과 관리자에게 전달</h6>
              <h6>이동식 기기로 확인 및 빠른 현장 대처</h6>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-10">
          <Image src={solutionArrow} alt="solution-aarow" />
        </div>
        <h4 className="text-center text-[#41C7EB] text-4xl font-bold mb-5">
          “물관리의 AI 혁신”
        </h4>
        <h4 className="text-center">지능형 물관리 시스템</h4>
        <h4 className="text-center">AI 융복합 기술 실현</h4>
      </div>

      <div className="w-3/5 bg-slate-50 my-16 p-8">
        <h2 className="text-2xl font-semibold mb-5">모델기능</h2>
        <div className="p-5 flex flex-col justify-center gap-10 items-start">
          <div className="flex items-center justify-start gap-16">
            <div className=" bg-slate-100 py-2 px-6 rounded-sm text-lg font-semibold">
              효율성
            </div>
            <div className="text-slate-800">
              AI를 활용하여 실시간 데이터 수집 및 분석, 누수 및 이상 징후
              신속감지
            </div>
          </div>
          <div className="flex items-center justify-start gap-16">
            <div className=" bg-slate-100 py-2 px-6 rounded-sm text-lg font-semibold">
              경제성
            </div>
            <div className="text-slate-800">
              중앙서버와 상시적 통신 필요 없어 저비용, 고효율 관리시스템 구축
              가능
            </div>
          </div>
          <div className="flex items-center justify-start gap-16">
            <div className=" bg-slate-100 py-2 px-6 rounded-sm text-lg font-semibold">
              적용성
            </div>
            <div className="text-slate-800">
              도시규모 및 시스템 구축 여부와 상관없이 설치 가능하며 현장에서
              실시간 모니터링 가능
            </div>
          </div>
          <div className="flex items-center justify-start gap-16">
            <div className=" bg-slate-100 py-2 px-6 rounded-sm text-lg font-semibold">
              안정성
            </div>
            <div className="text-slate-800">
              별도의 통신 및 전력공급 추가 설치 없이 안정적인 운영 가능
            </div>
          </div>
          <div className="flex items-center justify-start gap-16">
            <div className=" bg-slate-100 py-2 px-6 rounded-sm text-lg font-semibold">
              시장성
            </div>
            <div className="text-slate-800">
              수자원 인프라가 비교적 부족한 지방소도시, 개발도상국까지 적용 가능
              시장 넓음
            </div>
          </div>
          <div className="flex items-center justify-start gap-16">
            <div className=" bg-slate-100 py-2 px-6 rounded-sm text-lg font-semibold">
              친환경
            </div>
            <div className="text-slate-800">
              실시간 모니터링으로 수자원 낭비 및 재생산 요구 에너지 소모를 줄여
              탄소 저감
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
