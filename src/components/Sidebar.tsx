import Image from 'next/image';
import {
  IoBrowsersOutline,
  IoCalculatorOutline,
  IoFootballOutline,
  IoLogoReact,
} from 'react-icons/io5';
import SidebarMenuItem from './SidebarMenuItem';
import type { IMenuItem } from '../interfaces';

const menuItems: IMenuItem[] = [
  {
    path: '/dashboard/main',
    title: 'Dashboard',
    subtitle: 'Visualization',
    icon: <IoBrowsersOutline size={40} />,
  },
  {
    path: '/dashboard/counter',
    title: 'Counter',
    subtitle: 'Client side counter',
    icon: <IoCalculatorOutline size={40} />,
  },
  {
    path: '/dashboard/pokemons',
    title: "Pokemon's",
    subtitle: 'Static generation',
    icon: <IoFootballOutline size={40} />,
  },
];

const Sidebar = () => {
  return (
    <div
      id='menu'
      style={{ width: '400px' }}
      className='left-0 z-10 w-64 min-h-screen overflow-y-scroll bg-gray-900 text-slate-300'
    >
      <div id='logo' className='px-6 my-4'>
        <h1 className='flex items-center text-lg font-bold text-white md:text-2xl'>
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
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
            />
          </span>
          <span className='text-sm font-bold md:text-base'>
            Pablo Rodríguez
          </span>
        </a>
      </div>
      <div id='nav' className='w-full px-6'>
        {menuItems.map(({ icon, title, subtitle, path }) => (
          <SidebarMenuItem
            key={path}
            path={path}
            title={title}
            subtitle={subtitle}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
