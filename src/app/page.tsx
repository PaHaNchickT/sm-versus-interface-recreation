'use client';

import { Button } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import Villains from '@/components/Villains/Villains';

const App = (): ReactElement => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <main className="self-center">
        {clicked ? (
          <Villains />
        ) : (
          <Button size="lg" color="danger" onPress={() => setClicked(true)}>
            Start
          </Button>
        )}
      </main>
    </>
  );
};

export default App;
