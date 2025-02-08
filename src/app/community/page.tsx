export default function Page() {
  return (
    <div className="py-16 sm:py-20 flex flex-col justify-center items-center gap-12 sm:gap-20 px-4 sm:px-6">
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
    </div>
  );
}
