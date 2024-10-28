'use client';

import Image from 'next/image';
import { type ReactElement } from 'react';

import type { CONTROL_PANEL_COMIC, CONTROL_PANEL_VILLAINS } from '@/constants/constants';

const ControlPanel = (props: {
  panelData: typeof CONTROL_PANEL_COMIC | typeof CONTROL_PANEL_VILLAINS;
}): ReactElement => {
  return (
    <div className="flex gap-10 relative">
      <div className="absolute w-full h-full bg-gradient-to-r from-[#272a29] via-[#7c7c7c] to-[#272a29] [mask-image:url('/images/mask.png')] [mask-repeat:no-repeat] [mask-size:cover]"></div>
      {props.panelData.map((item, index) => (
        <div key={index} className="flex gap-3 items-center relative z-[1]">
          <Image
            src={item.img}
            width={24}
            height={24}
            alt={`button-${index}`}
            className="shadow-[0_0_2px_1px_white] rounded-full"
          />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ControlPanel;
