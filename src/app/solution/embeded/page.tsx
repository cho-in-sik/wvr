import solutionArrow from '@/../public/images/solution/solutionArrow.png';
import effect from '@/../public/images/solution/embeded/embeded2.png';

import foreign from '@/../public/images/solution/embeded/foreign.png';
import minus from '@/../public/images/solution/embeded/minus.png';
import water from '@/../public/images/solution/embeded/water.png';
import system from '@/../public/images/solution/embeded/system.png';

import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mt-20">
        임베디드 유량계
      </h2>
      <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold mt-10 text-slate-700 mb-10">
        &apos;스마트 유량계를 활용한 지능형 통합 물관리 시스템&apos;
      </h3>
      <div className="w-1/5 mb-20 text-center">
        <h5 className="text-lg font-bold mb-5">개발 배경</h5>
        <div className="flex flex-col justify-center items-center gap-2 font-normal text-base text-slate-500">
          <h5>노후화된 상수도관의 증가로 연간 누수량 크게 증가하고</h5>
          <h5>기존의 누수탐지는 현장 관리자의 경험에 의존해 정확도가 낮으며</h5>
          <h5>
            현장 맞춤 대응을 위한 광범위한 데이터의 가공 및 효율적인 분석기술
            미비합니다.
          </h5>
        </div>
      </div>
      <div className="text-center mb-10 text-3xl">
        <h4 className="font-semibold text-gray-800">
          IoT, ICT , 센싱 기술 및 AI 딥러닝 모델 도입
        </h4>
      </div>
      <div className="flex justify-center items-center mb-10">
        <Image src={solutionArrow} alt="solution-aarow" />
      </div>

      <h4 className="text-center text-[#41C7EB] text-4xl font-bold mb-5">
        “지능형 물공급 인프라 구축”
      </h4>
      <h4 className="text-center">기존 상수관망</h4>
      <h4 className="text-center mb-10">운영시스템과 연계</h4>
      <div className="w-3/5">
        <hr className="w-full" />
        <div className="flex flex-col items-center justify-center py-10">
          <h3 className="mb-5 text-[#41C7EB] text-xl font-play">
            스마트 유량계
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
      </div>

      <div className="w-3/5 bg-slate-50 my-16 p-8">
        <h2 className="text-2xl font-semibold mb-5">기대효과</h2>
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

      <div className="w-3/5 my-16 p-8">
        <h2 className="text-2xl font-semibold mb-5">기대효과</h2>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-between items-center px-20 -mb-10">
            <div className="w-1/3 h-32 bg-slate-100 px-10 py-5 rounded-md relative">
              <h4 className="text-lg font-semibold text-black">
                물 인프라 관리
              </h4>
              <h5>실시간 모니터링으로 효율적 수자원 데이터 분석</h5>
              <h5>누수저감 및 물 공급 효율 향상</h5>
              <div className="absolute -right-5 -bottom-7 p-5 bg-white shadow-xl rounded-full">
                <Image src={water} alt="water" />
              </div>
            </div>
            <div className="w-1/3 h-32 bg-slate-100 p-5 rounded-md">
              <h4 className="text-lg font-semibold text-black">
                의사결정자동화
              </h4>
              <h5>수자원 데이터 활용 및 빅데이터 구축</h5>
              <h5>
                도시인프라 자료의 통합관리와 수질 모니터링 시스템 구축 가능
              </h5>
            </div>
          </div>
          <div className="relative">
            <Image src={effect} alt="effect" width={300} />
            <span className="absolute text-3xl font-semibold top-[47%] left-[32%]">
              기대효과
            </span>
          </div>
          <div className="w-full flex justify-between items-center px-20 -mt-10">
            <div className="w-1/3 h-32 bg-slate-100 p-5 rounded-md">
              <h4 className="text-lg font-semibold text-black">
                에너지 절감 및 탄소중립
              </h4>
              <h5>누수로 인한 비용 절감 및 무분별한 상수도관 공사 방지</h5>
              <h5>지속가능한 수자원 확보와 기후변화 및 재난 상황 대응</h5>
            </div>
            <div className="w-1/3 h-32 bg-slate-100 p-5 rounded-md">
              <h4 className="text-lg font-semibold text-black">
                해외진출 확장성
              </h4>
              <h5>중앙 서버에 의존하지 않고 독립적으로 작동 가능</h5>
              <h5>태양광 패널을 이용해 자체 전력 사용 가능</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
