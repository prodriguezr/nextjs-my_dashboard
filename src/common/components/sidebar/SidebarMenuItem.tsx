'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const SidebarMenuItem = ({ href, icon, title, subtitle }: Props) => {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={`
            w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150
            ${currentPath === href ? 'bg-blue-800' : ''}
          `}
    >
      <div>
        <div>{icon}</div>
      </div>
      <div className='flex flex-col'>
        <span className='text-lg font-bold leading-5 text-white'>{title}</span>
        <span className='hidden text-sm text-white/50 md:block'>
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
