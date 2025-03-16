'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Usage from './_components/Usage';
import Privacy from './_components/Privacy';
import Email from './_components/Email';

export default function Page() {
  const params = useSearchParams();
  const field = params.get('1');

  let title = '';
  let Component: React.ComponentType | null = null;

  if (field === 'usage') {
    title = '이용약관';
    Component = Usage;
  } else if (field === 'privacy') {
    title = '개인정보 취급방침';
    Component = Privacy;
  } else if (field === 'email') {
    title = '이메일주소무단수집거부';
    Component = Email;
  }

  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-sans text-slate-700 font-semibold text-center">
        {title}
      </h1>
      <hr className="my-6 md:my-10 w-full md:w-2/3" />
      <div className="border-8 w-full md:w-2/3 p-4 md:p-10">
        {Component ? <Component /> : null}
      </div>
    </div>
  );
}
