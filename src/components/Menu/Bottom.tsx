import React from "react"
import { MenuProps } from "@type/menu"
import { Link } from "gatsby"
import Icon from "@components/Icon"

const BottomNavigation = ({menus}: { menus:Array<MenuProps> }) => (
    <nav className="flex items-center justify-between fixed bg-white border-t bottom-0 w-full z-30 py-4 md:py-5 px-6 md:px-8 lg:hidden">
        {menus.map((menu: MenuProps, i: number) => (
            <Link 
                to={menu.link}
                className="inline-block font-normal md:font-normal text-xs md:text-sm"
                key={i}
            >
                <Icon 
                    name={menu.name} 
                    area="bottom"
                />
            </Link>
        ))}
    </nav>
)

export default BottomNavigation