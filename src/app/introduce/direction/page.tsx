import KakaoMap from '../_components/KakaoMap';

export default function Page() {
  return (
    <div className="py-20">
      <h1 className="text-center text-5xl font-semibold mb-20">오시는 길</h1>
      <KakaoMap />
    </div>
  );
}
