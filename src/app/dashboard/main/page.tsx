import { Metadata } from 'next';

import { WidgetsGrid } from '@/common/components';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className='px-6 text-black'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>General Information</span>
      <WidgetsGrid />
    </div>
  );
}
