'use client';

import { Button } from '@nextui-org/react';
import type { ReactElement } from 'react';

const Error = (): ReactElement => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="flex flex-col z-[2] gap-5 items-center">
        <div>
          <p className="text-3xl text-center sm:text-4xl">Oops!</p>
          <p className="text-center text-xl sm:text-2xl">Something went wrong...</p>
        </div>
        <Button onClick={() => location.reload()} color="danger">
          Reload
        </Button>
      </div>
    </div>
  );
};

export default Error;
