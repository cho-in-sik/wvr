export default function SecondMain() {
  return (
    <div className="flex flex-1 overflow-y-hidden">
      {/* ✅ 이미지 배경 영역 */}
      <div
        className="h-screen w-2/5 bg-cover bg-center bg-no-repeat flex items-center justify-start p-28"
        style={{ backgroundImage: "url('/images/main/secondMain1.jpg')" }}
      >
        {/* ✅ 텍스트를 중앙 정렬 */}
        <div className="text-white flex flex-col items-start justify-center">
          <h3 className="text-2xl font-extrabold mb-3">About us</h3>
          <h4 className="font-normal text-4xl mb-1">
            더블유브이알은 모두가 행복한
          </h4>
          <h4 className="font-extrabold text-4xl mb-1">
            삶을 위해 보이지 않는 것으로부터
          </h4>
          <h4 className="font-extrabold text-4xl mb-8">
            새로운 가치를 탐구합니다.
          </h4>
          <span className="text-base">
            다양한 파장대를 감지하는 분광 이미지 센서를 활용하여, 인간의
            시각으로는 감지하기 어려운 영역을 탐지하고 이를 데이터화 하여
            인공지능 모델을 통해 자동으로 학습시켜 처리합니다.
          </span>
        </div>
      </div>

      {/* ✅ 나머지 3/5 영역 */}
      <div className="bg-gray-100 h-screen w-3/5 flex justify-center items-center p-24 gap-16">
        <div
          className="bg-cover bg-center bg-no-repeat h-3/5 w-1/2 mt-28"
          style={{
            backgroundImage: "url('/images/main/companyIntroduce.jpg')",
          }}
        >
          <div className="text-white px-12 py-16">
            <h5 className="text-2xl mb-3">About us</h5>
            <h4 className="text-3xl font-bold ml-2">기업소개</h4>
          </div>
        </div>
        <div
          className="bg-cover bg-center bg-no-repea h-3/5 w-1/2"
          style={{
            backgroundImage: "url('/images/main/vision.jpg')",
          }}
        >
          <div className="text-white px-12 py-16">
            <h5 className="text-2xl mb-3">Vision</h5>
            <h4 className="text-3xl font-bold ml-2">비전</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
