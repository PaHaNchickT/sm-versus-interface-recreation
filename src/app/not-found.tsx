'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import type { ReactElement } from 'react';

export default function NotFound(): ReactElement {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center text-center">
      <div className="flex flex-col z-[2] gap-5 items-center">
        <div>
          <p className="text-3xl text-center sm:text-4xl">404</p>
          <p className="text-sm sm:text-xl">Page not found...</p>
        </div>
        <Button onClick={() => router.push('/')} color="danger">
          Home
        </Button>
      </div>
    </div>
  );
}
