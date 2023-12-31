
import styles from './navbar.module.css'
import Link from "next/link"
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href='/' className={styles.logo}>Blogger</Link>
      </div>
      <div className={styles.links}>

      {links.map((link) => (
        <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        </div>
      <button className={styles.logout}>Logout</button>
    </div>

  )
}

export default Navbar