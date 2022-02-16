import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DropdownIcon, IIcon } from 'icons'
import * as Icons from 'icons'
import { Transition } from '@roketid/windmill-react-ui'
import { IRoute, routeIsActive } from 'routes/sidebar'
import SidebarContext from 'context/SidebarContext'

function Icon({ icon, ...props }: IIcon) {
  // @ts-ignore
  const _Icon = Icons[icon]
  return <_Icon {...props} />
}

interface ISidebarSubmenu {
  route: IRoute
  linkClicked: () => void
}

function SidebarSubmenu({ route, linkClicked }: ISidebarSubmenu) {
  const { pathname } = useRouter()
  const { saveScroll } = useContext(SidebarContext)

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(
    route.routes
    ? route.routes.filter((r) => {
        return routeIsActive(pathname, r)
      }).length > 0
    : false
  )

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen)
  }

  return (
    <li className="relative px-6 py-3" key={route.name}>
      {isDropdownMenuOpen && (
        <span
          className='absolute h-12 inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
          aria-hidden='true'
        ></span>
      )}
      <button
        className={`inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
          isDropdownMenuOpen
            ? 'dark:text-gray-100 text-gray-800'
            : ''
        }`}
        onClick={handleDropdownMenuClick}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center">
          
          <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon || ""} />
          <span className="ml-4">{route.name}</span>
        </span>
        <DropdownIcon className={`w-4 h-4 ${isDropdownMenuOpen ? `transform rotate-180` : ``}`} aria-hidden="true" />
      </button>
      <Transition
        show={isDropdownMenuOpen}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-25 max-h-0"
        enterTo="opacity-100 max-h-xl"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 max-h-xl"
        leaveTo="opacity-0 max-h-0"
      >
        <ul
          className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
          aria-label="submenu"
        >
          {
            route.routes && route.routes.map((r) => (
              <li
                className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                key={r.name}
              >
                <Link
                  href={r.path || ""}
                  scroll={false}
                >
                  <a
                    className={`w-full inline-block ${
                      routeIsActive(pathname, r)
                      ? 'dark:text-gray-100 text-gray-800'
                      : ''
                    }`}
                    onClick={linkClicked}
                  >
                    {r.name}
                  </a>
                </Link>
              </li>
            ))
          }
        </ul>
      </Transition>
    </li>
  )
}

export default SidebarSubmenu
