'use client';

import { Button } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

const Villains = (): ReactElement => {
  const [villain, setVillain] = useState(4);
  const temp = ['Scorp', 'Hulk', 'Goblin', 'Unknown', 'Jug', 'Kraven', 'Cat', 'Carnage', 'Robot'];
  const styles = [
    'left-[calc((100%-810px)/2+360px)]',
    'left-[calc((100%-810px)/2+270px)]',
    'left-[calc((100%-810px)/2+180px)]',
    'left-[calc((100%-810px)/2+90px)]',
    'left-[calc((100%-810px)/2)]',
    'left-[calc((100%-810px)/2-90px)]',
    'left-[calc((100%-810px)/2-180px)]',
    'left-[calc((100%-810px)/2-270px)]',
    'left-[calc((100%-810px)/2-360px)]',
  ];

  return (
    <>
      <h2>Choose villain</h2>
      <div className="bg-warning h-[300px] w-[500px] flex items-center relative overflow-hidden">
        <div className={`${styles[villain]} flex items-center gap-5 absolute w-[810px] transition-all`}>
          {temp.map((item, index) => (
            <div
              key={index}
              className={`${villain === index ? ' w-[90px] h-[180px]' : 'w-[70px] h-[140px]'} bg-success transition-all`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <p>A continue Y boss info B back</p>
      <div className="flex gap-5 absolute bottom-[65px]">
        <Button onPress={() => villain && setVillain((e) => (e -= 1))}>{'<'}</Button>
        <Button onPress={() => villain < temp.length - 1 && setVillain((e) => (e += 1))}>{'>'}</Button>
        <Button>Next</Button>
      </div>
    </>
  );
};

export default Villains;
