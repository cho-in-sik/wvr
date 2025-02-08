'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

const center = {
  lat: 35.18004818523897,
  lng: 126.91046547614015,
};

export default function AddMapClickEventWithMarker() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 sm:gap-16">
      {/* ✅ 카카오 지도 */}
      <Map
        id="map"
        center={center}
        className="w-full sm:w-5/6 lg:w-1/2 h-64 sm:h-80 lg:h-[500px] mb-10 sm:mb-20"
        level={3}
      >
        <MapMarker position={center}>
          <div className="text-xs sm:text-sm font-semibold text-center whitespace-nowrap px-1">
            전남대학교 산학협력 공학관
          </div>
        </MapMarker>
      </Map>

      {/* ✅ 주소 및 교통 정보 */}
      <div className="w-full sm:w-5/6 lg:w-1/2 px-4 sm:px-6 text-sm sm:text-base lg:text-lg">
        {/* ✅ 본사 주소 */}
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-5">
          <h5 className="font-semibold text-gray-800">본사 주소</h5>
          <h6 className="text-gray-600">
            광주광역시 북구 용봉로 77, 제 1산학협력공학관 607호 (용봉동,
            전남대학교)
          </h6>
        </div>
        <hr className="w-full my-4" />

        {/* ✅ 문의 전화 */}
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-5">
          <h5 className="font-semibold text-gray-800">문의 전화</h5>
          <h6 className="text-gray-600">062-716-7702</h6>
        </div>
        <hr className="w-full my-4" />

        {/* ✅ 버스 정보 */}
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-5">
          <h5 className="font-semibold text-gray-800">버스</h5>
          <h6 className="text-gray-600">
            전남대공과대학 정류장에서 도보 3분 - 문흥18, 송정19, 일곡28, 일곡38,
            419, 용봉83, 마을788, 문흥80, 용전784, 160 <br />
            전남대스포츠센터에서 도보 9분 - 문흥18, 용전184, 진월07
          </h6>
        </div>
      </div>
    </div>
  );
}
