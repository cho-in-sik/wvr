import effect from '@/../public/images/solution/embeded/embeded2.png';
import solutionArrow from '@/../public/images/solution/solutionArrow.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* 상단 타이틀 영역 */}
      <div className="flex flex-col justify-center items-center font-sans gap-4 mb-20 mt-28">
        <h2 className="text-2xl md:text-4xl">상수관로 AIoT 스마트 유량계</h2>
        <h3 className="text-xl md:text-2xl text-slate-700">
          `IoT 기반 센서를 통해 유량 데이터를 수집하고, AI가 이를 분석하는
          스마트 유량계`
        </h3>
      </div>

      <h4 className="text-center text-[#41C7EB] text-2xl md:text-4xl font-bold mb-10">
        “지능형 물공급 인프라 구축”
      </h4>
      <div className="flex justify-center items-cente mb-10">
        <Image src={solutionArrow} alt="solutionArrow" width={50} />
      </div>

      <div className="mb-10 px-4 md:px-20">
        <span className="text-base md:text-lg">
          AIoT (AI + IoT) 기술을 활용해 상수도 유량 데이터를 실시간으로
          수집하고, 이를 바탕으로 누수나 파손 여부를 자동으로 탐지해 주는 스마트
          유량계입니다.
          <br /> 기존 상수관망 운영 시스템과 연동해 스마트 물 공급 인프라를
          구축하고, 데이터 기반의 의사결정을 통해 물 공급 및 관리의 효율성을
          최적화합니다.
        </span>
      </div>

      {/* 작동방법 섹션 */}
      <div className="w-full md:w-3/5 p-4 md:p-8">
        <hr className="w-full" />
        <div className="flex flex-col items-start justify-center pt-10">
          <h3 className="mb-5 text-2xl font-semibold">작동방법</h3>
          <div className="flex flex-col items-start justify-center gap-4 md:gap-5 text-base md:text-lg px-4">
            <h5 className="text-slate-800">
              1. IoT 센서가 유량 데이터를 실시간으로 수집합니다.
            </h5>
            <h5 className="text-slate-800">
              2. AI 알고리즘이 수집된 유량 패턴 데이터를 분석해 이상 징후를
              탐지합니다.
            </h5>
            <h5 className="text-slate-800">
              3. 분석 결과 및 유량 데이터는 서버에 저장되어 종합적인 관리와
              분석이 가능합니다.
            </h5>
            <h5 className="text-slate-800">
              4. 누수 또는 파손 발생 시 관리자에게 즉시 알림이 전송됩니다.
            </h5>
          </div>
        </div>
      </div>

      {/* 기대효과 섹션 */}
      <div className="w-full md:w-3/5 bg-slate-50 my-16 p-4 md:p-8">
        <h2 className="text-2xl font-semibold mb-5">기대효과</h2>
        <div className="p-4 flex flex-col justify-center gap-4 md:gap-10 items-start">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-16">
            <div className="bg-slate-200 py-2 px-4 md:px-6 rounded-sm text-base md:text-lg font-semibold">
              효율성
            </div>
            <div className="text-slate-800 text-base md:text-lg">
              AI를 활용하여 실시간 데이터 수집 및 분석, 누수 및 이상 징후
              신속감지
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-16">
            <div className="bg-slate-200 py-2 px-4 md:px-6 rounded-sm text-base md:text-lg font-semibold">
              경제성
            </div>
            <div className="text-slate-800 text-base md:text-lg">
              중앙서버와 상시적 통신 필요 없어 저비용, 고효율 관리시스템 구축
              가능
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-16">
            <div className="bg-slate-200 py-2 px-4 md:px-6 rounded-sm text-base md:text-lg font-semibold">
              적용성
            </div>
            <div className="text-slate-800 text-base md:text-lg">
              도시규모 및 시스템 구축 여부와 상관없이 설치 가능하며 현장에서
              실시간 모니터링 가능
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-16">
            <div className="bg-slate-200 py-2 px-4 md:px-6 rounded-sm text-base md:text-lg font-semibold">
              안정성
            </div>
            <div className="text-slate-800 text-base md:text-lg">
              별도의 통신 및 전력공급 추가 설치 없이 안정적인 운영 가능
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-16">
            <div className="bg-slate-200 py-2 px-4 md:px-6 rounded-sm text-base md:text-lg font-semibold">
              시장성
            </div>
            <div className="text-slate-800 text-base md:text-lg">
              수자원 인프라가 비교적 부족한 지방소도시, 개발도상국까지 적용 가능
              시장 넓음
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-16">
            <div className="bg-slate-200 py-2 px-4 md:px-6 rounded-sm text-base md:text-lg font-semibold">
              친환경
            </div>
            <div className="text-slate-800 text-base md:text-lg">
              실시간 모니터링으로 수자원 낭비 및 재생산 요구 에너지 소모를 줄여
              탄소 저감
            </div>
          </div>
        </div>
      </div>

      {/* 특장점 섹션 */}
      <div className="w-full md:w-3/5 my-16 p-4 md:p-8">
        <h2 className="text-2xl font-semibold mb-5">특장점</h2>
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* 상단 카드 행 */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-20 -mb-10">
            <div className="w-full md:w-1/3 h-32 bg-slate-100 px-4 md:px-7 py-4 md:py-5 rounded-md relative mb-4 md:mb-0">
              <h4 className="text-base md:text-lg font-semibold text-black mb-2">
                정확도 95% 이상의 탐지율
              </h4>
              <h5 className="text-sm md:text-base">
                AI가 유량의 미세한 변동까지 감지해 정밀 탐지가 가능합니다.
              </h5>
            </div>
            <div className="w-full md:w-1/3 h-32 bg-slate-100 px-4 md:px-7 py-4 md:py-5 rounded-md relative mb-4 md:mb-0">
              <h4 className="text-base md:text-lg font-semibold text-black mb-2">
                실시간 모니터링으로 빠른 대처 가능
              </h4>
              <h5 className="text-sm md:text-base">
                즉각적인 경보와 알림으로 빠른 유지보수가 가능합니다.
              </h5>
            </div>
          </div>
          <div className="relative my-4">
            <Image src={effect} alt="effect" width={300} />
          </div>
          {/* 하단 카드 행 */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-20 -mt-10">
            <div className="w-full md:w-1/3 h-32 bg-slate-100 px-4 md:px-7 py-4 md:py-5 rounded-md relative mb-4 md:mb-0">
              <h4 className="text-base md:text-lg font-semibold text-black mb-2">
                클라우드 기반 통합 관리
              </h4>
              <h5 className="text-sm md:text-base">
                상수도 데이터의 종합 분석을 통해 효율적인 운영이 가능합니다.
              </h5>
            </div>
            <div className="w-full md:w-1/3 h-32 bg-slate-100 px-4 md:px-7 py-4 md:py-5 rounded-md relative">
              <h4 className="text-base md:text-lg font-semibold text-black mb-2">
                데이터 기반의 의사결정
              </h4>
              <h5 className="text-sm md:text-base">
                정확한 유량 및 압력 데이터를 기반으로 합리적인 의사결정이
                가능합니다.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
