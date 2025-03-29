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
            저희 회사는 환경 인프라에 특화된 AI 솔루션을 제공하고 있습니다.
            <br />
            센싱 기술과 인공지능(AI)을 결합해 수자원 관리와 하수처리 효율화,
            자산관리 등 다양한 분야에서
            <br />
            혁신적인 기술로 지속 가능한 미래를 만들기 위해 노력하고 있습니다.
          </span>
          <span className="text-lg md:text-xl font-medium">
            데이터를 기반으로 미래를 예측하고, 이를 통해 스마트한 환경 관리
            솔루션을 제안합니다.
            <br />
            AI와 IoT를 결합해 환경 인프라의 상태를 실시간으로 진단하고
            <br />
            효율적인 관리가 가능하도록 지원하고 있습니다.
          </span>
          <span className="text-lg md:text-xl font-medium">
            저희의 기술은 정확한 예측과 신속한 대응을 통해 에너지 절감과
            탄소중립을 실현하고 있습니다.
            <br />
            또한 안전한 물 관리와 깨끗한 환경을 위해 고객 맞춤형 솔루션과 신속한
            서비스를 제공에 최선을 다하고 있습니다.
          </span>
          <span className="text-lg md:text-xl font-medium">
            모두가 안전하고 쾌적한 환경에서 살아갈 수 있도록
            <br />
            앞으로도 환경과 기술의 조화를 통해 사회적 가치를 실현하고
            <br />
            혁신적인 솔루션으로 고객의 기대에 부응하겠습니다.
          </span>
          <span className="text-lg md:text-xl font-medium">
            (주)더블유브이알대표 박용균
          </span>
        </div>
      </div>
    </div>
  );
}
