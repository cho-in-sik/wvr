import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ✅ 네비게이션 영역 (반응형) */}
      <div
        className="min-h-[40vh] sm:min-h-[50vh] w-full bg-gray-400 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-5 relative px-4 sm:px-6"
        style={{ backgroundImage: "url('/images/contact/contact.jpeg')" }}
      >
        <h4 className="text-white text-lg sm:text-xl font-play font-semibold">
          소통
        </h4>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          문의하기
        </h1>
      </div>

      {/* ✅ 컨텐츠 영역 (반응형) */}
      <div className="flex-grow min-h-[50vh] w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        {children}
      </div>

      {/* ✅ Footer (항상 하단 고정) */}
      <div className="w-full bg-black py-16 sm:py-12">
        <Footer />
      </div>
    </div>
  );
}
