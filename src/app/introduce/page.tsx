import Logo from '@/../public/images/logo/PNG 1.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 py-28 gap-20">
      {/* 로고 영역 */}
      <div className="flex justify-center items-center p-6 md:p-10 md:mr-20">
        <Image src={Logo} alt="Logo" height={300} />
      </div>
      {/* 본문 영역 */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center font-sans md:border-l border-[#63BBA2] border-t-2 md:border-t-0">
        <h1 className="text-center text-3xl md:text-4xl py-4 mb- font-sans font-semibold">
          &quot;지능형 솔루션으로 내일의 환경을 설계합니다&quot;
        </h1>
        <div className="flex flex-col gap-6 p-4 sm:p-8 md:p-10">
          <div>
            <h3 className="font-medium text-xl md:text-2xl mb-2">GREETINGS</h3>
            <h2 className="font-semibold text-2xl md:text-4xl mb-3">인사말</h2>
          </div>
          <span className="text-lg md:text-xl font-medium">
            안녕하십니까. (주)더블유브이알 대표이사입니다.
          </span>
          <span className="text-lg md:text-xl font-medium">
            저희 회사는 환경 인프라의 지속 가능성을 고민하며,
            <br />
            AI 기술을 통해 더 나은 세상을 만드는 것을 사명으로 삼고 있습니다.
            <br />
            센싱 기술과 인공지능(AI)을 결합해 수자원 관리와 하수처리 효율화,
            자산관리 등 다양한 분야에서
            <br />
            현장 적용 가능한 스마트 기술을 개발하고 있습니다.
          </span>
          <span className="text-lg md:text-xl font-medium">
            이를 위해 환경 계측 데이터를 정밀하게 분석하여 문제 진단 및 사전
            예측하고,
            <br />
            신속하게 대응할 수 있는 기술 기반의 관리 체계를 구축을 지향하고
            있습니다.
            <br />
            이처럼 저희는 현장 중심의 솔루션과 안정적인 서비스를 통해 신뢰받는
            기술 기업으로 성장하고 있습니다.
          </span>

          <span className="text-lg md:text-xl font-medium">
            앞으로도 모두가 안전하고 쾌적한 환경에서 살아갈 수 있도록
            <br />
            환경과 기술의 조화를 통해 사회적 가치를 실현하며,
            <br />
            지속 가능한 미래를 위한 혁신적인 솔루션을 제공하겠습니다.
          </span>
          <span className="text-lg md:text-xl font-medium">감사합니다.</span>
          <span className="text-lg md:text-xl font-medium">
            (주)더블유브이알대표
          </span>
        </div>
      </div>
    </div>
  );
}
