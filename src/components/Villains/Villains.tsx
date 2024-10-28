'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { useState, type ReactElement } from 'react';

import { CONTROL_PANEL_VILLAINS, VILLAINS_PATH, VILLAINS_STYLES } from '@/constants/constants';

import ControlPanel from '../ControlPanel/ControlPanel';

const Villains = (props: { setCurrentPage: Dispatch<SetStateAction<string>> }): ReactElement => {
  const [villain, setVillain] = useState(4);

  return (
    <>
      <h2 className="text-2xl font-black">Choose villain</h2>
      <div className="bg-[url('/images/modal-bg.jpg')] h-[300px] w-[500px] relative flex items-center">
        <p
          className={`absolute z-[1] left-5 text-3xl [text-shadow:0_0_5px_black] transition-all ${!villain ? 'opacity-0' : 'opacity-100'}`}
        >
          {'<'}
        </p>
        <p
          className={`absolute z-[1] right-5 text-3xl [text-shadow:0_0_5px_black] transition-all ${villain >= VILLAINS_PATH.length - 1 ? 'opacity-0' : 'opacity-100'}`}
        >
          {'>'}
        </p>
        <div className="w-full h-full [mask-image:url('/images/mask.png')] [mask-repeat:no-repeat] [mask-size:cover] [mask-position:center] overflow-hidden flex items-center relative">
          <div className="absolute w-[3px] h-1/5 bg-[#c30000] left-[calc((100%-3px)/2)] top-0 z-[1]"></div>
          <div className="absolute w-[3px] h-1/5 bg-[#c30000] left-[calc((100%-3px)/2)] bottom-0 z-[1]"></div>
          <div className={`${VILLAINS_STYLES[villain]} flex items-center gap-5 absolute w-[840px] transition-all`}>
            {VILLAINS_PATH.map((item, index) => (
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
      <ControlPanel panelData={CONTROL_PANEL_VILLAINS} />
      <div className="flex gap-5 absolute bottom-[65px]">
        <Button onPress={() => villain && setVillain((e) => (e -= 1))}>{'<'}</Button>
        <Button onPress={() => villain < VILLAINS_PATH.length - 1 && setVillain((e) => (e += 1))}>{'>'}</Button>
        <Button onPress={() => props.setCurrentPage('location')}>Next</Button>
      </div>
    </>
  );
};

export default Villains;
