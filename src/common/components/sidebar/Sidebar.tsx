import Image from 'next/image';
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
  IoLogoReact,
} from 'react-icons/io5';

import { SidebarMenuItem } from './SidebarMenuItem';
import { MenuItem } from '@/common/interfaces';

const menuItems: MenuItem[] = [
  {
    href: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualización',
  },
  {
    href: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Contador Client Side',
  },
  {
    href: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Generación Estática',
  },
  {
    href: '/dashboard/favorites',
    icon: <IoHeartOutline size={40} />,
    title: 'Favoritos',
    subtitle: 'Global State',
  },
];

export const Sidebar = () => {
  return (
    <div
      id='menu'
      style={{ width: '400px' }}
      className='left-0 z-10 w-64 min-h-screen overflow-y-scroll bg-gray-900 text-slate-300'
    >
      <div id='logo' className='px-6 my-4'>
        <h1 className='flex items-center text-lg font-bold text-white md:text-2xl'>
          <IoLogoReact className='mr-2' />
          <span> Dash</span>
          <span className='text-blue-500'>8</span>.
        </h1>
        <p className='text-sm text-slate-500'>
          Manage your actions and activities
        </p>
      </div>

      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex items-center space-x-2'>
          <span>
            <Image
              className='w-8 h-8 rounded-full'
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
              alt='User avatar'
              width={50}
              height={50}
              priority
            />
          </span>
          <span className='text-sm font-bold md:text-base'>Jonas Harris</span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
};
