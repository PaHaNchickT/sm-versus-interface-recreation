'use client';

import { type ReactElement } from 'react';

const Header = (): ReactElement => {
  return (
    <header className="h-[60px] bg-[#c30000] flex justify-center items-center font-black">
      <h1 className="text-2xl sm:text-3xl">SPIDER-MAN Versus</h1>
    </header>
  );
};

export default Header;
