import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import Backlink from '../../components/views/ui/linkback';
import { poppins } from '../components/fonts/poppins';
import useFetchNews from '../components/hooks/useFetchNews';
import { typesApi } from '../../types/typesApi';
import { motion } from 'framer-motion';
import Head from 'next/head';

const Singlenews = () => {
  const router = useRouter();
  const { newsid } = router.query;
  const { data, loading } = useFetchNews();

  if (loading) return <div>Loading...</div>;

  const item = data.find(
    (item): item is typesApi => item.id === Number(newsid)
  );

  if (!item) return <div>News not found</div>;

  const containerVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const formatDescription = (description: string) => {
    const lines = description.split('\n');
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {(index + 1) % 3 === 0 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <Head>
        <title>{item.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='./iconhead.png' />
      </Head>
      <div className='p-10'>{/* <Backlink text='Back' /> */}</div>
      <main
        className={`w-screen h-auto flex items-center justify-center py-20 ${poppins.className}`}
      >
        <motion.article
          key={Array.isArray(newsid) ? newsid.join('') : newsid}
          className='flex flex-col items-center gap-3'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <header className='flex gap-2 justify-center items-center font-medium text-gray-500 italic'>
            <span className='bg-[#F3FCD2] p-2 rounded-2xl'>Popular Post</span>
            <time dateTime={item.date}>{item.date}</time>
          </header>

          <h1 className='text-3xl font-medium text-center w-2/3'>
            {item.title}
          </h1>
          <p className='w-4/5 text-center text-sm text-zinc-500'>
            {item.smalldesc}
          </p>

          <motion.div
            className='relative w-full max-w-3xl aspect-video'
            variants={imageVariants}
            initial='hidden'
            animate='visible'
          >
            <Image
              src={item.imageUrl!}
              alt='Preview of the article'
              fill
              className='object-cover rounded-xl'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority
            />
          </motion.div>
          <section
            className={`flex gap-2 justify-start w-9/12 text-xs ${poppins.className}`}
          >
            <div className='flex flex-col gap-3'>
              <h2 className='text-sm font-semibold'>Here is another preview</h2>
              <p className='text-zinc-500 text-justify indent-10 '>
                {formatDescription(item.description || '')}
              </p>
            </div>
          </section>
        </motion.article>
      </main>
    </>
  );
};

export default Singlenews;
