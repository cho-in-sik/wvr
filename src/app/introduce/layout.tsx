import Navbar from '../_components/Navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="h-screen overflow-hidden">
        <div
          className="h-1/2 w-full relative bg-gray-400 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-5"
          style={{ backgroundImage: "url('/images/introduce/introduce3.jpg')" }}
        >
          <h4 className="text-white text-2xl font-play font-semibold">
            회사소개
          </h4>

          <h1 className="text-white text-6xl font-extrabold">CEO 인사말</h1>

          <div className="bg-white w-8/12 h-20 absolute bottom-0 flex justify-between items-center">
            {[
              'CEO 인사말',
              '비전 및 브랜드스토리',
              '연혁',
              '인증 및 특허',
              '오시는 길',
            ].map((text, index) => (
              <div
                key={index}
                className="w-full h-full flex justify-center items-center border-r last:border-r-0 font-semibold text-xl shadow-md"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
