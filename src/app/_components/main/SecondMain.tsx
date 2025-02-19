export default function SecondMain() {
  return (
    // 기본적으로 상단에 6rem(24) 만큼의 마진을 주어 navbar와 겹치지 않도록 하고,
    // 2xl 이상(가로 레이아웃)에서는 마진을 제거합니다.
    <div className="mt-24 2xl:mt-0 flex flex-col 2xl:flex-row flex-1 overflow-hidden">
      {/* 왼쪽 이미지 배경 및 텍스트 영역 */}
      <div
        className="w-full 2xl:w-2/5 h-auto 2xl:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-start p-10 md:p-16 lg:p-28"
        style={{ backgroundImage: "url('/images/main/secondMain1.jpg')" }}
      >
        {/* 최소 너비를 지정하여 텍스트 줄바꿈 없이 한 줄씩 유지 */}
        <div className="min-w-[800px] text-white flex flex-col items-start justify-center">
          <h3
            className="font-extrabold mb-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            About us
          </h3>
          <h4
            className="mb-1 whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            더블유브이알은 모두가 행복한
          </h4>
          <h4
            className="mb-1 whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            삶을 위해 보이지 않는 것으로부터
          </h4>
          <h4
            className="mb-6 whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}
          >
            새로운 가치를 탐구합니다.
          </h4>
          <span
            // 모바일에서는 w-full, 큰 화면에서는 w-1/3 적용하여 반응형 너비 조정
            className="pr-4 w-1/3 2xl:w-3/4"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)' }}
          >
            다양한 파장대를 감지하는 분광 이미지 센서를 활용하여, 인간의
            시각으로는 감지하기 어려운 영역을 탐지하고 이를 데이터화하여
            인공지능 모델을 통해 자동으로 학습시켜 처리합니다.
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
              backgroundImage: "url('/images/main/companyIntroduce.jpg')",
            }}
          ></div>
          <div className="relative z-10 text-white px-6 py-10 md:px-10 md:py-16 bg-black bg-opacity-50 rounded-lg">
            <h5 className="text-lg md:text-xl lg:text-2xl mb-2">About us</h5>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
              기업소개
            </h4>
          </div>
        </div>

        {/* 비전 카드 */}
        <div className="relative h-auto 2xl:h-[50vh] w-full 2xl:w-1/2 overflow-hidden rounded-lg shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
            style={{
              backgroundImage: "url('/images/main/vision.jpg')",
            }}
          ></div>
          <div className="relative z-10 text-white px-6 py-10 md:px-10 md:py-16 bg-black bg-opacity-50 rounded-lg">
            <h5 className="text-lg md:text-xl lg:text-2xl mb-2">Vision</h5>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">비전</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
