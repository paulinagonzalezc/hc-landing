import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Hashconsole</Link>
      </div>

      <ul className={styles.navLinks}>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#templates">Templates</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="#docs">Docs</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <div className={styles.actions}>
        <button className={styles.login}>Login</button>
        <button className={styles.getStarted}>Get Started</button>
      </div>
    </nav>
  )
}
