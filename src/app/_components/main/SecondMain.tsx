export default function SecondMain() {
  return (
    // 기본적으로 상단에 6rem(24) 만큼의 마진을 주어 navbar와 겹치지 않도록 하고,
    // 2xl 이상(가로 레이아웃)에서는 마진을 제거합니다.
    <div className="mt-24 2xl:mt-0 flex flex-col 2xl:flex-row flex-1 overflow-hidden ">
      {/* 왼쪽 이미지 배경 및 텍스트 영역 */}
      <div
        className="relative w-full 2xl:w-2/5 h-auto 2xl:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-start p-10 md:p-16 lg:p-28"
        style={{ backgroundImage: "url('/images/main/secondMain.jpeg')" }}
      >
        {/* 오른쪽 그라데이션 오버레이 */}
        <div className="absolute inset-0 pointer-events-none flex justify-end">
          <div
            className="w-1/2 h-full"
            style={{
              backgroundImage:
                'linear-gradient(to left, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0))',
            }}
          />
        </div>
        {/* 텍스트 콘텐츠 (오버레이 위에 표시) */}
        <div className="min-w-[800px] relative z-10 text-black flex flex-col items-start justify-center font-sans">
          <h3
            className="font-medium mb-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            더블유브이알은
          </h3>
          <h4
            className="mb-1 whitespace-nowrap font-medium"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            환경 데이터 AI로 분석하여
          </h4>
          <h4
            className="mb-1 whitespace-nowrap font-medium"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            새로운 가치를 창출하는
          </h4>
          <h4
            className="mb-6 whitespace-nowrap font-medium"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            스마트 환경 솔루션 기업입니다.
          </h4>
          <span
            className="pr-4 w-1/3 2xl:w-3/4 font-light"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)' }}
          >
            우리는 인공지능과 첨단 센싱 기술을 활용해 정밀하게 분석하고 예측하여
            최적의 해결책을 제시함으로써 지속 가능한 미래를 위한 혁신을
            이끌어갑니다
          </span>
        </div>
      </div>

      {/* 오른쪽 카드 영역 */}
      <div className="w-full 2xl:w-3/5 bg-gray-100 h-auto 2xl:h-screen flex flex-col 2xl:flex-row justify-center items-center p-10 md:p-16 lg:p-24 gap-6 2xl:gap-16">
        {/* 기업소개 카드 */}
        <div className="relative h-auto 2xl:h-[50vh] w-full 2xl:w-1/2 overflow-hidden rounded-lg shadow-md mt-10 2xl:mt-28">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
            style={{
              backgroundImage: "url('/images/main/mainCompanyIntroduce.jpeg')",
            }}
          ></div>
          <div className="relative z-10 text-white px-6 py-10 md:px-10 md:py-16 bg-black bg-opacity-50 rounded-lg">
            <h5 className="text-lg md:text-xl lg:text-2xl mb-2 font-sans font-medium">
              About us
            </h5>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-sans font-medium">
              기업소개
            </h4>
          </div>
        </div>

        {/* 비전 카드 */}
        <div className="relative h-auto 2xl:h-[50vh] w-full 2xl:w-1/2 overflow-hidden rounded-lg shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
            style={{
              backgroundImage: "url('/images/main/mainVision.jpeg')",
            }}
          ></div>
          <div className="relative z-10 text-white px-6 py-10 md:px-10 md:py-16 bg-black bg-opacity-50 rounded-lg">
            <h5 className="text-lg md:text-xl lg:text-2xl mb-2 font-sans font-medium">
              Vision
            </h5>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-medium font-sans">
              비전
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
