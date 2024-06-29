'use client'

import React, { useState } from 'react';
import { Sidebar, TopMenu } from '@/components/sidebar';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] flex flex-col">
        <TopMenu toggleSidebar={toggleSidebar} />
        <div className="px-6 pt-6 flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}
