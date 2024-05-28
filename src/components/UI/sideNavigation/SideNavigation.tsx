import Link from "next/link"

import styles from './SideNavigation.module.scss'

const SideNavigation = () => {
  return(
    <nav className={styles.sideNavigation}>
      <ul>
        <li className={styles.sideNavigationItem}>
          <Link className={styles.sideNavigationLink} href='/'>Дамой</Link>
        </li>
        <li className={styles.sideNavigationItem}>
          <Link className={styles.sideNavigationLink} href='/tasks'>Задания</Link>
        </li>
        <li className={styles.sideNavigationItem}>
          <Link className={styles.sideNavigationLink} href='/profile'>Профиль</Link>
        </li>
        <li className={styles.sideNavigationItem}>
          <Link className={styles.sideNavigationLink} href='/settings'>Настройки</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideNavigation