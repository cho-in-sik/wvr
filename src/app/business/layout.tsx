import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* 네비게이션 영역 */}
      <div className="relative">
        {/* 배경 이미지 영역 */}
        <div
          className="min-h-[40vh] sm:min-h-[50vh] w-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/business/businessMain.jpeg')",
            backgroundPosition: '70% 30%',
          }}
        />

        {/* 네비게이션 콘텐츠 영역 */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 px-4 sm:px-6">
          <h4 className="text-white text-2xl sm:text-2xl font-medium font-sans">
            Business
          </h4>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-semibold">
            비즈니스
          </h1>
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="flex-grow min-h-[50vh] w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        {children}
      </div>

      {/* Footer */}
      <div className="w-full bg-black py-16 sm:py-12">
        <Footer />
      </div>
    </div>
  );
}
