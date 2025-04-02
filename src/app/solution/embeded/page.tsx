'use client';

import sangsu from '@/../public/images/solution/embeded/sangsu.png';
import point from '@/../public/images/solution/point.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center font-sans">
      {/* 상단 타이틀 영역 */}
      <div className="flex flex-col justify-center items-center gap-4 mb-10 mt-28 px-4">
        <h2 className="text-2xl md:text-4xl text-center">
          상수관로 AIoT 스마트 유량계
        </h2>
        <h3 className="text-xl md:text-2xl text-slate-700 text-center">
          `IoT 기반 센서를 통해 유량 데이터를 수집하고, AI가 이를 분석하는
          스마트 유량계 `
        </h3>
      </div>
      <hr className="w-full mb-10" />

      {/* 어떤 솔루션인가요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떤 솔루션인가요?
        </h3>
        <div className="text-xl leading-relaxed">
          <b>AIoT (AI + IoT) 기술</b>을 활용해 상수도 유량 데이터를 실시간으로
          수집하고,
          <br />
          이를 바탕으로 누수나 파손 여부를 자동으로 탐지해 주는 스마트
          유량계입니다.
          <br />
          기존 상수관망 운영 시스템과 연동해 <b>스마트 물 공급 인프라를 구축</b>
          하고,
          <br />
          데이터 기반의 의사결정을 통해 <b>물 공급 및 관리의 효율성을 최적화</b>
          합니다.
        </div>
      </div>
      <hr className="w-full mb-10" />

      {/*AIoT 스마트 유량계 이미지 + 단계 */}
      <div className="w-full md:w-3/5 border flex flex-col h-auto mb-10">
        <div className="bg-[#345773] h-16 md:h-1/5 flex justify-center items-center text-white text-2xl md:text-3xl py-3">
          AIoT 스마트 유량계
        </div>
        <div className="flex flex-col md:flex-row h-auto">
          <div className="w-full md:w-1/2">
            <Image
              src={sangsu}
              alt="sangsu"
              className="w-full h-auto object-contain py-5"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center px-4 py-6 md:pl-10">
            {[
              'AIoT 누수탐지 On-Device로 누수음 수집',
              '수집된 누수음 데이터로 시계열 database 구축',
              '실시간 데이터 수집 및 인공지능 분석으로 누수 및 이상징후 신속 감지',
              '단말기 내 자체 AI 분석을 수행하며 구축된 빅데이터로 인공지능 학습',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 flex justify-center items-center bg-[#002060] text-white rounded-full">
                  {i + 1}
                </div>
                <div className="border-b w-full text-base leading-relaxed">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 어떻게 작동하나요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떻게 작동하나요?
        </h3>
        <div className="text-xl leading-relaxed">
          1. IoT 센서가 유량 데이터를 실시간으로 수집합니다.
          <br />
          2. AI 알고리즘이 수집된 유량 패턴 데이터를 분석해 이상 징후를
          탐지합니다.
          <br />
          3. 분석 결과 및 유량 데이터는 서버에 저장되어 종합적인 관리와 분석이
          가능합니다.
          <br />
          4. 누수 또는 파손 발생 시 관리자에게 즉시 알림이 전송됩니다.
        </div>
      </div>

      {/* 특장점 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-32 w-full px-4 md:w-3/5">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          특장점
        </h3>
        <div className="text-xl flex flex-col gap-6">
          {[
            {
              title: '️️ 정확도 95% 이상의 탐지율',
              desc: 'AI가 유량의 미세한 변동까지 감지해 정밀 탐지가 가능합니다.',
            },
            {
              title: '️️ 실시간 모니터링으로 빠른 대처 가능',
              desc: '즉각적인 경보와 알림으로 빠른 유지보수가 가능합니다.',
            },
            {
              title: '️️ 클라우드 기반 통합 관리',
              desc: '상수도 데이터의 종합 분석을 통해 효율적인 운영이 가능합니다.',
            },
            {
              title: '데이터 기반의 의사결정',
              desc: '정확한 유량 및 압력 데이터를 기반으로 합리적인 의사결정이 가능합니다.️',
            },
            {
              title: '기존시스템과의 호환성',
              desc: '상수관망 운영 시스템과 손쉽게 연동되어 기존 인프라의 활용이 가능합니다.',
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
