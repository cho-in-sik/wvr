import environment from '@/../public/images/solution/environment.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* 상단 텍스트 영역 */}
      <div className="flex flex-col justify-center items-center font-sans gap-4 mb-16 mt-28">
        <h2 className="text-2xl md:text-4xl">환경 모니터링 시설 분광 분석</h2>
        <h3 className="text-xl md:text-2xl text-slate-700">
          `정밀한 환경 진단과 효율적인 유지보수를 위한 분광 AI 솔루션`
        </h3>
        <div className="text-lg text-center px-4 md:px-20 py-10">
          <div>
            초분광 및 다중분광 이미지를 활용해 지하 시설물의 상태와 빗물터널의
            퇴적량을 정밀하게 분석하는AI 기반 환경 모니터링 솔루션입니다.
            <br /> 육안으로 확인이 어려운 부분까지 분광 기술로 AI가 분석하고
            이를 통해 효율적인 유지보수와 의사결정 최적화가 가능합니다.
          </div>
        </div>
      </div>

      {/* 이미지와 설명 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-20 font-sans p-10">
        <div className="w-full md:w-auto flex justify-center">
          <Image src={environment} alt="environment" width={450} />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 w-full md:w-3/5">
          <h3 className="text-center text-3xl mb-10 font-medium">
            빗물터널 퇴적량 분광 분석
          </h3>
          <div className="mb-10">
            <div className="text-2xl mb-5 font-medium">
              🔍 어떤 솔루션인가요?
            </div>
            <div className="text-lg">
              초분광 이미징 기술을 활용해 빗물터널 내부의 퇴적물 상태를 정밀하게
              분석하는 솔루션입니다.
              <br /> 분광 이미지를 AI 분석하여 퇴적물의 종류와 양을 파악해
              <br />
              정기적인 유지보수와 청소시기를 자동으로 알려줍니다. <br />
              이를 통해 퇴적물로 인한 홍수 위험을 줄이고, 유지보수 비용을
              절감합니다.
            </div>
          </div>
          <div className="mb-10 flex flex-col gap-2">
            <div className="text-2xl mb-5 font-medium">
              ⚙ 어떻게 작동하나요?
            </div>
            <div className="text-lg">
              1. 초분광 카메라가 부착된 드론이 빗물터널 내부를 촬영해 퇴적물의
              스펙트럼 데이터를 수집합니다.
            </div>
            <div>
              2. AI 알고리즘이 퇴적물의 스펙트럼 데이터를 분석해 퇴적물의 양과
              종류를 파악합니다.
            </div>
            <div>
              3. 데이터 기반의 예측 유지보수로 효율적인 유지관리가 가능합니다.
            </div>
          </div>
          <div>
            <div className="text-2xl mb-5 font-medium">🌟 특장점</div>
            <div className="text-lg">
              <div className="mb-5">
                <span className="text-xl font-medium">
                  실시간 퇴적량 모니터링
                </span>
                <br /> 정확한 데이터를 바탕으로 즉각적인 대응이 가능합니다.
              </div>
              <div className="mb-5">
                <span className="text-xl font-medium">유지보수 비용 절감</span>
                <br /> 정확한 분석으로 불필요한 유지보수를 방지합니다.
              </div>
              <div>
                <span className="text-xl font-medium">
                  정확한 데이터 기반 의사결정
                </span>
                <br />
                AI가 분석한 데이터를 통해 합리적인 의사결정을 지원합니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 다중분광 부단수 내시경 영역 */}
      <div className="flex flex-col md:flex-row justify-start items-start gap-20 font-sans bg-slate-100 p-10">
        <div className="flex flex-col items-start justify-center gap-5 w-full md:w-3/5">
          <h3 className="text-center text-3xl mb-10 font-medium">
            다중분광 부단수 내시경
          </h3>
          <div className="mb-10">
            <div className="text-2xl mb-5 font-medium">
              🔍 어떤 솔루션인가요?
            </div>
            <div className="text-lg">
              다중분광 내시경을 통해 부단수 상태에서 지하 시설물의 상태를
              점검하는 솔루션입니다.
              <br /> 눈으로 볼 수 없는 부식이나 손상 부위를 정밀하게 탐지해 운영
              중지 없이 유지보수가 가능합니다.
            </div>
          </div>
          <div className="mb-10 flex flex-col gap-2">
            <div className="text-2xl mb-5 font-medium">
              ⚙ 어떻게 작동하나요?
            </div>
            <div className="text-lg">
              1. 다중분광 내시경이 지하 시설물 내부를 촬영해 스펙트럼 데이터를
              수집합니다.
            </div>
            <div>
              2. AI 알고리즘이 스펙트럼 데이터를 분석해 부식이나 손상 부위를
              탐지합니다.
            </div>
            <div>
              3. 부단수 상태에서 점검이 가능해 운영 중지 없이 유지보수가
              가능합니다.
            </div>
            <div>
              4. 정확한 데이터를 기반으로 지하 시설물의 수명 연장을 지원합니다.
            </div>
          </div>
          <div>
            <div className="text-2xl mb-5 font-medium">🌟 특장점</div>
            <div className="text-lg">
              <div className="mb-5">
                <span className="text-xl font-medium">
                  부단수 상태에서 검사 가능
                </span>
                <br /> 운영 중지 없이 지하 시설물의 상태를 점검할 수 있습니다.
              </div>
              <div className="mb-5">
                <span className="text-xl font-medium">
                  정확한 손상 부위 탐지
                </span>
                <br /> AI가 정밀하게 분석해 손상 부위를 정확히 찾아냅니다.
              </div>
              <div>
                <span className="text-xl font-medium">시설물의 수명 연장</span>
                <br /> 정확한 진단으로 사전 유지보수가 가능해 시설물의 수명이
                연장됩니다.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[450px] hidden md:block"></div>
      </div>
    </div>
  );
}
