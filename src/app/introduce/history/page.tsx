export default function Page() {
  const history2024 = [
    {
      id: 1,
      period: '하반기',
      content: ['인공지능 스마트 에너지 공조 시스템 개발', 'Seed 투자 유치'],
    },
    { id: 2, period: '7월', content: ['AIoT 공기정화 시스템 개발'] },
    {
      id: 3,
      period: '5월',
      content: [
        '상수관로 누수음 분석 및 진단 시스템 개발',
        '인공지능 활용한 수질 및 대기질 센싱기술개발',
      ],
    },
    {
      id: 4,
      period: '4월',
      title: 'Eco-startup 창업기업 과제 ',
      content: ['인공지능 지하시설물 진단 장비 개발'],
    },
  ];
  const history2023 = [
    {
      id: 1,
      period: '10월',
      content: ['과학기술정보통신부 전문 연구 사업자 등록'],
    },
    {
      id: 2,
      period: '9월',
      title: '특허 출원 2건',
      content: [
        '인공지능을 이용한 이미지 분석 기반의 관 내부 감시진단 방법 및 장치',
        '분광 필터 키트',
      ],
    },
    {
      id: 3,
      period: '8월',

      content: [
        '특허 등록 : 초분광 이미징 기반의 상수도 시설물 감시 분석 장치 및 방법',
        '상수관로 누수음 분석 및 진단 알고리즘 개발',
      ],
    },
    {
      id: 4,
      period: '4월',
      content: ['Eco-startup 예비창업자 과제', '전남대 특허 기술이전 실시'],
    },
    {
      id: 5,
      period: '1월',
      content: ['(주)더블유브이알 법인 설립'],
    },
  ];
  return (
    <div className="py-16 sm:py-20 flex flex-col justify-center items-center gap-12 sm:gap-20 px-4 sm:px-6">
      {/* ✅ 제목 */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold">
        연혁
      </h1>

      {/* ✅ CEO 이미지 섹션 */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full sm:w-5/6 lg:w-4/6 h-56 sm:h-72 lg:h-80 px-6 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-10 flex flex-col justify-center text-white"
        style={{ backgroundImage: "url('/images/introduce/history2.jpeg')" }}
      >
        <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-6 sm:mb-10 mt-2 sm:mt-5">
          HISTORY
        </h3>
        <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl mb-3 sm:mb-5 ">
          더블유브이알이
        </h2>
        <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl ">
          걸어온 길을 소개합니다.
        </h2>
      </div>

      {/* <div className="w-full flex justify-center items-center px-20"> */}
      <div className="w-full sm:w-5/6 lg:w-4/6 flex flex-col justify-start items-start bg-gray-50 border-l-4 border-gray-300">
        <div className="w-full h-20 relative flex justify-start items-center">
          <div className="ml-10 text-3xl font-bold">2025</div>
        </div>

        <div className="w-full  h-16 relative flex justify-start items-center">
          <div className="w-5 h-5 bg-gray-300 rounded-full absolute -left-3 top-5 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>
          <div className="ml-5 text-lg text-slate-700">- TIPS 투자 유치</div>
        </div>
        <hr className="w-full mb-5" />
        <div className="w-full h-20 relative flex justify-start items-center">
          <div className="ml-10 text-3xl font-bold">2024</div>
        </div>

        {history2024.map((item) => (
          <div
            className="w-full h-24 relative flex flex-col justify-center items-start"
            key={item.id}
          >
            <div className="w-5 h-5 bg-gray-300 rounded-full absolute -left-3 top-9 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            </div>
            <div className="ml-5 text-xl font-bold mb-1">{item?.title}</div>
            {item.content.map((item) => (
              <div className="flex flex-col justify-center items-start">
                <div className="ml-5 text-lg text-slate-700">- {item}</div>
              </div>
            ))}
          </div>
        ))}
        <hr className="w-full mb-5" />

        <div className="w-full h-20 relative flex justify-start items-center">
          <div className="ml-10 text-3xl font-bold">2023</div>
        </div>

        {history2023.map((item) => (
          <div
            className="w-full h-24 relative flex flex-col justify-center items-start"
            key={item.id}
          >
            <div className="w-5 h-5 bg-gray-300 rounded-full absolute -left-3 top-9 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            </div>
            <div className="ml-5 text-xl font-bold mb-1">{item?.title}</div>
            {item.content.map((item) => (
              <div className="flex flex-col justify-center items-start">
                <div className="ml-5 text-lg text-slate-700">- {item}</div>
              </div>
            ))}
          </div>
        ))}
        <hr className="w-full mb-5" />
        <div className="w-full h-20 relative flex justify-start items-center">
          <div className="ml-10 text-3xl font-bold">2022</div>
        </div>
        <div className="w-full  h-16 relative flex justify-start items-center">
          <div className="w-5 h-5 bg-gray-300 rounded-full absolute -left-3 top-5 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>
          <div className="ml-5 text-lg text-slate-700">
            - 벤처기업협회 예비벤처기업 지정
          </div>
        </div>
        <hr className="w-full" />
      </div>
    </div>
  );
}
