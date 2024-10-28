'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState, type ReactElement } from 'react';

import { CONTROL_PANEL_SUITS, SUIT_STATS, SUITS_DATA, SUITS_STYLES } from '@/constants/constants';

import ControlPanel from '../ControlPanel/ControlPanel';

const Suits = (props: {
  setCurrentPage: Dispatch<SetStateAction<string>>;
  setOpacity: Dispatch<SetStateAction<string>>;
}): ReactElement => {
  const [opacity, setOpacity] = useState('opacity-100');
  const [suit, setSuit] = useState(4);

  useEffect(() => {
    setOpacity('opacity-100');
  }, [suit]);

  return (
    <>
      <h2 className="text-2xl font-black">Choose suit</h2>
      <div className="bg-[url('/images/modal-bg.jpg')] h-[300px] w-[500px] relative flex items-center">
        <p
          className={`absolute z-[1] left-5 text-3xl [text-shadow:0_0_5px_black] transition-all ${!suit ? 'opacity-0' : 'opacity-100'}`}
        >
          {'<'}
        </p>
        <p
          className={`absolute z-[1] right-5 text-3xl [text-shadow:0_0_5px_black] transition-all ${suit >= SUITS_DATA.length - 1 ? 'opacity-0' : 'opacity-100'}`}
        >
          {'>'}
        </p>
        <div className={`${opacity} transition-all absolute left-5 top-5 w-[233px] flex flex-col gap-3 z-[1]`}>
          <p className="font-black">{SUITS_DATA[suit].name}</p>
          <div className="flex w-full justify-between gap-5">
            <div className="flex flex-col gap-2">
              {SUIT_STATS.map((stat, index) => (
                <div key={index}>
                  <p className="text-xs">{stat}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 w-full">
              {SUITS_DATA[suit].stats.map((data, index) => (
                <div key={index}>
                  <div className="bg-black w-full h-[16px]">
                    <div className={`${data} bg-[#c30000] h-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-5 w-full h-full [mask-image:url('/images/mask.png')] [mask-repeat:no-repeat] [mask-size:cover] [mask-position:center] overflow-hidden flex items-end relative">
          <div className={`${SUITS_STYLES[suit]} flex items-end gap-5 absolute w-[519px] h-[120px] transition-all`}>
            {SUITS_DATA.map((item, index) => (
              <Image
                key={index}
                alt={`suit-${index}`}
                src={item.img}
                width={250}
                height={250}
                className={`transition-all h-auto ${suit === index ? 'w-[117px]' : 'w-[47px]'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <ControlPanel panelData={CONTROL_PANEL_SUITS} />
      <div className="flex gap-5 absolute bottom-[65px]">
        <Button
          onPress={() => {
            if (suit) {
              setOpacity('opacity-0');
              setTimeout(() => {
                setSuit((e) => (e -= 1));
              }, 150);
            }
          }}
        >
          {'<'}
        </Button>
        <Button
          onPress={() => {
            if (suit < SUITS_DATA.length - 1) {
              setOpacity('opacity-0');
              setTimeout(() => {
                setSuit((e) => (e += 1));
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
