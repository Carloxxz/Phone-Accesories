import React from 'react';
import { SidebarItem } from './SidebarItem';

interface MenuItemProps {
    icon: React.ReactNode;
    title: string;
    path: string;
}

type SidebarProps = {
    isOpen?: boolean;
    menuItems?: MenuItemProps[];
};

export const Sidebar = ({ isOpen = false, menuItems = [] }: SidebarProps) => {
    const hasMenuItems = menuItems.length > 0;
    return (
        <aside className={`fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition-transform duration-300 md:w-4/12 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ${isOpen ? 'transform-none' : '-translate-x-full lg:translate-x-0'}`}>
            <div className='flex flex-col h-full'>
                <ul className={`space-y-2 tracking-wide ${isOpen ? 'mt-20' : 'mt-8 '}`}>
                    {hasMenuItems && menuItems.slice(0, -1).map(item => (
                        <SidebarItem key={item.path} {...item} />
                    ))}
                </ul>
                <ul className="space-y-2 mt-auto">
                    {hasMenuItems && menuItems.length > 0 && (
                        <SidebarItem key={menuItems[menuItems.length - 1].path} {...menuItems[menuItems.length - 1]} />
                    )}
                </ul>
            </div>
        </aside>
    );
};
