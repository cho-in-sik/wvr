import water from '@/../public/images/main/water.png';
import carbon from '@/../public/images/main/carbon2.png';
import environment from '@/../public/images/main/environment.png';
import right from '@/../public/svgs/right.svg';
import Image from 'next/image';

export default function ThirdMain() {
  return (
    <div className="flex">
      <div className="h-screen bg-gray-50 flex justify-start items-center w-2/5 p-28">
        <div className="text-black flex flex-col items-start justify-center">
          <h3 className="text-2xl font-extrabold mb-3">Business</h3>
          <h4 className="font-normal text-4xl mb-1">
            더블유브이알은 모두가 행복한
          </h4>
          <h4 className="font-extrabold text-4xl mb-1">
            삶을 위해 보이지 않는 것으로부터
          </h4>
          <h4 className="font-extrabold text-4xl mb-8">
            새로운 가치를 탐구합니다.
          </h4>
          <span className="text-base">
            수질 환경, 대기 환경, 개인과 가족 구성원들의 건강 등 더 넓어지고
            다양해질 분야에서 더블유브이알의 AI care 기술을 만나보세요.
          </span>
        </div>
      </div>
      <div
        className="h-screen w-3/5 flex justify-evenly items-center -ml-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main/thirdMain2.jpg')" }}
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-3xl font-semibold">Water</span>
          <Image src={water} alt="water" width={150} />
          <span className="text-xl my-5">WVR와 함께 나아갈 물관</span>
          <div className="bg-gray-800 rounded-full p-1">
            <Image src={right} alt="right" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-3xl font-semibold">Environment</span>
          <Image src={environment} alt="environment" width={150} />
          <span className="text-xl my-5">환경을 생각하는 친화적인</span>
          <div className="bg-gray-800 rounded-full p-1">
            <Image src={right} alt="right" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-3xl font-semibold">Carbon</span>
          <Image src={carbon} alt="carbon" width={150} />
          <span className="text-xl my-5">탄소 저감을 위한 사업미</span>
          <div className="bg-gray-800 rounded-full p-1">
            <Image src={right} alt="right" />
          </div>
        </div>
      </div>
    </div>
  );
}
