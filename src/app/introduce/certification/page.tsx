import certi1 from '@/../public/images/certification/certi1.jpg';
import certi2 from '@/../public/images/certification/certi2.png';
import certi3 from '@/../public/images/certification/certi3.jpg';
import certi4 from '@/../public/images/certification/certi4.png';
import certi5 from '@/../public/images/certification/certi5.jpg';
import certi6 from '@/../public/images/certification/certi6.jpg';
import certi7 from '@/../public/images/certification/certi7.jpg';
import certi8 from '@/../public/images/certification/certi8.jpg';
import Image from 'next/image';

export default function Page() {
  // ✅ 인증서 데이터 리스트
  const certificates = [
    { src: certi1, alt: 'certi-photo1', title: '분광 필터 키트 특허' },

    {
      src: certi5,
      alt: 'certi-photo5',
      title: '초분광 이미징 기반의 \n 상수도 시설물 분석 장치 및 방법',
    },
    {
      src: certi6,
      alt: 'certi-photo6',
      title:
        '인공지능 이용한 이미지 분석 기반의 \n 관 내부 감시 진단 방법 및 장치',
    },
    {
      src: certi7,
      alt: 'certi-photo7',
      title: '인공지능 임베디드 스마트 유량계',
    },
    {
      src: certi8,
      alt: 'certi-photo8',
      title:
        '인공지능 기반 이상치 탐지 및 예측을 통한 \n 상수도관 감시 진단 방법',
    },
  ];

  const certificates2 = [
    { src: certi2, alt: 'certi-photo2', title: '예비 벤처 기업 확인서' },
    { src: certi4, alt: 'certi-photo4', title: 'TECH밸리 기업 선정서' },
    { src: certi3, alt: 'certi-photo3', title: '전문 연구 사업자 신고증' },
  ];

  return (
    <div className="py-16 sm:py-20 flex flex-col justify-center items-center gap-12 sm:gap-20 px-4 sm:px-6">
      {/* ✅ 인증서 리스트 */}
      <div className="w-full sm:w-5/6 lg:w-4/6 px-6 sm:px-12 lg:px-20 py-10 ">
        <h3 className="text-4xl font-semibold font-sans">특허</h3>
        <h4 className="text-2xl font-light font-sans py-5">
          등록 3건, 출원 2건
        </h4>
        <hr className="h-0.5 border-0 mb-10 bg-gradient-to-r from-[#63BBA2] to-[#3F89C7]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              {/* 이미지 컨테이너 */}
              <div className="w-60 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={320}
                  height={420}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 제목을 감싸는 div에 고정 높이와 오버플로우 숨김 추가 */}
              <div className="mt-3 text-lg font-medium text-gray-700 h-12 overflow-hidden whitespace-pre-wrap">
                {cert.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-5/6 lg:w-4/6 px-6 sm:px-12 lg:px-20 py-10 ">
        <h3 className="text-4xl font-semibold font-sans mb-10">
          기업 인증 및 선정
        </h3>

        <hr className="h-0.5 border-0 mb-10 bg-gradient-to-r from-[#63BBA2] to-[#3F89C7]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates2.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              {/* 이미지 컨테이너 */}
              <div className="w-60 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={320}
                  height={420}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 제목을 감싸는 div에 고정 높이와 오버플로우 숨김 추가 */}
              <div className="mt-3 text-lg font-medium text-gray-700 h-12 overflow-hidden whitespace-pre-wrap">
                {cert.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
