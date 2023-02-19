import React from "react"
import { Link } from "gatsby"
import { MenuProps } from "@type/menu"
import Logo from "@components/Logo"
import Icon from "@components/Icon"

const Header = ({ menus }: { menus:Array<MenuProps> }) => (
  <nav className="px-4 py-0 md:px-8 md:py-2 w-full z-20 fixed top-0 bg-white shadow-sm">
      <div className="mx-auto flex">
          <Logo />
          <div className="hidden lg:flex items-center">
              {menus.map((menu: MenuProps, i: number) => (
                  <Link 
                      to={menu.link}
                      className="inline-block mr-10 font-normal text-sm text-gray-600"
                      key={i}
                  >
                    <Icon 
                        name={menu.name}
                    />
                  </Link>
              ))}
          </div>
      </div>
  </nav>
)

export default Header
