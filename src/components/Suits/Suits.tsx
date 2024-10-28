'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState, type ReactElement } from 'react';

import { COMIC_DATA, COMIC_STYLES, CONTROL_PANEL_COMIC } from '@/constants/constants';

import ControlPanel from '../ControlPanel/ControlPanel';

const Suits = (props: {
  setCurrentPage: Dispatch<SetStateAction<string>>;
  setOpacity: Dispatch<SetStateAction<string>>;
}): ReactElement => {
  const [opacity, setOpacity] = useState('opacity-100');
  const [cover, setCover] = useState(0);

  useEffect(() => {
    setOpacity('opacity-100');
  }, [cover]);

  return (
    <>
      <h2 className="text-2xl font-black">Choose story</h2>
      <div className="bg-[url('/images/modal-bg.jpg')] h-[300px] w-[500px] flex justify-between px-10 gap-5">
        <div className={`transition-all ${opacity} my-10 w-[260px] text-xs flex flex-col justify-between text-justify`}>
          <p className="font-black">{COMIC_DATA[cover].name}</p>
          <div>
            <p className="flex gap-3">
              <span className="font-black">Writer:</span>
              {COMIC_DATA[cover].writer}
            </p>
            <p className="flex gap-3">
              <span className="font-black">Penciller:</span>
              {COMIC_DATA[cover].penciller}
            </p>
          </div>
          <p>
            <span className="font-black mr-3">Synopsis:</span>
            {COMIC_DATA[cover].synopsis}
          </p>
        </div>
        <div className="w-[120px] h-full overflow-hidden flex items-center justify-center relative">
          <p
            className={`absolute z-[1] top-5 text-3xl [text-shadow:0_0_5px_black] rotate-90 transition-all ${!cover ? 'opacity-0' : 'opacity-100'}`}
          >
            {'<'}
          </p>
          <p
            className={`absolute z-[1] bottom-5 text-3xl [text-shadow:0_0_5px_black] rotate-90 transition-all ${cover >= COMIC_DATA.length - 1 ? 'opacity-0' : 'opacity-100'}`}
          >
            {'>'}
          </p>
          <div className="w-full h-full [mask-image:url('/images/mask-vert.png')] [mask-repeat:no-repeat] [mask-size:cover]">
            <div
              className={`${COMIC_STYLES[cover]} right-0 flex flex-col items-center gap-5 absolute w-[120px] h-[441px] transition-all`}
            >
              {COMIC_DATA.map((item, index) => (
                <Image
                  key={index}
                  alt={`villain-${index}`}
                  src={item.img}
                  width={cover === index ? 120 : 70}
                  height={cover === index ? 185 : 108}
                  className="transition-all"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ControlPanel panelData={CONTROL_PANEL_COMIC} />
      <div className="flex gap-5 absolute bottom-[65px]">
        <Button
          onPress={() => {
            if (cover) {
              setOpacity('opacity-0');
              setTimeout(() => {
                setCover((e) => (e -= 1));
              }, 150);
            }
          }}
        >
          {'<'}
        </Button>
        <Button
          onPress={() => {
            if (cover < COMIC_DATA.length - 1) {
              setOpacity('opacity-0');
              setTimeout(() => {
                setCover((e) => (e += 1));
              }, 150);
            }
          }}
        >
          {'>'}
        </Button>
        <Button
          onPress={() => {
            props.setOpacity('opacity-0');
            setTimeout(() => {
              props.setCurrentPage('suit');
            }, 300);
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Suits;
