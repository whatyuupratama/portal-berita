import React from 'react';

import { TextReveal } from '@/components/magicui/text-reveal';

const Texts = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-screen h-[50vh] py-10'>
      <span className='text-3xl italic text-green-900'>Cat</span>
      <span className='text-5xl font-extrabold uppercase text-green-900'>
        Kitty
      </span>
      <TextReveal className='w-1/2 '>
        Kucing, disebut juga sebagai kucing domestik[4][5] atau kucing rumah
        (nama ilmiah: Felis silvestris catus atau Felis catus), adalah sejenis
        mamalia karnivora dari keluarga Felidae. Kata kucing biasanya merujuk
        kepada kucing yang telah dijinakkan,[6] tetapi bisa juga merujuk kepada
        kucing besa seperti singa dan harimau yang juga termasuk jenis kucing.
      </TextReveal>
    </div>
  );
};

export default Texts;
