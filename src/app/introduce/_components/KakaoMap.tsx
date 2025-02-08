'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

const center = {
  lat: 35.18004818523897,
  lng: 126.91046547614015,
};

export default function AddMapClickEventWithMarker() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Map id="map" center={center} className="w-1/2 h-[500px] mb-20" level={3}>
        <MapMarker position={center}>
          <div className="text-sm font-semibold text-center whitespace-nowrap px-1">
            전남대학교 산학협력 공학관
          </div>
        </MapMarker>
      </Map>
      <div className="flex flex-col justify-center items-start gap-3 w-1/2 text-lg">
        <div className="flex justify-start items-center gap-5">
          <h5 className="font-semibold">본사 주소</h5>
          <h6>
            광주광역시 북구 용봉로 77, 제 1산학협력공학관 607호 (용봉동,
            전남대학교)
          </h6>
        </div>
        <hr className="w-full" />
        <div className="flex justify-start items-center gap-5">
          <h5 className="font-semibold">문의 전화</h5>
          <h6>062-716-7702</h6>
        </div>
        <hr className="w-full" />
        <div className="flex justify-start items-center gap-5">
          <h5 className="font-semibold">버스</h5>
          <h6>
            전남대공과대학정류장에서 도보 3분 -
            문흥18,송정19,일곡28,일곡38,419,용봉83,마을788,문흥80,용전784,160
            전남대스포츠센터에서 도보 9분 - 문흥18, 용전184, 진월07
          </h6>
        </div>
      </div>
    </div>
  );
}
