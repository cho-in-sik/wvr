import { createServerSupabaseClient } from '@/utils/supabase/server';
import ContactTable from '../_components/Table';
import { redirect } from 'next/navigation';

export default async function Page() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) redirect('/');
  return (
    <div className="py-20">
      <ContactTable />
    </div>
  );
}
