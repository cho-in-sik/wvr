'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useMemo, memo } from 'react';
import water from '@/../public/images/main/mainWater.jpeg';
import carbon from '@/../public/images/main/mainCarbon.jpeg';
import environment from '@/../public/images/main/mainEnvironment.jpeg';
import rightArrow from '@/../public/svgs/rightArrow.svg';
import Image from 'next/image';
import Link from 'next/link';

// 카드 컴포넌트를 분리하여 메모이제이션
const Card = memo(
  ({
    item,
    index,
    isInView,
  }: {
    item: { title: string; img: any; desc: string };
    index: number;
    isInView: boolean;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      className="w-full 2xl:w-[30%] 2xl:h-[25vh] p-3 shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center relative filter saturate-150"
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-90"
        style={{ backgroundImage: `url(${item.img.src})` }}
      />
      <div className="relative z-10 flex flex-col items-center font-sans gap-10">
        <span className="text-xl md:text-3xl lg:text-5xl font-semibold mb-1 text-white">
          {item.title}
        </span>
        <span className="text-xs md:text-lg lg:text-2xl font-medium text-center mb-2 text-white">
          {item.desc}
        </span>
      </div>
    </motion.div>
  ),
);

Card.displayName = 'Card';

export default function ThirdMain() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    once: true,
    margin: '100px',
  });

  const cards = useMemo(
    () => [
      { title: 'Water', img: water, desc: 'WVR와 함께 나아갈 물관리' },
      {
        title: 'Environment',
        img: environment,
        desc: '지속 가능한 환경',
      },
      { title: 'Carbon', img: carbon, desc: '미래지향적 탄소 저감 기술' },
    ],
    [],
  );

  return (
    <div
      ref={ref}
      className="mt-12 2xl:mt-0 min-h-screen w-full flex flex-col 2xl:flex-row bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main/main2.png')" }}
    >
      {/* 왼쪽 텍스트 영역 */}
      <div className="w-full 2xl:w-2/5 flex justify-start items-center p-10 md:p-16 lg:p-28">
        <div className="lg:min-w-[600px] 2xl:min-w-[800px] text-black flex flex-col items-start justify-center font-sans">
          <h3
            className="mb-1 font-medium"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            더블유브이알은
          </h3>
          <h4
            className="mb-1 font-medium"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            정밀하게 분석하고 예측하여
          </h4>
          <h4
            className="mb-3 font-medium"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            최적의 AI 해결책을 제시합니다
          </h4>
          <span
            className="mb-1 font-medium"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)' }}
          >
            기후 변화 대응, 수자원 관리, 인프라 유지보수 등
          </span>
          <span
            className="mb-1 font-medium"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)' }}
          >
            다양한 분야에서 효율적이고 신뢰성 높은 AI 솔루션을 경험하세요
          </span>
          <span
            className="pr-4 w-3/4 2xl:w-3/4"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)' }}
          >
            더 나은 세상을 위한 혁신 더블유브이알이 만들어 갑니다
          </span>
        </div>
      </div>

      {/* 오른쪽 카드 영역 */}
      <div className="w-full 2xl:w-3/5 h-auto 2xl:h-screen bg-cover bg-center bg-no-repeat px-4 py-6 md:px-10 lg:px-0 lg:py-12">
        <div className="relative h-full grid grid-cols-3 gap-2 place-items-center 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:gap-6">
          {cards.map((item, index) => (
            <Card key={index} item={item} index={index} isInView={isInView} />
          ))}
          <Link href={'/business'}>
            <div className="absolute top-[32%] right-10 flex justify-center items-center text-slate-800">
              <h3 className="text-xl">바로가기</h3>
              <Image src={rightArrow} alt="right-arrow" className="mb-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
