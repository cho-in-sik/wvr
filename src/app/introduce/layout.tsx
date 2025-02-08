// 'use client';

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import Footer from '../_components/Footer';
// import Navbar from '../_components/Navbar';

// export default function Layout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   const pathname = usePathname();

//   // ✅ 메뉴 리스트 (이름 & 경로)
//   const menuItems = [
//     { label: 'CEO 인사말', path: '/introduce' },
//     { label: '비전 및 브랜드스토리', path: '/introduce/vision' },
//     { label: '연혁', path: '/introduce/history' },
//     { label: '인증 및 특허', path: '/introduce/certification' },
//     { label: '오시는 길', path: '/introduce/direction' },
//   ];

//   return (
//     <div className="h-screen">
//       <Navbar />
//       <div className="h-full mb-10">
//         <div
//           className="h-1/2 w-full relative bg-gray-400 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-5"
//           style={{ backgroundImage: "url('/images/introduce/introduce3.jpg')" }}
//         >
//           <h4 className="text-white text-2xl font-play font-semibold">
//             회사소개
//           </h4>
//           <h1 className="text-white text-6xl font-extrabold">CEO 인사말</h1>

//           {/* ✅ 네비게이션 메뉴 */}
//           <div className="bg-white w-8/12 h-20 absolute bottom-0 flex justify-between items-center">
//             {menuItems.map((item, index) => (
//               <Link key={index} href={item.path} className="w-full h-full">
//                 <div
//                   className={`w-full h-full flex justify-center items-center border-r last:border-r-0 font-semibold text-xl shadow-md transition-all duration-300 ${
//                     pathname === item.path ? 'bg-gray-300' : 'hover:bg-gray-200'
//                   }`}
//                 >
//                   {item.label}
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         {children}
//       </div>

//       <div className="bg-black w-full py-16">
//         <Footer />
//       </div>
//     </div>
//   );
// }
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  // ✅ 메뉴 리스트 (이름 & 경로)
  const menuItems = [
    { label: 'CEO 인사말', path: '/introduce' },
    { label: '비전 및 브랜드스토리', path: '/introduce/vision' },
    { label: '연혁', path: '/introduce/history' },
    { label: '인증 및 특허', path: '/introduce/certification' },
    { label: '오시는 길', path: '/introduce/direction' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ✅ 네비게이션 영역 */}
      <div
        className="min-h-[50vh] w-full bg-gray-400 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-5 relative"
        style={{ backgroundImage: "url('/images/introduce/introduce3.jpg')" }}
      >
        <h4 className="text-white text-2xl font-play font-semibold">
          회사소개
        </h4>
        <h1 className="text-white text-6xl font-extrabold">CEO 인사말</h1>

        {/* ✅ 네비게이션 메뉴 */}
        <div className="bg-white w-8/12 h-20 absolute bottom-0 flex justify-between items-center">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} className="w-full h-full">
              <div
                className={`w-full h-full flex justify-center items-center border-r last:border-r-0 font-semibold text-xl shadow-md transition-all duration-300 ${
                  pathname === item.path ? 'bg-gray-300' : 'hover:bg-gray-200'
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ 컨텐츠 영역 (내용이 많으면 확장됨) */}
      <div className="flex-grow min-h-[50vh] w-full h-full px-10 py-16">
        {children}
      </div>

      {/* ✅ Footer (항상 하단 고정) */}
      <div className="w-full bg-black py-16">
        <Footer />
      </div>
    </div>
  );
}
