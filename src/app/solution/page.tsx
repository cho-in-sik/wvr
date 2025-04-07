'use client';

import aiot from '@/../public/images/solution/solution/aiot.png';
import point from '@/../public/images/solution/point.png';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center font-sans">
      {/* 상단 타이틀 영역 */}
      <div className="flex flex-col justify-center items-center gap-4 mb-10 mt-28 px-4">
        <h2 className="text-2xl font-semibold md:text-4xl text-center">
          스마트 누수 탐지 AI 솔루션
        </h2>
        <h3 className="text-xl md:text-2xl text-slate-700 text-center">
          정밀한 누수 탐지와 신속한 대응을 위한 AI 기반 솔루션
        </h3>
      </div>
      <hr className="w-full mb-10" />

      {/* 어떤 솔루션인가요 */}
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full py-10 px-4 md:w-3/5">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떤 솔루션인가요?
        </h3>
        <div className="text-xl leading-relaxed">
          <b>상수관로에서 발생하는 누수 소리를 AI가 분석</b>해 정확한 누수
          위치와 상태를 파악하는 솔루션입니다.
          <br />
          기존의 육안 검사나 전통적인 청음 장비보다 더 빠르고 정확하게 누수를
          찾아낼 수 있습니다.
          <br />
          <b>AI와 IoT 기술이 융합</b>되어, 실시간으로 누수 상태를 진단하고
          즉각적인 경보를 발송합니다.
        </div>
      </div>
      <hr className="w-full mb-10" />

      {/* AIoT 누수탐지 솔루션 이미지 + 단계 */}
      <div className="w-full md:w-3/5 border flex flex-col h-auto mb-10 pb-10">
        <div className="bg-[#345773] h-16 md:h-1/5 flex justify-center items-center text-white text-2xl md:text-3xl py-3 font-gmarket">
          AIoT 누수탐지 솔루션
        </div>
        <div className="flex flex-col md:flex-row h-auto">
          <div className="w-full md:w-3/5">
            <Image
              src={aiot}
              alt="aiot"
              className="w-full h-auto object-contain"
              layout="responsive"
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
      <div className="flex flex-col justify-start items-start gap-5 mb-10 w-full px-4 md:w-3/5 py-10">
        <h3 className="text-2xl bg-slate-100 px-6 py-2 rounded-3xl font-medium">
          어떻게 작동하나요?
        </h3>
        <div className="text-xl leading-relaxed">
          1. 청음 센서가 상수관로에서 발생하는 누수음을 수집합니다.
          <br />
          2. AI 알고리즘이 누수음의 패턴을 분석해 특정 패턴(이상징후)을
          감지합니다.
          <br />
          3. 실시간으로 누수 위치를 파악하고, 관리자에게 즉시 알림을 전송합니다.
          <br />
          4. 누수 데이터를 체계적으로 저장해 지속적인 관리와 분석이 가능합니다.
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
              title: '️정확도 95% 이상의 탐지율',
              desc: 'AI가 누수 소리의 미세한 차이까지 분석해 오탐률을 최소화합니다.',
            },
            {
              title: '️실시간 모니터링으로 빠른 대처 가능',
              desc: '즉각적인 경보로 신속한 유지보수가 가능합니다.',
            },
            {
              title: '️임베디드 시스템으로 기존 시설에 쉽게 설치',
              desc: '기존 상수관망에 별도의 공사 없이 간편하게 설치 가능합니다.',
            },
            {
              title: '데이터 기반의 체계적인 관리',
              desc: '누수 패턴과 데이터를 축적해 효율적인 상수관 관리가 가능합니다.',
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
