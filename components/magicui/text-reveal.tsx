'use client';

import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from 'react';
import { poppins } from '@/pages/components/fonts/poppins';

import { cn } from '@/lib/utils';

export interface TextRevealProps extends ComponentPropsWithoutRef<'div'> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== 'string') {
    throw new Error('TextReveal: children must be a string');
  }

  const words = children.split(' ');

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[300vh]', className)}>
      <div>
        <span
          ref={targetRef}
          className={`flex flex-wrap p-5 text-xl  text-black/20 dark:text-white/20 md:p-8 md:text-xl lg:p-10 lg:text-xl xl:text-xl  xl:font-bold text-justify ${poppins.className}`}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[end, start]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='xl:lg-3 relative mx-1 lg:mx-1.5'>
      <span className='absolute opacity-30'>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={'text-black dark:text-white'}
      >
        {children}
      </motion.span>
    </span>
  );
};
