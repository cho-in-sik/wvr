'use client';

import smart1 from '@/../public/images/solution/smart/smart1.png';
import smart2 from '@/../public/images/solution/smart/smart2.png';
import point from '@/../public/images/solution/point.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center font-sans">
      {/* 상단 타이틀 영역 */}
      <div className="flex flex-col justify-center items-center gap-4 mb-10 mt-28 px-4">
        <h2 className="text-2xl font-semibold md:text-4xl text-center">
          스마트 하수처리 AI 솔루션
        </h2>
        <h3 className="text-xl md:text-2xl text-slate-700 text-center">
          하수처리장에서의 효율적인 에너지 관리와 처리 효율을 위해 AI 기반 관리
          시스템을 제공
        </h3>
      </div>
      <hr className="w-full mb-10" />
      <div className="text-center mb-3 md:text-3xl text-2xl pt-10">
        AI 기반 혐기성 소화조 모델 (AiDM) 운영관리 솔루션
      </div>
      <div className="text-center mb-10 md:text-xl text-lg pb-10">
        AI가 데이터를 분석해 메탄 생성 최적화 및 운영 효율성 향상
      </div>

      {/*AIoT 스마트 유량계 이미지 + 단계 */}
      <div className="w-full md:w-3/5 border flex flex-col h-auto mb-10 pb-10">
        <div className="bg-[#345773] h-16 md:h-1/5 flex justify-center items-center text-white text-2xl md:text-3xl py-3">
          AI 기반 혐기성 소화조 모델 (AiDM) 운영관리 솔루션
        </div>
        <div className="md:flex-row h-auto">
          <div className="w-full p-5">
            <Image
              src={smart1}
              alt="smart1"
              className="w-full h-auto object-contain py-5"
            />
          </div>
        </div>
      </div>

      {/* 어떤 솔루션인가요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5 py-10">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떤 솔루션인가요?
        </h3>
        <div className="text-xl leading-relaxed">
          혐기성 소화조에서 발생하는 메탄 가스의 생성량을 최적화해
          <br />
          에너지 수익성과 운영 효율을 높이는 AI 기반 솔루션입니다.
          <br />
          데이터 분석과 AI 예측을 통해 메탄 생성의 안정성을 보장하고,
          <br />
          탄소 배출 감소에도 기여합니다.
        </div>
      </div>

      {/* 어떻게 작동하나요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5 py-10">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떻게 작동하나요?
        </h3>
        <div className="text-xl leading-relaxed">
          1. AI 알고리즘이 소화조의 상태 데이터를 분석합니다
          <br />
          2. 메탄 생성량을 예측하고 최적의 운영 방안을 제시합니다.
          <br />
          3. 데이터 기반으로 가스 수익성과 효율성을 동시에 개선합니다.
        </div>
      </div>

      {/* 특장점 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-32 w-full px-4 md:w-3/5 py-10">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          특장점
        </h3>
        <div className="text-xl flex flex-col gap-6">
          {[
            {
              title: '️️메탄 생성량 예측 정확도 90% 이상',
              desc: 'AI가 정밀한 데이터를 기반으로 메탄 생성 예측을 수행합니다.',
            },
            {
              title: '️️운영 효율성 20% 향상',
              desc: '자동화된 관리 시스템으로 에너지 사용을 최적화합니다.',
            },
            {
              title: '️️탄소 배출 감소 효과',
              desc: '메탄 회수와 활용으로 탄소중립 목표 달성에 기여합니다.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start justify-center gap-2"
            >
              <div className="flex items-center gap-2">
                <Image src={point} alt="point" width={24} height={24} />
                <div className="font-medium">{item.title}</div>
              </div>
              <div className="ml-10">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-3 md:text-3xl text-2xl pt-10">
        하폐수 처리 ABC Platform
      </div>
      <div className="text-center mb-10 md:text-xl text-lg pb-10">
        AI를 활용해 송풍량을 자동으로 조정해 에너지 절감 및 처리 효율 향상
      </div>

      {/*AIoT 스마트 유량계 이미지 + 단계 */}
      <div className="w-full md:w-3/5 border flex flex-col h-auto mb-10">
        <div className="bg-[#345773] h-16 md:h-1/5 flex justify-center items-center text-white text-2xl md:text-3xl py-3">
          하폐수 처리 ABC Platform
        </div>
        <div className="md:flex-row h-auto">
          <div className="w-full p-5">
            <Image
              src={smart2}
              alt="smart2"
              className="w-full h-auto object-contain py-5"
            />
          </div>
        </div>
      </div>

      {/* 어떤 솔루션인가요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5 py-10">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떤 솔루션인가요?
        </h3>
        <div className="text-xl leading-relaxed">
          생물반응조의 송풍량을 AI가 자동으로 조정해
          <br />
          에너지 소비를 절감하고 처리 효율을 높이는 솔루션입니다.
          <br />
          실시간 모니터링과 데이터 분석을 통해 최적의 송풍량을 유지합니다.
        </div>
      </div>

      {/* 어떻게 작동하나요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5 py-10">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떻게 작동하나요?
        </h3>
        <div className="text-xl leading-relaxed">
          1. AI가 시간에 따른 수질 변화를 분석합니다.
          <br />
          2. 분석한 수질데이터를 기반으로 효율적인 송풍량 제어를 지원합니다.
          <br />
          3. 실시간 모니터링으로 에너지 낭비를 방지하고 최적의 처리효율을
          유지합니다.
        </div>
      </div>

      {/* 특장점 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-32 w-full px-4 md:w-3/5 py-10">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          특장점
        </h3>
        <div className="text-xl flex flex-col gap-6">
          {[
            {
              title: '️️에너지 비용 30% 절감',
              desc: '자동 제어 시스템으로 불필요한 에너지 사용을 방지합니다.',
            },
            {
              title: '️️수질 개선 효과',
              desc: '정확한 송풍량 운전 가이던스 제공으로 처리 효율이 높아집니다.',
            },
            {
              title: '️️실시간 제어로 유연한 대응 가능',
              desc: 'AI 기반의 실시간 제어로 상황 변화에 빠르게 대응합니다.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start justify-center gap-2"
            >
              <div className="flex items-center gap-2">
                <Image src={point} alt="point" width={24} height={24} />
                <div className="font-medium">{item.title}</div>
              </div>
              <div className="ml-10">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
