'use client';

import { Button } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import Location from '@/components/Location/Location';
import Villains from '@/components/Villains/Villains';

const App = (): ReactElement => {
  const [opacity, setOpacity] = useState('opacity-100');
  const [currentPage, setCurrentPage] = useState('welcome');
  let ui = (
    <Button
      size="lg"
      className="bg-[#c30000] text-white"
      onPress={() => {
        setOpacity('opacity-0');
        setTimeout(() => {
          setCurrentPage('villains');
        }, 300);
      }}
    >
      Start
    </Button>
  );

  if (currentPage === 'villains') ui = <Villains setCurrentPage={setCurrentPage} setOpacity={setOpacity} />;
  if (currentPage === 'location') ui = <Location setCurrentPage={setCurrentPage} setOpacity={setOpacity} />;

  useEffect(() => {
    setOpacity('opacity-100');
  }, [currentPage]);

  console.log(opacity);

  return (
    <>
      <main className={`self-center flex flex-col items-center gap-10 transition-all ${opacity}`}>{ui}</main>
    </>
  );
};

export default App;
