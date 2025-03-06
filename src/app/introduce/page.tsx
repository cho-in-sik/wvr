import Logo from '@/../public/images/logo/PNG 1.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 py-10">
      {/* 로고 영역 */}
      <div className="flex justify-center items-center p-6 md:p-10">
        <Image src={Logo} alt="Logo" height={300} />
      </div>
      {/* 본문 영역 */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center font-sans md:border-l-2 border-t-2 md:border-t-0 md:pl-10">
        <h1 className="text-center text-3xl md:text-4xl font-normal py-4">
          &quot;지능형 솔루션으로 내일의 환경을 설계합니다&quot;
        </h1>
        <div className="flex flex-col gap-6 p-4 sm:p-8 md:p-10">
          <div>
            <h3 className="font-medium text-xl md:text-2xl mb-2">GREETINGS</h3>
            <h2 className="font-semibold text-2xl md:text-4xl mb-3">인사말</h2>
          </div>
          <span className="text-base md:text-lg font-medium">
            더블유브이알은 기후변화 대응을 위한 환경 인프라 솔루션 개발에
            매진해왔습니다.
            <br />
            센싱 기술과 인공지능(AI)을 결합해 수자원 관리, 대기질 개선, 하수처리
            효율화 등 다양한 분야에서 혁신적인 기술을 제공하고 있으며,
            <br />
            이를 통해 지속 가능한 미래를 만드는 데 집중하고 있습니다.
          </span>
          <span className="text-base md:text-lg font-medium">
            저희는 데이터를 통해 미래를 예측하고, 이를 기반으로 보다 스마트한
            환경 관리 솔루션을 제안합니다.
            <br />
            AIoT 유량계, AI 기반 누수 탐지, 탄소중립 하수처리 솔루션 등 당사의
            제품들은 환경 인프라의 상태를 실시간으로 진단하고
            <br />
            효율적으로 관리할 수 있도록 지원합니다.
          </span>
          <span className="text-base md:text-lg font-medium">
            또한, 국책 과제 수행을 통해 기술력을 인정받아 왔으며, 글로벌
            시장으로의 확장을 목표로 지속적인
            <br />
            연구개발과 투자에 힘쓰고 있습니다. 이러한 노력은 모두가 안전하고
            쾌적한 환경에서 살아갈 수 있는 세상을 만들기 위함입니다.
          </span>
          <span className="text-base md:text-lg font-medium">
            앞으로도 더블유브이알은 환경과 기술의 조화를 통해 사회적 가치를
            실현하고, 혁신적인 솔루션으로 고객의 기대에 부응하겠습니다.
            <br />
            감사합니다.
          </span>
          <span className="text-base md:text-lg font-medium">
            (주)더블유브이알대표 박용균
          </span>
        </div>
      </div>
    </div>
  );
}
