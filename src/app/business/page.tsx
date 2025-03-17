'use client';

export default function Page() {
  const handleMove = (id: string) => {
    const section = document.getElementById(`section${id}`);
    if (section) {
      const yOffset = -96;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* 상단 제목 영역 */}
      <div className="flex flex-col justify-center items-center font-sans gap-3 mb-10 py-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium">
          더블유브이알은 지속 가능한 인프라와 환경을 위한 스마트 관리를 목표로,
        </h3>
        <h3 className="text-xl sm:text-2xl md:text-3xl">
          AI와 IoT 기술을 접목해 정밀한 진단과 관리 솔루션을 제공합니다
        </h3>
      </div>

      {/* 이미지 박스 영역 */}
      <div className="text-white font-sans flex justify-center items-center gap-20 flex-wrap px-4 md:px-20 mb-10">
        {/* 상수도 관리 */}
        <div className="relative flex flex-col justify-center items-center bg-slate-200 w-full sm:w-1/2 lg:w-[35%] h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat bg-[url('/images/business/business4.jpeg')]">
          <div
            id="1"
            className="absolute right-4 sm:right-10 top-8 text-white rounded-2xl border-2 border-white text-base sm:text-xl font-medium py-1 sm:py-2 px-3 sm:px-6 cursor-pointer"
            onClick={(e) => handleMove(e.currentTarget.id)}
          >
            More
          </div>
          <h4 className="text-xl sm:text-3xl lg:text-5xl font-medium">
            상수도 관리
          </h4>
          <div className="font-normal text-base sm:text-2xl absolute bottom-4 sm:bottom-10 left-4 sm:left-16">
            <h5>청음식 누수음 분석 AI</h5>
            <h5>상수관로 AIoT 스마트 유량계</h5>
          </div>
        </div>

        {/* 하수처리장 관리 */}
        <div className="relative flex flex-col justify-center items-center bg-slate-200 w-full sm:w-1/2 lg:w-[35%] h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat bg-[url('/images/business/business1.jpeg')]">
          <div
            id="2"
            className="absolute right-4 sm:right-10 top-8 text-white rounded-2xl border-2 border-white text-base sm:text-xl font-medium py-1 sm:py-2 px-3 sm:px-6 cursor-pointer"
            onClick={(e) => handleMove(e.currentTarget.id)}
          >
            More
          </div>
          <h4 className="text-xl sm:text-3xl lg:text-5xl font-medium">
            하수처리장 관리
          </h4>
          <div className="font-normal text-base sm:text-2xl absolute bottom-4 sm:bottom-10 left-4 sm:left-16">
            <h5>하수처리장 메탄 생성조 관리</h5>
            <h5>하수처리장 생물반응조 관리</h5>
          </div>
        </div>

        {/* 환경 모니터링 */}
        <div className="relative flex flex-col justify-center items-center bg-slate-200 w-full sm:w-1/2 lg:w-[35%] h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat bg-[url('/images/business/business3.jpeg')]">
          <div
            id="3"
            className="absolute right-4 sm:right-10 top-8 text-white rounded-2xl border-2 border-white text-base sm:text-xl font-medium py-1 sm:py-2 px-3 sm:px-6 cursor-pointer"
            onClick={(e) => handleMove(e.currentTarget.id)}
          >
            More
          </div>
          <h4 className="text-xl sm:text-3xl lg:text-5xl font-medium">
            환경 모니터링
          </h4>
          <div className="font-normal text-base sm:text-2xl absolute bottom-4 sm:bottom-10 left-4 sm:left-16">
            <h5>빗물터널 퇴적량 분광 분석</h5>
            <h5>다중분광 부단수 내시경</h5>
          </div>
        </div>

        {/* 자산관리 */}
        <div className="relative flex flex-col justify-center items-center bg-slate-200 w-full sm:w-1/2 lg:w-[35%] h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat bg-[url('/images/business/business2.jpeg')]">
          <div
            id="4"
            className="absolute right-4 sm:right-10 top-8 text-white rounded-2xl border-2 border-white text-base sm:text-xl font-medium py-1 sm:py-2 px-3 sm:px-6 cursor-pointer"
            onClick={(e) => handleMove(e.currentTarget.id)}
          >
            More
          </div>
          <h4 className="text-xl sm:text-3xl lg:text-5xl font-medium">
            자산관리
          </h4>
          <div className="font-normal text-base sm:text-2xl absolute bottom-4 sm:bottom-10 left-4 sm:left-16">
            <h5>상하수도 시설 자산관리 시스템</h5>
          </div>
        </div>
      </div>

      {/* 설명 섹션 */}
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div
          id="section1"
          className="w-full md:w-2/3 flex flex-col justify-center items-start text-base sm:text-xl md:text-3xl gap-4 p-4 sm:p-10"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-6 text-center">
            상수도 관리
          </h2>
          <h3>
            AIoT 스마트 유량계와 청음식 누수음 분석 AI를 활용해 상수도 관망의
            이상 탐지 및 효율적인 운영 지원
          </h3>
          <span>
            상수도 관리 사업은 안전하고 깨끗한 물 공급을 목표로, 상수관망의
            효율적인 유지보수와 누수 방지에 중점을 둡니다.
            <br /> AI와 IoT 기술을 통해 상수관로의 상태를 실시간으로
            모니터링하고, 이상 발생 시 즉각적인 대응이 가능합니다.
            <br /> 이를 통해 물 손실을 최소화하고, 관리 비용을 절감합니다.
          </span>
          <span>
            또한, 정밀한 유량 분석과 누수 탐지를 통해 수도 요금의 정확성을
            높이고,
            <br /> 상수관로의 노후화 정도를 예측해 선제적인 교체 및 보수가
            가능합니다.
          </span>
        </div>

        <div
          id="section2"
          className="w-full md:w-2/3 flex flex-col justify-center items-start text-base sm:text-xl md:text-3xl gap-4 p-4 sm:p-10 bg-blue-50"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-6 text-center">
            하수처리장 관리
          </h2>
          <h3>
            AI 기반의 혐기성 소화조 메탄 생성량 관리 및 생물반응조 송풍량 조절을
            통해 하수처리 효율 극대화
          </h3>
          <span>
            하수처리장 관리 사업은 탄소중립과 에너지 효율성을 목표로 합니다.
            <br />
            AI 기반 운영 솔루션을 통해 메탄 가스를 효율적으로 생성하고, 에너지
            절감형 송풍기 제어를 통해 운영 비용을 절감합니다.
            <br /> 또한, 수질 오염 방지와 친환경 운영을 지원합니다.
          </span>
          <span>
            혐기성 소화조에서는 메탄 생성량을 예측해 최적의 운영 방법을
            제시하고,
            <br /> 생물반응조에서는 송풍량을 자동으로 조정해 에너지 소비를
            최소화합니다.
            <br /> 이를 통해 하수처리 비용을 절감하고, 탄소 배출을 줄이는 효과를
            제공합니다.
          </span>
        </div>

        <div
          id="section3"
          className="w-full md:w-2/3 flex flex-col justify-center items-start text-base sm:text-xl md:text-3xl gap-4 p-4 sm:p-10"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-6 text-center">
            스마트 인프라 진단 시스템
          </h2>
          <h3>
            AIoT 스마트 유량계와 청음식 누수음 분석 AI를 활용해 상수도 관망의
            이상 탐지 및 효율적인 운영 지원
          </h3>
          <span>
            초분광 및 다중분광 분석을 활용한 빗물터널 퇴적량 분석 및 실시간 환경
            감시 환경 모니터링 사업은 지하 시설물과 대기, 수질의 오염 상태를
            정밀하게 진단합니다.
            <br /> 초분광 및 다중분광 기술을 통해 퇴적물, 오염물질의 종류와 양을
            파악하고, AI 분석으로 오염 원인을 추적해 정확한 대응 방안을
            제시합니다.
          </span>
          <span>
            또한, 빗물터널의 퇴적량을 실시간으로 모니터링해 정기적인 청소와
            유지보수를 지원합니다.
            <br />
            이를 통해 환경 오염을 예방하고, 유지관리 비용을 줄일 수 있습니다.
          </span>
        </div>

        <div
          id="section4"
          className="w-full md:w-2/3 flex flex-col justify-center items-start text-base sm:text-xl md:text-3xl gap-4 p-4 sm:p-10 bg-blue-50"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-6 text-center">
            자산관리
          </h2>
          <h3>
            스마트 인프라 진단 시스템 및 상하수도 관리 AI 솔루션으로 지하시설물
            및 환경 시설물의 상태를 진단하고 유지보수 계획 지원
          </h3>
          <span>
            자산관리 사업은 지하시설물, 상하수도 인프라, 공공시설의 효율적인
            운영과 유지보수를 목표로 합니다.
            <br />
            AI 기반의 예측 유지보수 솔루션을 통해 시설물의 수명 연장과 관리 비용
            절감을 지원합니다.
            <br /> 또한, 위험도 평가와 자산 가치를 분석해 효율적인 자산 관리
            전략을 제공합니다.
          </span>
          <span>
            정기적인 상태 진단과 데이터 기반의 자산 평가를 통해 시설물의
            노후화와 손상 위험을 사전에 방지합니다.
            <br /> 이를 통해 불필요한 예산 낭비를 줄이고, 효율적인 자산 운영이
            가능합니다.
          </span>
        </div>
      </div>
    </div>
  );
}
