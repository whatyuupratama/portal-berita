import React from 'react';
import Image from 'next/image';

type CustomImageProps = {
  src: string;
  width: number;
  height: number;
  className: string;
};
const CustomImage = ({ src, width, height, className }: CustomImageProps) => {
  return (
    <div className='w-screen h-auto bg-red-500'>
      <div className='flex w-full h-full'>
        <span className=''>
          <Image
            src={src}
            width={width}
            height={height}
            alt={src || 'Image'}
            className={className}
          />
        </span>
      </div>
    </div>
  );
};

export default CustomImage;
