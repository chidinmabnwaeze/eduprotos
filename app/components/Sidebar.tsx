import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboardIcon, BookIcon } from "lucide-react";


const sidebarMenu = [
    {
        name: "Dashboard",
        icon: <LayoutDashboardIcon />,
        href: "/dashboard",
    },
    {
        name: "Courses",
        icon: <BookIcon />,
        href: "/courses",
    },
]

export default function Sidebar() {
    return (
        <div className="flex flex-col  w-1/5 p-8 h-screen bg-[#5955B3]"  >
         
         <Image src="/logo.png" alt="logo" width={100} height={100} />
            <div className="flex flex-col p-4 gap-4">
                {sidebarMenu.map((menuItem :{name: string, href: string, icon: ReactElement}) => (
                    <Link className="flex items-center gap-2" href={menuItem.href}>{menuItem.icon} {menuItem.name}</Link>
                ))} </div>
        </div>
    )
}