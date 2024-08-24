'use client';

import { Sidebar } from "@/components/sidebar";
import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaList, FaWpforms } from "react-icons/fa";
import { usePathname } from "next/navigation";  // Importa el hook usePathname

const menuItems = [
    {
        icon: <FaWpforms />,
        title: 'Formulario',
        path: '/admin'
    },
    {
        icon: <FaList />,
        title: 'Lista de Productos',
        path: '/admin/products'
    },
];

export default function AdminLayout({ children }: { children: React.ReactNode; }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

    return (
        <>
            <div className="w-full flex flex-row justify-start relative z-20">
                <button onClick={toggleSidebar} className="w-12 h-16 ml-5 lg:hidden">
                    <CiMenuBurger size={30} />
                </button>
            </div>

            <Sidebar menuItems={menuItems} isOpen={isSidebarOpen} />
            {children}
        </>
    );
}
