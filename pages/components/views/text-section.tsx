import React from 'react';

import { TextReveal } from '@/components/magicui/text-reveal';

const Texts = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-screen h-[50vh] py-10'>
      <span className='text-3xl italic text-green-900'>Wisata</span>
      <span className='text-5xl font-extrabold uppercase text-green-900'>
        Indonesia
      </span>
      <TextReveal className='max-w-5xl text-xl '>
        Indonesia adalah negara dengan keindahan alam yang luar biasa. Dari
        pantai yang eksotis hingga pegunungan yang megah, setiap sudutnya
        menawarkan pengalaman yang tak terlupakan. Jelajahi Bali dengan budaya
        yang kaya, atau nikmati ketenangan alam di Yogyakarta. Tak ketinggalan,
        pulau Komodo dengan kehidupan satwa liar yang langka, serta Raja Ampat
        yang terkenal dengan keindahan bawah lautnya yang mempesona. Setiap
        perjalanan di Indonesia adalah petualangan yang penuh warna!
      </TextReveal>
    </div>
  );
};

export default Texts;
