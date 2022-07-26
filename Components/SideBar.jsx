import Link from "next/link";
import {useRouter} from "next/router";
import styles from "../styles/SideBar.module.scss";

const SideBar = () => {

  const router = useRouter();

  return (
    <div className={styles.navigation}>
      <ul className="grid gap-4">
        <li>
          <img
            src='/favicon.png'
            alt='logo diag-plus'
            width='50'
            height='50'
          />
        </li>
        <li className={`${router.pathname === "/" ? styles.active : ""} p-2`}>
          <Link href="/">
            <a>
              {/* <span className={styles.item}> */}
              ACCUEIL
              {/* </span> */}
            </a>
          </Link>
        </li>
        <li className={`${router.pathname === "/my-body" ? styles.active : ""} p-2`}>
          <Link href="/my-body">
            <a>MON CORPS</a>
          </Link>
        </li>
        <li className={`${router.pathname === "/shop" ? styles.active : ""} p-2`}>
          <Link href="/shop">
            <a>BOUTIQUE</a>
          </Link>
        </li>
        <li className={`${router.pathname === "/contact" ? styles.active : ""} p-2`}>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
        <li className={`${router.pathname === "/about" ? styles.active : ""} p-2`}>
          <Link href="/about">
            <a>A PROPOS</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
