import '@/styles/globals.css';
import type { Metadata } from 'next';
import { type ReactElement } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'SM: Versus',
  description: 'Interface recreation from Spider-Man: Versus cancelled game',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<ReactElement> => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="text-white">
        <div className="w-screen min-h-screen flex flex-col justify-between bg-black">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
