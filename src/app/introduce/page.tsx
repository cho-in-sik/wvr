export default function Page() {
  return (
    <div className="py-16 sm:py-20 flex flex-col justify-center items-center gap-12 sm:gap-20 px-4 sm:px-6">
      {/* ✅ 제목 */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold">
        CEO 인사말
      </h1>

      {/* ✅ CEO 이미지 섹션 */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full sm:w-5/6 lg:w-4/6 h-56 sm:h-72 lg:h-80 px-6 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-10 flex flex-col justify-center"
        style={{ backgroundImage: "url('/images/introduce/ceo.jpg')" }}
      >
        <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-6 sm:mb-10 mt-2 sm:mt-5">
          CEO GREETING
        </h3>
        <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl mb-3 sm:mb-5 text-gray-800">
          안녕하십니까?
        </h2>
        <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-gray-800">
          더블유브이알에 방문해 주셔서 감사합니다.
        </h2>
      </div>

      {/* ✅ 슬로건 */}
      <div className="text-center">
        <h3 className="text-gray-500 mb-6 sm:mb-10 text-xl sm:text-2xl lg:text-3xl">
          Whatever for your dreams
        </h3>
        <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Empowering Innovation with AI
        </h3>
      </div>

      {/* ✅ 본문 텍스트 */}
      <div className="w-full sm:w-5/6 lg:w-4/6 px-4 sm:px-6 lg:px-5 flex flex-col justify-center items-start gap-6 sm:gap-10 text-base sm:text-lg lg:text-xl">
        <h6>
          더블유브이알은 모두가 행복한 삶을 위해 보이지 않는 것으로부터 새로운
          가치를 탐구합니다.
        </h6>
        <h6>
          다양한 파장대를 감지하는 분광 이미지 센서를 활용하여, 인간의
          시각으로는 감지하기 어려운 영역을 탐지하고 이를 데이터화 하여 인공지능
          모델을 통해 자동으로 학습시켜 처리합니다.
        </h6>
        <h6>
          우리는 고객과 사회에 지속가능한 가치를 제공하고 안전한 물, 탄소 중립,
          건강 관리 등 여러 분야에서의 혁신을 주도합니다. 우리의 기술로 질병의
          예방과 진단, 치료, 건강한 라이프스타일을 위한 혁신적인 맞춤 솔루션을
          받아보세요. 고객의 목표와 요구를 이해하고 그에 맞는 개인 맞춤형
          인공지능 솔루션을 제공할 것입니다.
        </h6>
        <h6>
          개인의 삶뿐만 아니라 함께 사는 가족 구성원들과 반려동물까지 모두의
          미래를 더 건강하고 행복하게 만들기 위해 저희 더블유브이알이
          함께하겠습니다.
        </h6>
      </div>
    </div>
  );
}
