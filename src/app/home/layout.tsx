'use client';

import React, { useEffect, useState } from 'react';
import { Sidebar, TopMenu } from '@/components/sidebar';
import { LuSmartphone } from 'react-icons/lu';
import { TbShoppingBag } from 'react-icons/tb';
import { PiHeadphonesFill } from 'react-icons/pi';
import { MdOutlineMail } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    icon: <LuSmartphone />,
    title: 'Fundas',
    path: '/home/cases'
  },
  {
    icon: <TbShoppingBag />,
    title: 'Accesorios',
    path: '/home/accesories'
  },
  {
    icon: <PiHeadphonesFill />,
    title: 'Audífonos',
    path: '/home/headphones'
  },
  {
    icon: <MdOutlineMail />,
    title: 'Contacto',
    path: '/home/contact'
  },
];

export default function HomeLayout({ children }: { children: React.ReactNode; }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} menuItems={menuItems} />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] flex flex-col">
        <TopMenu toggleSidebar={toggleSidebar} />
        <div className="px-6 pt-6 flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}
