import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* 네비게이션 영역 */}
      <div
        className="min-h-[40vh] sm:min-h-[50vh] w-full bg-gray-400 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-5 relative px-4 sm:px-6"
        style={{ backgroundImage: "url('/images/introduce/ceo.jpeg')" }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          약관
        </h1>
      </div>

      {/* 콘텐츠 영역: h-full 제거, flex-grow로 자연스럽게 확장 */}
      <div className="flex-grow min-h-[50vh] w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        {children}
      </div>

      {/* Footer는 항상 하단에 위치 */}
      <div className="w-full bg-black py-16 sm:py-12">
        <Footer />
      </div>
    </div>
  );
}
