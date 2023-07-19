'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import type { IMenuItem } from '../interfaces';

const SidebarMenuItem: React.FC<IMenuItem> = ({
  path,
  icon,
  title,
  subtitle,
}) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`inline-flex items-center w-full px-2 py-3 space-x-2 transition duration-150 ease-linear border-b border-slate-700 hover:bg-white/5 ${
        path === currentPath ? 'bg-blue-800' : ''
      }`}
    >
      <div>{icon}</div>
      <div className='flex flex-col'>
        <span className='text-lg font-bold leading-5 text-white'>{title}</span>
        <span className='hidden text-sm text-white/50 md:block'>
          {subtitle}
        </span>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
