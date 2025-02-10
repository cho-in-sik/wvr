import NoticeTable from './_components/Table';

export default function Page() {
  return (
    <div className="py-16 sm:py-20 flex flex-col justify-center items-center gap-12 sm:gap-20 px-4 sm:px-6">
      <div className="w-3/5">
        <NoticeTable />
      </div>
    </div>
  );
}
