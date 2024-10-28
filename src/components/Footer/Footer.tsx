'use client';

import type { ReactElement } from 'react';

export const Footer = (): ReactElement => {
  return (
    <footer className="font-medium bg-[#c0c0c0] gap-2 flex flex-col flex-wrap justify-center items-center text-sm p-5 relative md:flex-row md:justify-center md:flex-row">
      <p>Interface recreation. Made by Spidey Santa in 2024</p>
    </footer>
  );
};

export default Footer;
