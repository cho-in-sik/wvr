export default function SecondMain() {
  return (
    <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
      {/* ✅ 이미지 배경 영역 (왼쪽) */}
      <div
        className="h-[60vh] lg:h-screen w-full lg:w-2/5 bg-cover bg-center bg-no-repeat flex items-center justify-start p-10 md:p-16 lg:p-28"
        style={{ backgroundImage: "url('/images/main/secondMain1.jpg')" }}
      >
        <div className="text-white flex flex-col items-start justify-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-3">
            About us
          </h3>
          <h4 className="text-lg md:text-2xl lg:text-4xl mb-1">
            더블유브이알은 모두가 행복한
          </h4>
          <h4 className="font-extrabold text-lg md:text-2xl lg:text-4xl mb-1">
            삶을 위해 보이지 않는 것으로부터
          </h4>
          <h4 className="font-extrabold text-lg md:text-2xl lg:text-4xl mb-6">
            새로운 가치를 탐구합니다.
          </h4>
          <span className="text-sm md:text-base pr-32">
            다양한 파장대를 감지하는 분광 이미지 센서를 활용하여, 인간의
            시각으로는 감지하기 어려운 영역을 탐지하고 이를 데이터화 하여
            인공지능 모델을 통해 자동으로 학습시켜 처리합니다.
          </span>
        </div>
      </div>

      {/* ✅ 나머지 3/5 영역 (오른쪽) */}
      <div className="bg-gray-100 h-[40vh] lg:h-screen w-full lg:w-3/5 flex flex-col lg:flex-row justify-center items-center p-10 md:p-16 lg:p-24 gap-6 lg:gap-16">
        {/* ✅ 기업소개 카드 */}
        <div className="relative h-[50vh] w-full lg:w-1/2 overflow-hidden rounded-lg shadow-md mt-28">
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

        {/* ✅ 비전 카드 */}
        <div className="relative h-[50vh] w-full lg:w-1/2 overflow-hidden rounded-lg shadow-md">
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
