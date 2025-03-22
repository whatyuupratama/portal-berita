import React from 'react';
import { Tag as ItemTag } from '../../api/data';
import FocusCardsDemo from '@/pages/components/fragments/FocusCardsDemo';
const Tag = () => {
  const { title, description } = ItemTag[0];
  return (
    <div className='w-screen h-auto px-26 mt-26 sm:px-8 md:px-16 lg:px-28'>
      <div className='w-full h-auto py-10 flex justify-center rounded-xl  border border-dashed border-zinc-300'>
        <div className='flex flex-col w-1/2 text-center gap-2'>
          <p className='text-xl uppercase text-zinc-500'>{title}</p>
          <span className='text-4xl font-semibold'>{description}</span>
        </div>
      </div>
      <div className=' flex flex-col'>
        <span className=' flex justify-center py-10 text-4xl font-bold w-1/3'>
          Berita Terkini
        </span>
        <FocusCardsDemo />
      </div>
    </div>
  );
};

export default Tag;
