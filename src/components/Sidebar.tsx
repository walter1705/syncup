'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import Box from './Box';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/dashboard/search',
        href: '/dashboard',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/dashboard/search',
        href: '/search',
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar - lado izquierdo */}
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>Sidebar Navigation</Box>
        <Box className="flex flex-col gap-y-2 px-5 py-4">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </Box>
        <Box className="overflow-y-auto h-full">Song Library</Box>
      </div>

      {/* Contenido principal - lado derecho */}
      <main className="flex-1 h-full overflow-y-auto bg-[var(--color-background-content)]">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
