'use client';

import { Button } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import Villains from '@/components/Villains/Villains';

const App = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState('welcome');
  let ui = (
    <Button size="lg" className="bg-[#c30000] text-white" onPress={() => setCurrentPage('villains')}>
      Start
    </Button>
  );

  if (currentPage === 'villains') ui = <Villains setCurrentPage={setCurrentPage} />;
  if (currentPage === 'location') ui = <p>Location</p>;

  return (
    <>
      <main className="self-center flex flex-col items-center gap-10">{ui}</main>
    </>
  );
};

export default App;
