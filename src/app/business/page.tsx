'use client';

import Image from 'next/image';
import sansu from '@/../public/images/business/sansu.png';
import hasu from '@/../public/images/business/hasu.png';
import infra from '@/../public/images/business/infra.png';
import asset from '@/../public/images/business/asset.png';
import effect from '@/../public/images/solution/embeded/embeded2.png';

export default function Page() {
  const handleMove = (id: string) => {
    const section = document.getElementById(`section-${id}`);
    if (section) {
      const yOffset = -128;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* 상단 제목 영역 */}
      <div className="flex flex-col justify-center items-center font-sans gap-3 mb-10 py-28">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 text-center border-b pb-6 border-[#63BBA2]">
          {`“지속 가능한 인프라와 환경을 위해, AI와 IoT 기술로 정밀한 진단과 스마트 관리를 실현합니다 ”`}
        </h1>
        <h2 className="font-light text-lg sm:text-xl md:text-2xl mb-20 text-center">
          AI와 데이터를 기반으로 상수도, 하수처리, 자산관리 등 환경 기반 시설의
          효율적인 운영을 위해 노력하며
          <br />
          실시간 진단, 예측 분석, 체계적 관리를 통해 공공 인프라 운영의
          스마트화를 실현하고 있습니다.
        </h2>
      </div>

      {/* 이미지 박스 영역 */}
      <div className="text-white font-sans w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 px-4 md:px-8 lg:px-12 xl:px-20 mb-16 md:mb-24 lg:mb-32">
        {/* 상수도 관리 */}
        <div className="relative flex flex-col justify-center items-center w-full md:w-[85%] lg:w-1/3 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] mb-6 lg:mb-0">
          {/* 배경 이미지 */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/business/business4.jpeg')] "
            style={{ filter: 'brightness(0.9)' }}
          ></div>
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black opacity-10 "></div>
          {/* 컨텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
            <div
              id="1"
              className="absolute right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 text-white rounded-2xl border-2 border-white text-sm sm:text-base md:text-lg lg:text-xl font-medium py-1 px-3 sm:px-4 md:px-6 cursor-pointer hover:bg-white hover:text-black transition-colors"
              onClick={(e) => handleMove(e.currentTarget.id)}
            >
              More
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 md:mb-4">
              상수도 관리
            </h4>
            <div className="font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 xl:left-12">
              <h5 className="mb-1">청음식 누수음 분석 AI</h5>
              <h5>상수관로 AIoT 스마트 유량계</h5>
            </div>
          </div>
        </div>

        {/* 하수처리장 관리 */}
        <div className="relative flex flex-col justify-center items-center w-full md:w-[85%] lg:w-1/3 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] mb-6 lg:mb-0">
          {/* 배경 이미지 */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/business/business1.jpeg')] "
            style={{ filter: 'brightness(0.9)' }}
          ></div>
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black opacity-10 "></div>
          {/* 컨텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
            <div
              id="2"
              className="absolute right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 text-white rounded-2xl border-2 border-white text-sm sm:text-base md:text-lg lg:text-xl font-medium py-1 px-3 sm:px-4 md:px-6 cursor-pointer hover:bg-white hover:text-black transition-colors"
              onClick={(e) => handleMove(e.currentTarget.id)}
            >
              More
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 md:mb-4">
              하수처리장 관리
            </h4>
            <div className="font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 xl:left-12">
              <h5 className="mb-1">하수처리장 메탄 생성조 관리</h5>
              <h5>하수처리장 생물반응조 관리</h5>
            </div>
          </div>
        </div>

        {/* 자산관리 */}
        <div className="relative flex flex-col justify-center items-center w-full md:w-[85%] lg:w-1/3 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem]">
          {/* 배경 이미지 */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/business/business2.jpeg')] "
            style={{ filter: 'brightness(0.9)' }}
          ></div>
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black opacity-10 "></div>
          {/* 컨텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
            <div
              id="4"
              className="absolute right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 text-white rounded-2xl border-2 border-white text-sm sm:text-base md:text-lg lg:text-xl font-medium py-1 px-3 sm:px-4 md:px-6 cursor-pointer hover:bg-white hover:text-black transition-colors"
              onClick={(e) => handleMove(e.currentTarget.id)}
            >
              More
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 md:mb-4">
              자산관리
            </h4>
            <div className="font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 xl:left-12">
              <h5>상하수도 시설 자산관리 시스템</h5>
            </div>
          </div>
        </div>
      </div>

      {/* 설명 섹션 */}
      <div className="w-full flex flex-col justify-center items-center gap-40 mb-20">
        <div id="section-1">
          <h1 className="text-center text-3xl md:text-5xl mb-5 md:mb-10 font-semibold">
            상수도 관리 시스템
          </h1>
          <div className="text-xl md:text-3xl bg-[#F3F3F3] py-2 md:py-4 px-4 md:px-10 mb-3 md:mb-5 text-center">
            <b>AIoT 스마트 유량계와 AIoT 누수탐지 솔루션</b>을 활용해 상수도
            관망의 이상 탐지 및 효율적인 운영 지원
          </div>
          <h2 className="text-center text-lg md:text-2xl mb-5 md:mb-10">
            상수도 관리 사업은 안전하고 깨끗한 물 공급을 목표로, 상수관망의
            효율적인 유지보수와 누수 방지에 중점을 둡니다.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 mb-10">
            <div className="flex flex-col justify-center items-start gap-3 md:gap-5 text-base md:text-xl">
              <div>
                AI와 IoT 기술을 접목해 상수관로의 상태를 실시간으로
                모니터링하고,
                <br className="hidden md:block" />
                이상 발생 시 경고 알람으로 즉각적인 대응이 가능합니다.
              </div>
              <div>
                또한, AI 분석 모델을 통해 정밀한 유량 분석과 누수 탐지를
                실현하여
                <br className="hidden md:block" />
                수도 요금의 정확성을 높이고, 불필요한 수리 비용을 줄입니다.
              </div>
              <div>
                AI 분석 결과로 빅데이터를 구축하여
                <br className="hidden md:block" /> 상수관로의 노후화 정도를
                예측해 선제적인 교체 및 보수를 지원하고
                <br className="hidden md:block" /> 물 손실을 최소화하고, 관리
                비용을 절감합니다.
              </div>
            </div>
            <div className="w-full max-w-[500px]">
              <Image src={sansu} alt="sansu" width={500} className="w-full" />
            </div>
          </div>
          <div className="text-lg md:text-2xl flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl mb-3 md:mb-5">핵심가치</h3>
            <h4>
              · <b>데이터 기반 예측 유지보수</b> – 실시간 관망 모니터링 및 이상
              감지
            </h4>
            <h4>
              · <b>정확한 누수 탐지</b> – 청음식 누수 탐지 AI로 물 손실 방지
            </h4>
            <h4>
              · <b>효율적인 운영 지원</b> – 유지보수 비용 절감 및 운영 최적화
            </h4>
          </div>
          <div className="mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl mb-4 md:mb-8">
              주요 기술 및 시스템
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5">
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3 mb-4 md:mb-0">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  데이터 베이스 구축
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  유량 및 압력 데이터 통합 관리
                </div>
              </div>
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3 mb-4 md:mb-0">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  상수도 시설 관리 시스템 구축
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  수도관 유지보수 및 이상 감지
                </div>
              </div>
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  누수 탐지 및 예측 분석 시스템
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  AI 기반 누수 위험 예측
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl mb-4 md:mb-8">기대효과</h3>
            <div className="w-full flex flex-col justify-center items-center tracking-tighter">
              <div className="w-full flex flex-col md:flex-row justify-around items-center -mb-8 md:-mb-10 gap-6 md:gap-28">
                <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2 md:h-36 bg-slate-100 rounded-md relative mb-4 md:mb-0 p-4 md:p-0">
                  <div className="w-full md:w-[70%] flex flex-col justify-start items-start px-2 md:px-3 gap-1 md:gap-2 mb-4r md:mb-0">
                    <div>- 실시간 모니터링으로 효율적 수자원데이터 분석</div>
                    <div>- 누수저감 및 물 공급 효율 향상</div>
                    <div>
                      - 재난, 교통, 전력 등의 정보 융합에 의한 시너지 효과
                    </div>
                  </div>
                  <div className="w-full md:w-[30%] h-12 md:h-full flex text-center justify-center items-center bg-[#C1EAFF] text-lg md:text-xl font-semibold py-2 md:py-0">
                    물 인프라 관리
                    <br className="hidden md:block" />
                    효율성 향상
                  </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full md:w-1/2 md:h-36 bg-slate-100 rounded-md relative mb-4 md:mb-0 p-4 md:p-0">
                  <div className="w-full md:w-[70%] flex flex-col justify-start items-start px-2 md:px-3 gap-1 md:gap-2 mb-4 md:mb-0">
                    <div>- 수자원 데이터 활용 및 빅데이터 구축</div>
                    <div>
                      - 도시인프라 자료의 통합관리와 수질 모니터링 시스템 구축
                      가능
                    </div>
                    <div>- 유량 데이터 활용가치 증대 및 물관리 신뢰성 향상</div>
                  </div>
                  <div className="w-full md:w-[30%] h-12 md:h-full flex text-center justify-center items-center bg-[#C1EAFF] text-lg md:text-xl font-semibold py-2 md:py-0">
                    의사결정
                    <br className="hidden md:block" />
                    자동화
                  </div>
                </div>
              </div>
              <div className="relative z-10 my-4 md:my-0">
                <Image
                  src={effect}
                  alt="effect"
                  width={200}
                  className="w-32 md:w-auto"
                />
                <div className="absolute top-[30%] left-[33%] text-xl md:text-2xl bg-gradient-to-r to-green-500 from-blue-600 bg-clip-text text-transparent font-gmarket">
                  기대
                  <br />
                  효과
                </div>
              </div>
              {/* 하단 카드 행 */}
              <div className="w-full flex flex-col md:flex-row -mt-0 md:-mt-10 justify-around items-center gap-6 md:gap-28">
                <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2 md:h-36 bg-slate-100 rounded-md relative mb-4 md:mb-0 p-4 md:p-0">
                  <div className="w-full md:w-[70%] flex flex-col justify-start items-start px-2 md:px-3 gap-1 md:gap-2 mb-4 md:mb-0">
                    <div>
                      - 누수로 인한 비용 절감 및 무분별한 상수도관 공사 방지
                    </div>
                    <div>
                      - 지속가능한 수자원 확보와 기후변화 및 재난 상황 대응
                    </div>
                    <div>- 물 소비 최적화 및 에너지 저감에 기여</div>
                  </div>
                  <div className="w-full md:w-[30%] h-12 md:h-full flex text-center justify-center items-center bg-[#C1EAFF] text-lg md:text-xl font-semibold py-2 md:py-0">
                    에너지 절감 및
                    <br className="hidden md:block" />
                    탄소중립
                  </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full md:w-1/2 md:h-36 bg-slate-100 rounded-md relative mb-4 md:mb-0 p-4 md:p-0">
                  <div className="w-full md:w-[70%] flex flex-col justify-start items-start px-2 md:px-3 gap-1 md:gap-2 mb-4 md:mb-0">
                    <div>- 중앙 서버에 의존하지 않고 독립적으로 작동 가능</div>
                    <div>- 태양광 패널을 이용해 자체 전력 사용 가능</div>
                  </div>
                  <div className="w-full md:w-[30%] h-12 md:h-full text-center justify-center items-center bg-[#C1EAFF] text-lg md:text-xl font-semibold flex flex-col py-2 md:py-0">
                    <span>해외진출 확장성</span>
                    <span className="font-normal text-sm md:text-lg">
                      EX)베트남,인도네시아
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full bg-[#F2F5F9] py-16 my-10 sm:my-20 lg:my-40">
          <div id="section-2" className="max-w-7xl mx-auto px-4">
            <h1 className="text-center text-3xl md:text-5xl mb-5 md:mb-10 font-semibold">
              하수처리장 관리 시스템
            </h1>
            <div className="text-xl md:text-3xl bg-[#E8E8E8] py-2 md:py-4 px-4 md:px-10 mb-3 md:mb-5 text-center">
              AI 기반의 혐기성 소화조 메탄 생성량 관리 및 생물반응조 송풍량
              조절을 통해 하수처리 효율 극대화
            </div>
            <h2 className="text-center text-lg md:text-2xl mb-5 md:mb-10">
              하수처리장 관리 사업은 탄소중립과 에너지 효율성을 목표로
              수질오염방지와 친환경 운영을 지원합니다.
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 mb-10">
              <div className="flex flex-col justify-center items-start gap-3 md:gap-5 text-base md:text-xl">
                <div>
                  하수처리장 혐기성 소화조에서의 메탄 생성량을
                  <br className="hidden md:block" />
                  AI 모델로 분석 및 예측해 최적의 운영 방법을 제시하고
                  <br className="hidden md:block" />
                  AI 기반 운영 솔루션을 통해 메탄 가스를 효율적으로 생성합니다.
                </div>
                <div>
                  또한, 하수처리장 생물반응조에서의 운영 데이터 및 계측데이터를
                  <br className="hidden md:block" />
                  AI 분석 및 예측하여 최적의 송풍량 운전 방식을 제안합니다.
                </div>
                <div>
                  AI 분석 및 예측 기술로 에너지 소비를 최소화하고 운영 비용을
                  절감하여
                  <br className="hidden md:block" /> 하수처리 비용을 절감하고
                  탄소 저감을 실현합니다.
                </div>
              </div>
              <div className="w-full max-w-[500px]">
                <Image src={hasu} alt="hasu" width={500} className="w-full" />
              </div>
            </div>
            <div className="text-lg md:text-2xl flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl mb-3 md:mb-5">핵심가치</h3>
              <h4>
                · <b>에너지 절감형 운영</b> – AI 기반 송풍량 최적화 감지
              </h4>
              <h4>
                · <b>탄소중립 실현</b> – 메탄 생성량 최적화로 친환경 운영
              </h4>
              <h4>
                · <b>운영 효율성 향상</b> – AI 분석을 통한 하수처리 프로세스
              </h4>
            </div>
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl mb-4 md:mb-8">
                주요 기술 및 시스템
              </h3>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5">
                <div className="flex flex-col justify-end items-center border w-full md:w-1/3 mb-4 md:mb-0">
                  <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                    실시간 하수처리 모니터링
                  </div>
                  <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center bg-white w-full">
                    주요 데이터 수집 및 분석
                  </div>
                </div>
                <div className="flex flex-col justify-end items-center border w-full md:w-1/3 mb-4 md:mb-0">
                  <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                    AI 기반 생물반응조 운영 최적화
                  </div>
                  <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center bg-white w-full">
                    송풍량 조절로 에너지 절감
                  </div>
                </div>
                <div className="flex flex-col justify-end items-center border w-full md:w-1/3">
                  <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                    메탄 생성 예측 시스템
                  </div>
                  <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center bg-white w-full">
                    혐기성 소화조 운영 최적화
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        {/* <div id="section-3">
          <h1 className="text-center text-3xl md:text-5xl mb-5 md:mb-10 font-semibold">
            스마트 인프라 진단 시스템
          </h1>
          <div className="text-xl md:text-3xl bg-[#F3F3F3] py-2 md:py-4 px-4 md:px-10 mb-3 md:mb-5 text-center">
            초분광 및 다중분광 분석을 활용한 빗물터널 퇴적량 분석 및 실시간 환경
            감시
          </div>
          <h2 className="text-center text-lg md:text-2xl mb-5 md:mb-10">
            스마트 인프라 진단 시스템은 환경 모니터링 사업으로 지하 시설물과
            대기, 수질의 오염 상태를 정밀하게 진단합니다.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 mb-10">
            <div className="flex flex-col justify-center items-start gap-3 md:gap-5 text-base md:text-xl">
              <div>
                상수관망 내 초분광 및 다중분광 영상 및 이미지를 수집하고
                <br className="hidden md:block" />
                AI 이미징 분석기술을 통해 상수관망 내부의 퇴적물, 오염물질의
                종류와 양을 파악합니다.
                <br className="hidden md:block" />
                또한 가시광선으로는 보이지 않는 미세한 부식 및 상수관망 파손을
                <br className="hidden md:block" />
                분광 기술을 활용하여 추적해 정확한 대응 방안을 제시합니다.
              </div>
              <div>
                또한, 빗물터널 내부 토사 퇴적량을 분광 이미지로 모니터링해
                <br className="hidden md:block" />
                AI 이미지 분석으로 토사량을 정확히 계산하고
                <br className="hidden md:block" />
                정기적인 청소와 유지보수 계획 의사결정을 지원합니다.
              </div>
            </div>
            <div className="w-full max-w-[500px]">
              <Image src={infra} alt="infra" width={500} className="w-full" />
            </div>
          </div>
          <div className="text-lg md:text-2xl flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl mb-3 md:mb-5">핵심가치</h3>
            <h4>
              · <b>정밀한 환경 모니터링</b> – AI 기반 오염 분석 및 대응
            </h4>
            <h4>
              · <b>시설물 유지보수 최적화</b> – 실시간 퇴적량 분석
            </h4>
            <h4>
              · <b>운영 비용 절감</b> – 정기적인 점검으로 장기적 비용 절약
            </h4>
          </div>
          <div className="mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl mb-4 md:mb-8">
              주요 기술 및 시스템
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5">
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3 mb-4 md:mb-0">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  초분광·다중분광 분석 시스템
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  오염물질 정밀 분석
                </div>
              </div>
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3 mb-4 md:mb-0">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  AI 환경 감시 시스템
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  실시간 위험 예측 및 대응
                </div>
              </div>
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  빗물터널 퇴적량 분석
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  유지보수 계획 수립 지원
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div id="section-4">
          <h1 className="text-center text-3xl md:text-5xl mb-5 md:mb-10 font-semibold">
            자산 관리 시스템
          </h1>
          <div className="text-xl text-center md:text-3xl bg-[#E8E8E8] py-2 md:py-4 px-4 md:px-10 mb-3 md:mb-5">
            AI 기반의 스마트 인프라 진단 시스템 및 상하수도 관리 AI 솔루션
          </div>
          <h2 className="text-center text-lg md:text-2xl mb-5 md:mb-10">
            스마트 인프라 진단 시스템 및 상하수도 관리 AI 솔루션으로 지하시설물
            및 환경 시설물의 상태를 진단하고 유지보수 계획 지원합니다.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 mb-10">
            <div className="flex flex-col justify-center items-start gap-3 md:gap-5 text-base md:text-xl">
              <div>
                자산관리 사업은 지하시설물, 상하수도 인프라, 공공시설의 효율적인
                운영과
                <br className="hidden md:block" />
                유지보수를 목표로 합니다.
              </div>
              <div>
                AI 기반의 예측 유지보수 솔루션을 통해
                <br className="hidden md:block" />
                시설물의 수명 연장과 관리 비용 절감을 지원하고
                <br className="hidden md:block" />
                위험도 평가와 자산 가치를 분석해 효율적인 자산 관리 전략을
                제공합니다.
              </div>
              <div>
                정기적인 상태 진단과 데이터 기반의 자산 평가를 통해
                <br className="hidden md:block" />
                시설물의 노후화와 손상 위험을 사전에 방지하기 위한 전문적인
                솔루션을 도출해
                <br className="hidden md:block" />
                불필요한 예산 낭비를 줄이고, 효율적인 자산 운영이 가능합니다
              </div>
            </div>
            <div className="w-full max-w-[500px]">
              <Image src={asset} alt="asset" width={500} className="w-full" />
            </div>
          </div>
          <div className="text-lg md:text-2xl flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl mb-3 md:mb-5">핵심가치</h3>
            <h4>
              · <b>지속가능한 인프라 운영 </b> – AI 기반 예측 유지보수
            </h4>
            <h4>
              · <b>비용 효율성 극대화</b> – 유지보수 비용 절감 및 수명 연장
            </h4>
            <h4>
              · <b> 자산 가치 최적화</b> – 시설물 관리 및 평가 시스템 적용
            </h4>
          </div>
          <div className="mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl mb-4 md:mb-8">
              주요 기술 및 시스템
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5">
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3 mb-4 md:mb-0">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  데이터 베이스 구축
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  시설물 상태 및 이력 관리
                </div>
              </div>
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3 mb-4 md:mb-0">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  AI 기반 유지보수 솔루션
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  노후화 예측 및 보수 계획 수립
                </div>
              </div>
              <div className="flex flex-col justify-end items-center border w-full md:w-1/3">
                <div className="bg-[#C8E3B7] w-full text-center py-2 rounded-t-lg font-bold text-lg md:text-xl">
                  위험도 평가 시스템
                </div>
                <div className="py-3 md:py-5 text-base md:text-xl text-slate-800 px-2 text-center">
                  구조적 위험 분석 및 긴급 대응 지원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
