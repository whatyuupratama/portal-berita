import { Globe } from '@/components/magicui/globe';

export default function GlobeDemo() {
  return (
    <div className='relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg px-40 pb-40 pt-8 md:pb-60'>
      <Globe className='top-28' />
      <div className='pointer-events-none absolute inset-0 h-full ' />
      <span className='text-4xl font-bold text-white'>Berita Terkini</span>
    </div>
  );
}
