import solution1 from '@/../public/images/solution/solution/solution1.png';
import solution2 from '@/../public/images/solution/solution/solution2.png';
import solution3 from '@/../public/images/solution/solution/solution3.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* 상단 타이틀 영역 */}
      <div className="flex flex-col justify-center items-center font-sans gap-4 mb-20">
        <h2 className="text-2xl md:text-4xl">스마트 누수 탐지 AI 솔루션</h2>
        <h3 className="text-xl md:text-2xl text-slate-700">
          `정밀한 누수 탐지와 신속한 대응을 위한 AI 기반 솔루션`
        </h3>
      </div>

      {/* 설명 텍스트 */}
      <div className="mb-10 px-4 md:px-20 text-center">
        <span className="text-base md:text-lg">
          상수관로에서 발생하는 누수 소리를 AI가 분석해 정확한 누수 위치와
          상태를 파악하는 솔루션입니다.
          <br />
          기존의 육안 검사나 전통적인 청음 장비보다 더 빠르고 정확하게 누수를
          찾아낼 수 있습니다.
          <br />
          AI와 IoT 기술이 융합되어, 실시간으로 누수 상태를 진단하고 즉각적인
          경보를 발송합니다.
        </span>
      </div>

      {/* 카드 섹션 */}
      <div className="w-full md:w-3/5">
        <hr className="w-full" />
        <div className="flex flex-col items-center justify-center pt-10">
          <h3 className="mb-5 text-[#41C7EB] text-xl font-play">
            AI 기반 누수 탐지
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-4 md:gap-10 mb-20">
          <div className="bg-slate-50 rounded-md h-64 md:h-80 w-full md:w-1/3 flex flex-col justify-center items-center gap-5 p-4">
            <Image className="mb-3" src={solution2} alt="solution-image" />
            <h5 className="text-xl md:text-2xl font-semibold text-slate-500">
              상수관로 누수 및 파손 발생
            </h5>
            <h6 className="text-sm md:text-base">
              청음식 누수 탐지 장비로 감지
            </h6>
          </div>
          <div className="bg-slate-50 rounded-md h-64 md:h-80 w-full md:w-1/3 flex flex-col justify-center items-center gap-5 p-4">
            <Image className="mb-3" src={solution1} alt="solution-image" />
            <h5 className="text-xl md:text-2xl font-semibold text-slate-500">
              AIoT 누수 탐지
            </h5>
            <div className="text-center">
              <h6 className="text-sm md:text-base">
                사운드 데이터 LSTM 자동 분석
              </h6>
              <h6 className="text-sm md:text-base">
                On-device 데이터 분석 및 처리
              </h6>
            </div>
          </div>
          <div className="bg-slate-50 rounded-md h-64 md:h-80 w-full md:w-1/3 flex flex-col justify-center items-center gap-5 p-4">
            <Image className="mb-3" src={solution3} alt="solution-image" />
            <h5 className="text-xl md:text-2xl font-semibold text-slate-500">
              현장 관리자
            </h5>
            <div className="text-center">
              <h6 className="text-sm md:text-base">
                AI 분석 결과 관리자에게 전달
              </h6>
              <h6 className="text-sm md:text-base">
                이동식 기기로 확인 및 빠른 현장 대처
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* 작동방법 섹션 */}
      <div className="w-full md:w-3/5 p-4 md:p-8">
        <div className="flex flex-col items-start justify-center pt-10">
          <h3 className="mb-5 text-2xl font-semibold">작동방법</h3>
          <div className="flex flex-col items-start justify-center gap-4 md:gap-5 text-base md:text-lg px-4">
            <h5 className="text-slate-800">
              1. 청음 센서가 상수관로에서 발생하는 누수음을 수집합니다.
            </h5>
            <h5 className="text-slate-800">
              2. AI 알고리즘이 누수음의 패턴을 분석해 특정 패턴(이상징후)을
              감지합니다.
            </h5>
            <h5 className="text-slate-800">
              3. 실시간으로 누수 위치를 파악하고, 관리자에게 즉시 알림을
              전송합니다.
            </h5>
            <h5 className="text-slate-800">
              4. 누수 데이터를 체계적으로 저장해 지속적인 관리와 분석이
              가능합니다.
            </h5>
          </div>
        </div>
      </div>

      {/* 특장점 섹션 */}
      <div className="w-full md:w-3/5 bg-slate-50 my-16 p-4 md:p-8">
        <h2 className="text-2xl font-semibold mb-5">특장점</h2>
        <div className="flex flex-col md:flex-row">
          <div className="p-5 flex flex-col justify-center gap-10 items-start w-full md:w-1/3">
            <div className="bg-slate-200 py-2 px-6 rounded-sm text-lg font-semibold">
              정확도 95% 이상의 탐지율
            </div>
            <div className="bg-slate-200 py-2 px-6 rounded-sm text-lg font-semibold">
              실시간 모니터링으로 빠른 대처 가능
            </div>
            <div className="bg-slate-200 py-2 px-6 rounded-sm text-lg font-semibold">
              임베디드 시스템으로 기존 시설에 쉽게 설치
            </div>
            <div className="bg-slate-200 py-2 px-6 rounded-sm text-lg font-semibold">
              데이터 기반의 체계적인 관리
            </div>
          </div>
          <div className="p-5 flex flex-col justify-center gap-10 items-start w-full md:w-2/3">
            <div className="py-2 px-6 rounded-sm text-lg font-semibold">
              AI가 누수 소리의 미세한 차이까지 분석해 오탐률을 최소화합니다.
            </div>
            <div className="py-2 px-6 rounded-sm text-lg font-semibold">
              즉각적인 경보로 신속한 유지보수가 가능합니다.
            </div>
            <div className="py-2 px-6 rounded-sm text-lg font-semibold">
              기존 상수관망에 별도의 공사 없이 간편하게 설치 가능합니다.
            </div>
            <div className="py-2 px-6 rounded-sm text-lg font-semibold">
              누수 패턴과 데이터를 축적해 효율적인 상수관 관리가 가능합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
