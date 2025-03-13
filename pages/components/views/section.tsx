import Image from 'next/image';
// import Sosmed from './ui/sosmed';
// import LikeorNo from './ui/likeorno';
import Link from 'next/link';
import { poppins } from '../../components/fonts/poppins';
import useFetchNews from '../hooks/useFetchNews';
import typesApi from '../../types/typesApi';

const SectionComponent = () => {
  const { data, loading, error } = useFetchNews();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredData = data.filter(
    (item): item is typesApi => item.id !== undefined
  );
  const item = filteredData.find((item) => item.id === 1);
  const title = item?.title || 'Loading...';
  const des = item?.smalldesc || 'Loading...';
  const image = item?.imageUrl || '';
  const smalltag = item?.smalltag || '';

  return (
    <div className='w-screen h-auto'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-28'>
        <div className='flex gap-5 justify-between'>
          <span
            className={`${poppins.className} text-5xl min-w-3xl font-bold  w-2/3`}
          >
            {title}
          </span>
        </div>
        <div className='relative mt-10 cursor-pointer'>
          <Link href={`/news/${item?.id}`}>
            <Image
              src={image}
              alt='tema'
              className='w-1/2 h-[500px] mt-10 rounded-2xl cursor-pointer object-cover opacity-80'
              width={1000}
              height={700}
            />
          </Link>
          <p className={`${poppins.className} pt-2 text-sm`}>{des}</p>

          <div className='absolute top-0 left-0 p-10'>
            <p className='text-2xl font-semibold text-white'>{smalltag}</p>
          </div>
          <div className='absolute bottom-0 left-0 right-0 p-10 flex justify-start'>
            {/* <Sosmed id={1} /> */}
            <div className='absolute bottom-0 right-20 -top-10'>
              {/* <LikeorNo /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
