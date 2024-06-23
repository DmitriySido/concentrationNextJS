"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import styles from './SideNavigation.module.scss'

const SideNavigation = () => {
  const pathname = usePathname(); // получаем текущий путь

  const noHeaderRoutes = ['/tasks/largerNumber', '/tasks/extraPiece', '/tasks/numberOfSquares',  '/tasks/restoreSequence'];
  const showHeader = !noHeaderRoutes.includes(pathname);

  const NavigationList = [
    { id: 1, title: 'Домой', path: '/' },
    { id: 2, title: 'Задания', path: '/tasks' },
    { id: 3, title: 'Профиль', path: '/profile' },
    { id: 4, title: 'Настройки', path: '/settings' },
  ];

  return !showHeader ? null :(
    <nav className={styles.sideNavigation}>
      <ul>
        {
          NavigationList.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li className={styles.sideNavigationItem} key={link.id}>
                <Link href={link.path} className={`${styles.sideNavigationLink} ${isActive ? styles.active : ''}`}>
                  {link.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default SideNavigation;