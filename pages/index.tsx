import GlobeDemo from '@/pages/components/fragments/GlobeDemo';
import Head from 'next/head';
import Singlea from './components/views/page';
import Texts from './components/views/text-section';

export default function Home() {
  return (
    <>
      <Head>
        <title>Berita</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='./iconhead.png' />
      </Head>
      <div className='flex justify-center bg-[#493D9E] h-[50vh] w-screen'>
        <GlobeDemo />
      </div>
      <Texts />
      <Singlea />
    </>
  );
}
