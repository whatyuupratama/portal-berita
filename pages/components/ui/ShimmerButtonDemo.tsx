import { ShimmerButton } from '@/components/magicui/shimmer-button';

type Props = {
  children?: React.ReactNode;
  value: string;
};

export function ShimmerButtonDemo({ value }: Props) {
  return (
    <ShimmerButton className='shadow-2xl'>
      <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
        {value}
      </span>
    </ShimmerButton>
  );
}
