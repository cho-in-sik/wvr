import smart from '@/../public/images/solution/smart.jpeg';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* 상단 텍스트 영역 */}
      <div className="flex flex-col justify-center items-center font-sans gap-4 mb-16">
        <h2 className="text-2xl md:text-4xl">스마트 하수처리 AI 솔루션</h2>
        <h3 className="text-xl md:text-2xl text-slate-700">
          `하수처리장에서의 효율적인 에너지 관리와 처리 효율을 위해 AI 기반 관리
          시스템을 제공`
        </h3>
      </div>

      {/* 이미지와 설명 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-20 font-sans p-10">
        <div className="w-full md:w-auto flex justify-center">
          <Image src={smart} alt="smart" width={450} />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 w-full md:w-3/5">
          <h3 className="text-center text-3xl mb-10 font-medium">
            혐기성 소화조 메탄 생성량 관리
          </h3>
          <div className="mb-10">
            <div className="text-2xl mb-5 font-medium">
              🔍 어떤 솔루션인가요?
            </div>
            <div className="text-lg">
              혐기성 소화조에서 발생하는 메탄 가스의 생성량을 최적화해
              <br /> 에너지 수익성과 운영 효율을 높이는 AI 기반 솔루션입니다.
              <br />
              데이터 분석과 AI 예측을 통해 메탄 생성의 안정성을 보장하고, 탄소
              배출 감소에도 기여합니다.
            </div>
          </div>
          <div className="mb-10 flex flex-col gap-2">
            <div className="text-2xl mb-5 font-medium">
              ⚙ 어떻게 작동하나요?
            </div>
            <div className="text-lg">
              1. AI 알고리즘이 소화조의 상태 데이터를 분석합니다
            </div>
            <div>2. 메탄 생성량을 예측하고 최적의 운영 방안을 제시합니다.</div>
            <div>
              3. 데이터 기반으로 가스 수익성과 효율성을 동시에 개선합니다.
            </div>
          </div>
          <div>
            <div className="text-2xl mb-5 font-medium">🌟 특장점</div>
            <div className="text-lg">
              <div className="mb-5">
                <span className="text-xl font-medium">
                  메탄 생성량 예측 정확도 90% 이상
                </span>
                <br /> AI가 정밀한 데이터를 기반으로 메탄 생성 예측을
                수행합니다.
              </div>
              <div className="mb-5">
                <span className="text-xl font-medium">
                  운영 효율성 20% 향상
                </span>
                <br />
                자동화된 관리 시스템으로 에너지 사용을 최적화합니다.
              </div>
              <div>
                <span className="text-xl font-medium">탄소 배출 감소 효과</span>
                <br />
                메탄 회수와 활용으로 탄소중립 목표 달성에 기여합니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 생물반응조 송풍량 조절 관리 영역 */}
      <div className="flex flex-col md:flex-row justify-start items-start gap-20 font-sans bg-slate-100 p-10">
        <div className="flex flex-col items-start justify-center gap-5 w-full md:w-3/5">
          <h3 className="text-center text-3xl mb-10 font-medium">
            생물반응조 송풍량 조절 관리
          </h3>
          <div className="mb-10">
            <div className="text-2xl mb-5 font-medium">
              🔍 어떤 솔루션인가요?
            </div>
            <div className="text-lg">
              생물반응조의 송풍량을 AI가 자동으로 조정해 에너지 소비를 절감하고
              처리 효율을 높이는 솔루션입니다. <br />
              실시간 모니터링과 데이터 분석을 통해 최적의 송풍량을 유지합니다.
            </div>
          </div>
          <div className="mb-10 flex flex-col gap-2">
            <div className="text-2xl mb-5 font-medium">
              ⚙ 어떻게 작동하나요?
            </div>
            <div className="text-lg">
              1. AI가 시간에 따른 수질 변화를 분석합니다.
            </div>
            <div>
              2. 분석한 수질데이터를 기반으로 효율적인 송풍량 제어를 지원합니다.
            </div>
            <div>
              3. 실시간 모니터링으로 에너지 낭비를 방지하고 최적의 처리효율을
              유지합니다.
            </div>
          </div>
          <div>
            <div className="text-2xl mb-5 font-medium">🌟 특장점</div>
            <div className="text-lg">
              <div className="mb-5">
                <span className="text-xl font-medium">
                  에너지 비용 30% 절감
                </span>
                <br /> 자동 제어 시스템으로 불필요한 에너지 사용을 방지합니다.
              </div>
              <div className="mb-5">
                <span className="text-xl font-medium">수질 개선 효과</span>
                <br /> 정확한 송풍량 운전 가이던스 제공으로 처리 효율이
                높아집니다.
              </div>
              <div>
                <span className="text-xl font-medium">
                  실시간 제어로 유연한 대응 가능
                </span>
                <br />
                AI 기반의 실시간 제어로 상황 변화에 빠르게 대응합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[450px] hidden md:block"></div>
      </div>
    </div>
  );
}
