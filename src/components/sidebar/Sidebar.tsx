import { LuSmartphone } from 'react-icons/lu';
import { SidebarItem } from './SidebarItem';
import { TbShoppingBag } from 'react-icons/tb';
import { PiHeadphonesFill } from 'react-icons/pi';
import { MdOutlineMail } from 'react-icons/md';


const menuItem = [
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
        title: 'Audifonos',
        path: '/home/headphones'
    },
    {
        icon: <MdOutlineMail />,
        title: 'Contacto',
        path: '/contact'
    },
]

export const Sidebar = () => {
    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div className='flex flex-col h-full'>

                <ul className="space-y-2 tracking-wide mt-8">
                    {/* TODO: src/components <SidebarItem /> */}
                    {menuItem.slice(0, -1).map(item => (
                        <SidebarItem
                            key={item.path}
                            {...item} />
                    ))}
                </ul>
                <ul className="space-y-2 mt-auto">
                    <SidebarItem
                        key={menuItem[menuItem.length - 1].path}
                        {...menuItem[menuItem.length - 1]}
                    />
                </ul>
            </div>
        </aside>
    )
}
