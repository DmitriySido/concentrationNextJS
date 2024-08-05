"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import './SideNavigation.scss'

import HomeIcon from '../../../../public/navigation/icons-home.png'
import SettingIcon from '../../../../public/navigation/icons-settings.png'
import ProfileIcon from '../../../../public/navigation/icons-profile.png'
import TasksIcon from '../../../../public/navigation/icons-tasks.png'
import Image from "next/image"


const SideNavigation = () => {
  const pathname = usePathname(); // получаем текущий путь

  const noHeaderRoutes = ['/tasks/largerNumber', '/tasks/extraPiece', '/tasks/numberOfSquares',  '/tasks/restoreSequence'];
  const showHeader = !noHeaderRoutes.includes(pathname);

  const NavigationList = [
    { id: 1, title: 'Домой', path: '/', icon: HomeIcon },
    { id: 2, title: 'Задания', path: '/tasks', icon: TasksIcon },
    { id: 3, title: 'Профиль', path: '/profile', icon: ProfileIcon },
    { id: 4, title: 'Настройки', path: '/settings', icon: SettingIcon },
  ];

  return !showHeader ? null :(
    <div>
      <nav className='side-navigation inactive'>
        <ul>
          {
            NavigationList.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li className='side-navigation-item' key={link.id}>
                  <Link href={link.path} className={`${'side-navigation-link'} ${isActive ? 'active' : ''}`}>
                    {link.title}
                    <div className="img-wrapper">
                      <Image className="navigation-icon" src={link.icon} width={24} height={24} alt=""/>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      </div>
  )
}

export default SideNavigation;