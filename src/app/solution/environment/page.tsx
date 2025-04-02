'use client';

import em1 from '@/../public/images/solution/em1.png';
import em2 from '@/../public/images/solution/em2.png';
import point from '@/../public/images/solution/point.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center font-sans">
      {/* 상단 타이틀 영역 */}
      <div className="flex flex-col justify-center items-center gap-4 mb-10 mt-28 px-4">
        <h2 className="text-2xl md:text-4xl text-center">
          환경모니터링 시설 초분광 분석
        </h2>
        <h3 className="text-xl md:text-2xl text-slate-700 text-center">
          `정밀한 환경 진단과 효율적인 유지보수를 위한 분광 AI 솔루션`
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 text-2xl w-full bg-[#ECF2FA] py-10 mb-20">
        <h4>
          <b>초분광 및 다중분광 이미지</b>를 활용해 <b>지하 시설물</b>의 상태와{' '}
          <b>빗물터널의 퇴적량</b>을
        </h4>
        <h4>정밀하게 분석하는AI 기반 환경 모니터링 솔루션입니다.</h4>
        <h4>육안으로 확인이 어려운 부분까지 분광 기술로 AI가 분석하고</h4>
        <h4>
          이를 통해 <b>효율적인 유지보수와 의사결정 최적화</b>가 가능합니다.
        </h4>
      </div>
      <div className="mb-16 flex flex-col justify-start items-start w-3/5 ml-10">
        <h3 className="text-3xl mb-5">빗물 터널 퇴적량 분광 분석</h3>
        <h4 className="text-xl">
          <b>초분광 이미지를 AI 이미지 분석</b>을 활용해
          <b>빗물터널 내부의 퇴적물 양을 정밀하게 분석</b>하는 솔루션입니다.
        </h4>
      </div>

      {/* 어떤 솔루션인가요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떤 솔루션인가요?
        </h3>
        <div className="text-xl leading-relaxed">
          분광 이미지를 AI 분석하여 퇴적물의 종류와 양을 파악해 정기적인
          유지보수와 청소시기를 자동으로 알려줍니다.
          <br />
          이를 통해 퇴적물로 인한 홍수 위험을 줄이고, 유지보수 비용을
          절감합니다.
        </div>
      </div>

      {/* 어떻게 작동하나요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5 relative">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떻게 작동하나요?
        </h3>
        <div className="text-xl leading-relaxed">
          1. 초분광 카메라가 부착된 드론이 빗물터널 내부를 촬영해 퇴적물의
          스펙트럼 데이터를 수집합니다.
          <br />
          2. AI 알고리즘이 퇴적물의 스펙트럼 데이터를 분석해 퇴적물의 양과
          종류를 파악합니다.
          <br />
          3. 데이터 기반의 예측 유지보수로 효율적인 유지관리가 가능합니다.
        </div>
        <div className="absolute flex right-[10%] gap-10">
          <Image src={em1} alt="em1" width={250} />
          <Image src={em2} alt="em2" width={250} />
        </div>
      </div>

      {/* 특장점 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-20 w-full px-4 md:w-3/5">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          특장점
        </h3>
        <div className="text-xl flex flex-col gap-6">
          {[
            {
              title: '️️실시간 퇴적량 모니터링',
              desc: '정확한 데이터를 바탕으로 즉각적인 대응이 가능합니다.',
            },
            {
              title: '️️유지보수 비용 절감',
              desc: '정확한 분석으로 불필요한 유지보수를 방지합니다.',
            },
            {
              title: '️️정확한 데이터 기반 의사결정',
              desc: 'AI가 분석한 데이터를 통해 합리적인 의사결정을 지원합니다.',
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

      <div className="mb-16 flex flex-col justify-start items-start w-3/5 ml-10">
        <h3 className="text-3xl mb-5">다중분광 부단수 내시경</h3>
        <h4 className="text-xl">
          <b>초분광 이미지를 AI 이미지 분석</b>을 활용해{' '}
          <b>빗물터널 내부의 퇴적물 양을 정밀하게 분석</b>하는 솔루션입니다.
        </h4>
      </div>

      {/* 어떤 솔루션인가요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떤 솔루션인가요?
        </h3>
        <div className="text-xl leading-relaxed">
          다중분광 내시경을 통해 부단수 상태에서 지하 시설물의 상태를 점검하는
          솔루션입니다.
          <br />
          눈으로 볼 수 없는 부식이나 손상 부위를 정밀하게 탐지해 운영 중지 없이
          유지보수가 가능합니다.
        </div>
      </div>

      {/* 어떻게 작동하나요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5 relative">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떻게 작동하나요?
        </h3>
        <div className="text-xl leading-relaxed">
          1. 다중분광 내시경이 지하 시설물 내부를 촬영해 스펙트럼 데이터를
          수집합니다.
          <br />
          2. AI 알고리즘이 스펙트럼 데이터를 분석해 부식이나 손상 부위를
          탐지합니다.
          <br />
          3. 부단수 상태에서 점검이 가능해 운영 중지 없이 유지보수가 가능합니다.
          <br />
          4. 정확한 데이터를 기반으로 지하 시설물의 수명 연장을 지원합니다.
        </div>
      </div>

      {/* 특장점 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-20 w-full px-4 md:w-3/5">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          특장점
        </h3>
        <div className="text-xl flex flex-col gap-6">
          {[
            {
              title: '️️부단수 상태에서 검사 가능',
              desc: '운영 중지 없이 지하 시설물의 상태를 점검할 수 있습니다.',
            },
            {
              title: '️️정확한 손상 부위 탐지',
              desc: 'AI가 정밀하게 분석해 손상 부위를 정확히 찾아냅니다.',
            },
            {
              title: '️️시설물의 수명 연장',
              desc: '정확한 진단으로 사전 유지보수가 가능해 시설물의 수명이 연장됩니다.',
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
