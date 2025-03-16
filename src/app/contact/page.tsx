'use client';

import { addContact } from '@/actions/contact';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, content, email };
    try {
      setIsLoading(true);
      const res = await addContact(formData);
      console.log(res);
      setIsLoading(false);
      if (res.status === 201 || 200) {
        alert('제출 완료');
        setContent('');
        setEmail('');
        setName('');
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 flex flex-col items-center">
      {/* ✅ 전체 컨테이너 */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 h-full gap-10 lg:gap-16">
        {/* ✅ 왼쪽 (회사 정보) */}
        <div className="w-full lg:w-2/6 h-auto lg:h-[500px] bg-white px-6 sm:px-10 lg:px-20 py-8 sm:py-10 flex flex-col justify-start items-start gap-6 sm:gap-8">
          <h3 className="text-xl sm:text-2xl font-semibold">㈜ 더블유브이알</h3>

          <div className="text-gray-500 font-semibold">
            <h4 className="text-lg sm:text-xl text-gray-600">주소:</h4>
            <h5 className="text-sm sm:text-base">
              광주광역시 북구 용봉로 77, 제 1산학협력공학관 607호 (용봉동,
              전남대학교)
            </h5>
          </div>

          <div className="text-gray-500 font-semibold">
            <h4 className="text-lg sm:text-xl text-gray-600">연락처:</h4>
            <h5 className="text-sm sm:text-base">062-716-7702</h5>
          </div>

          <div className="text-gray-500 font-semibold">
            <h4 className="text-lg sm:text-xl text-gray-600">이메일:</h4>
            <h5 className="text-sm sm:text-base">contact@wvrfor.com</h5>
          </div>
        </div>

        {/* ✅ 오른쪽 (문의 폼) */}
        <div className="w-full lg:w-3/6 h-auto lg:h-[500px] flex flex-col justify-start items-start px-6 sm:px-10 lg:px-20 py-8 sm:py-10">
          {/* ✅ 제목 */}
          <div className="mb-6 sm:mb-10">
            <h3 className="font-semibold text-2xl sm:text-4xl mb-2">
              여러분을 기다리고 있습니다!
            </h3>
            <h6 className="text-gray-500 text-sm sm:text-base">
              서비스, 솔루션, 혹은 기타 문의사항에 대해 궁금한 점이 있으시면
              아래 양식을 이용해 주세요.
            </h6>
          </div>

          {/* ✅ 폼 */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-6 sm:gap-8"
          >
            <div className="flex flex-col gap-4">
              {/* ✅ 이름 */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-lg sm:text-xl">
                  이름
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="이름"
                  className="border-b px-1 py-1 focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* ✅ 이메일 */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-lg sm:text-xl">
                  이메일
                </label>
                <input
                  maxLength={30}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일"
                  className="border-b px-1 py-1 focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* ✅ 문의 내용 */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-lg sm:text-xl">
                  문의 내용
                </label>
                <textarea
                  maxLength={2000}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  id="subject"
                  name="subject"
                  placeholder="문의 내용"
                  className="border-b px-1 py-2 focus:outline-none focus:border-gray-400 h-24 sm:h-32 resize-none"
                />
              </div>
            </div>

            {/* ✅ 전송 버튼 */}
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={isLoading}
            >
              전송
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
