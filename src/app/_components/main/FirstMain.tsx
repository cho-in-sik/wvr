import { useState, useEffect } from 'react';
import scroll from '@/../public/images/main/scroll.png';
import Image from 'next/image';
import main1 from '@/../public/images/main/main1.jpeg';
import main2 from '@/../public/images/main/main2.jpeg';
import main3 from '@/../public/images/main/main3.jpeg';

export default function FirstMain() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [main1, main2, main3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4초마다 이미지 변경

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* 배경 이미지들 */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Background Image ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover scale-110"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black opacity-10 h-1/3 top-1/3 blur-xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center max-w-[1440px] mx-auto px-4 sm:px-8 font-sans">
        {/* 텍스트 콘텐츠 (오버레이 위에 표시) */}
        <div className="relative">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-12">
            WVR
          </h1>
          <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
            Smart AI Solutions
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 font-extrabold">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mr-2">
              for the
            </span>
            <span>Environment</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-[900px]">
            우리가 만들 깨끗한 미래
          </p>
        </div>
      </div>

      {/* 스크롤 안내 */}
      <div className="absolute bottom-6 flex flex-col items-center w-full">
        <Image
          src={scroll}
          alt="scroll"
          width={50}
          className="w-10 sm:w-12 lg:w-14"
        />
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium font-play">
          Scroll
        </span>
      </div>
    </div>
  );
}
