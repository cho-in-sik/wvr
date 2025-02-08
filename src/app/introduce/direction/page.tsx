import KakaoMap from '../_components/KakaoMap';

export default function Page() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 sm:mb-20">
        오시는 길
      </h1>
      <KakaoMap />
    </div>
  );
}
