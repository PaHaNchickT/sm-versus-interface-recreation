'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useState, type ReactElement } from 'react';

const Villains = (): ReactElement => {
  const [villain, setVillain] = useState(4);
  // const temp = [
  //   "bg-[url('/images/versus-art-scorpion.png')]",
  //   "bg-[url('/images/versus-art-hulk.png')]",
  //   "bg-[url('/images/versus-art-goblin.png')]",
  //   "bg-[url('/images/versus-art-unknown.png')]",
  //   "bg-[url('/images/versus-art-jug.png')]",
  //   "bg-[url('/images/versus-art-kraven.png')]",
  //   "bg-[url('/images/versus-art-cat.png')]",
  //   "bg-[url('/images/versus-art-carnage.png')]",
  //   "bg-[url('/images/versus-art-robot.png')]",
  // ];
  const temp = [
    '/images/versus-art-scorpion.png',
    '/images/versus-art-hulk.png',
    '/images/versus-art-goblin.png',
    '/images/versus-art-unknown.png',
    '/images/versus-art-jug.png',
    '/images/versus-art-kraven.png',
    '/images/versus-art-cat.png',
    '/images/versus-art-carnage.png',
    '/images/versus-art-robot.png',
  ];
  const styles = [
    'left-[calc((100%-840px)/2+360px)]',
    'left-[calc((100%-840px)/2+270px)]',
    'left-[calc((100%-840px)/2+180px)]',
    'left-[calc((100%-840px)/2+90px)]',
    'left-[calc((100%-840px)/2)]',
    'left-[calc((100%-840px)/2-90px)]',
    'left-[calc((100%-840px)/2-180px)]',
    'left-[calc((100%-840px)/2-270px)]',
    'left-[calc((100%-840px)/2-360px)]',
  ];

  return (
    <>
      <h2>Choose villain</h2>
      <div className="bg-[url('/images/modal-bg.jpg')] h-[300px] w-[500px]">
        <div className="w-full h-full [mask-image:url('/images/mask.png')] [mask-repeat:no-repeat] [mask-size:cover] [mask-position:center] overflow-hidden flex items-center relative">
          <div className={`${styles[villain]} flex items-center gap-5 absolute w-[840px] transition-all`}>
            {temp.map((item, index) => (
              <Image
                key={index}
                alt={`villain-${index}`}
                src={item}
                width={villain === index ? 120 : 70}
                height={villain === index ? 120 : 70}
                className="transition-all"
              />
            ))}
          </div>
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
