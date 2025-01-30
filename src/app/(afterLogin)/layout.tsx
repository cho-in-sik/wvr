import { ReactNode } from 'react';
import ReactQueryClientProvider from '../_components/ReactQueryClientProvider';
import LoadingScreen from '../_components/LoadingScreen';

type Props = {
  children: ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <ReactQueryClientProvider>
      <LoadingScreen />
      <div>{children}</div>
    </ReactQueryClientProvider>
  );
}
