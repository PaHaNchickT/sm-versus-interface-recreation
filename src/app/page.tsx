'use client';

import { Button } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import Villains from '@/components/Villains/Villains';

const App = (): ReactElement => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <main className="self-center flex flex-col items-center gap-10">
        {clicked ? (
          <Villains />
        ) : (
          <Button size="lg" className="bg-[#c30000] text-white" onPress={() => setClicked(true)}>
            Start
          </Button>
        )}
      </main>
    </>
  );
};

export default App;
