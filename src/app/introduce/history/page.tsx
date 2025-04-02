export default function Page() {
  const history2024 = [
    {
      id: 1,
      period: '12월',
      content: ['㈜ 더블유브이알 지점 설립'],
    },
    {
      id: 2,
      period: '9월',
      content: ['2024 스마트건설 창업아이디어 공모전 장려상 수상'],
    },
    {
      id: 3,
      period: '8월',
      content: [
        '특허 등록 : 인공지능을 이용한 이미지 분석 기반의 관 내부 감시진단 방법 및 장치',
      ],
    },
    {
      id: 4,
      period: '7월',
      content: [
        'AIoT 공기정화 시스템 개발',
        '특허 등록 : 분광 필터 키트{SPECTRAL FILTER KIT}',
      ],
    },
    {
      id: 5,
      period: '5월',
      content: ['상수관로 누수음 분석 및 진단 시스템 개발'],
    },
    {
      id: 6,
      period: '4월',

      content: [
        '2024년 Eco-startup 창업기업 과제 수행',
        '인공지능 지하시설물 진단 장비 개발',
        '인공지능 활용한 수질 및 대기질 센싱기술개발',
      ],
    },
  ];

  const history2023 = [
    {
      id: 1,
      period: '10월',
      content: ['과학기술정보통신부 전문 연구 사업자 등록'],
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
      <div className="relative w-full sm:w-5/6 lg:w-4/6 h-56 sm:h-80 lg:h-96 px-6 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-10 flex flex-col justify-center text-white">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/introduce/history2.jpeg')" }}
        ></div>
        {/* 가장자리 그라데이션 오버레이 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 80%, rgba(255,255,255,0.5) 100%)',
          }}
        ></div>
        {/* 콘텐츠 */}
        <div className="relative z-10">
          <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-6 sm:mb-10 mt-2 sm:mt-5">
            HISTORY
          </h3>
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl mb-3 sm:mb-5">
            환경을 위한 기술로 걸어온
          </h2>
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl">
            더블유브이알의 여정을 소개합니다.
          </h2>
        </div>
      </div>

      <div className="w-full sm:w-5/6 lg:w-4/6 flex flex-col justify-start items-start bg-gray-50 border-l-4 border-gray-300 py-2">
        {/* ✅ 2025
        <div className="w-full h-20 relative flex justify-start items-center">
          <div className="ml-10 text-3xl font-bold">2025</div>
        </div>

        <div className="w-full  h-16 relative flex justify-start items-center">
          <div className="w-5 h-5 bg-gray-300 rounded-full absolute -left-3 top-5 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>
          <div className="ml-5 text-xl text-slate-700">TIPS 투자 유치</div>
        </div>*/}
        {/* <hr className="w-full mb-5" /> */}

        {/* ✅ 2024 연혁 */}
        <div className="relative">
          <div className="w-full h-20 flex justify-start items-center absolute -left-36">
            <div className="ml-10 text-3xl font-bold">2024</div>
          </div>
          {history2024.map((item) => (
            <div
              className="w-full relative flex flex-col justify-center items-start py-6 gap-1"
              key={item.id}
            >
              <div className="w-5 h-5 bg-gray-300 rounded-full absolute -left-3 top-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              </div>

              <div className="flex justify-start gap-5">
                <div className="ml-5 text-xl font-semibold text-gray-700">
                  {item.period}
                </div>

                <div>
                  {item.content.map((contentItem, index) => (
                    <div className="ml-5 text-2xl text-slate-700" key={index}>
                      {contentItem}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="w-full mb-5" />

        <div className="relative">
          {/* ✅ 2023 연혁 */}
          <div className="w-full h-20 absolute -left-36 flex justify-start items-center">
            <div className="ml-10 text-3xl font-bold">2023</div>
          </div>

          {history2023.map((item) => (
            <div
              className="w-full relative flex flex-col justify-center items-start py-6 gap-1"
              key={item.id}
            >
              <div className="w-5 h-5 bg-gray-300 rounded-full absolute -left-3 top-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              </div>

              <div className="flex justify-start gap-5">
                <div className="ml-5 text-xl font-semibold text-gray-700">
                  {item.period}
                </div>

                <div>
                  {item.content.map((contentItem, index) => (
                    <div className="ml-5 text-2xl text-slate-700" key={index}>
                      {contentItem}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="w-full mb-5" />
        <div className="relative">
          {/* ✅ 2022 연혁 */}
          <div className="w-full h-20 absolute -left-36 -top-3 flex justify-start items-center">
            <div className="ml-10 text-3xl font-bold">2022</div>
          </div>
          <div className="w-full relative flex flex-col justify-center items-start py-3 gap-1">
            <div className="w-5 h-5 bg-gray-300 rounded-full absolute -left-3 top-5 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            </div>
            {/* <div className="ml-5 text-xl font-semibold text-gray-700">11월</div>
          <div className="ml-5 text-2xl text-slate-700">
            벤처기업협회 예비벤처기업 지정
          </div> */}
            <div className="flex justify-start gap-5">
              <div className="ml-5 text-xl font-semibold text-gray-700">
                11월
              </div>

              <div className="ml-5 text-2xl text-slate-700">
                벤처기업협회 예비벤처기업 지정
              </div>
            </div>
          </div>
        </div>

        {/* <hr className="w-full" /> */}
      </div>
    </div>
  );
}
