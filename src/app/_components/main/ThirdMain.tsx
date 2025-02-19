'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import water from '@/../public/images/main/water.png';
import carbon from '@/../public/images/main/carbon2.png';
import environment from '@/../public/images/main/environment.png';
import right from '@/../public/svgs/right.svg';
import Image from 'next/image';

export default function ThirdMain() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="mt-12 2xl:mt-0 min-h-screen w-full flex flex-col 2xl:flex-row"
    >
      {/* 왼쪽 텍스트 영역 */}
      <div className="w-full 2xl:w-2/5 bg-gray-50 flex justify-start items-center p-10 md:p-16 lg:p-28">
        <div className="lg:min-w-[600px] 2xl:min-w-[800px] text-black flex flex-col items-start justify-center">
          <h3
            className="mb-3 font-semibold"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Business
          </h3>
          <h4
            className="mb-1 font-semibold text-slate-700"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            더블유브이알은 모두가 행복한
          </h4>
          <h4
            className="mb-1 font-semibold text-slate-700"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            삶을 위해 보이지 않는 것으로부터
          </h4>
          <h4
            className="mb-6 font-semibold text-slate-700"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            새로운 가치를 탐구합니다.
          </h4>
          <span
            className="pr-4 w-3/4 2xl:w-3/4"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)' }}
          >
            수질 환경, 대기 환경, 개인과 가족 구성원들의 건강 등 더 넓어지고
            다양해질 분야에서 더블유브이알의 AI care 기술을 만나보세요.
          </span>
        </div>
      </div>

      {/* 오른쪽 카드 영역 */}
      <div
        className="w-full 2xl:w-3/5 h-auto 2xl:h-screen bg-cover bg-center bg-no-repeat px-4 py-6 md:px-10 lg:px-0 lg:py-12"
        style={{ backgroundImage: "url('/images/main/thirdMain2.jpg')" }}
      >
        {/* 모바일: 그리드로 3개 카드 한 행 / 2xl 이상: flex row로 전환하고 중앙 정렬 */}
        <div className="h-full grid grid-cols-3 gap-2 place-items-center 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:gap-6">
          {[
            { title: 'Water', img: water, desc: 'WVR와 함께 나아갈 물관리' },
            {
              title: 'Environment',
              img: environment,
              desc: '환경을 생각하는 친화적인',
            },
            { title: 'Carbon', img: carbon, desc: '탄소 저감을 위한 사업' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full 2xl:w-[30%] 2xl:h-[30vh] p-3 bg-white bg-opacity-20 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center"
            >
              <span className="text-xs md:text-base lg:text-xl font-semibold mb-1">
                {item.title}
              </span>
              <Image
                src={item.img}
                alt={item.title}
                width={60}
                height={60}
                className="mb-1"
              />
              <span className="text-[0.65rem] md:text-sm lg:text-base text-center mb-2">
                {item.desc}
              </span>
              <div className="bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-colors">
                <Image src={right} alt="right" width={16} height={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
