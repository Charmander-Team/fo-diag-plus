import Link from "next/link";
import {useRouter} from "next/router";
import styles from "../styles/SideBar.module.scss";
import {useContext} from "react";
import AuthenticationContext from "../Contexts/Authentication";

const SideBar = () => {

  const ROUTER = useRouter();
  let {userInfo, isLogged} = useContext(AuthenticationContext);
  console.log(userInfo)
  console.log(isLogged)

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
        <li className={`${ROUTER.pathname === "/" ? styles.active : ""} p-2`}>
          <Link href="/">
            <a>
              {/* <span className={styles.item}> */}
              ACCUEIL
              {/* </span> */}
            </a>
          </Link>
        </li>
        <li className={`${ROUTER.pathname === "/my-body" ? styles.active : ""} p-2`}>
          <Link href="/my-body">
            <a>MON CORPS</a>
          </Link>
        </li>
        <li className={`${ROUTER.pathname === "/shop" ? styles.active : ""} p-2`}>
          <Link href="/shop">
            <a>BOUTIQUE</a>
          </Link>
        </li>
        <li className={`${ROUTER.pathname === "/contact" ? styles.active : ""} p-2`}>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
        <li className={`${ROUTER.pathname === "/about" ? styles.active : ""} p-2`}>
          <Link href="/about">
            <a>A PROPOS</a>
          </Link>
        </li>
        {(userInfo.is_staff === true)  ?
          <li className="p-2">
              <a href="https://bo.diag-plus.tk">ADMIN</a>
          </li>
          :
          ""
        }
      </ul>
    </div>
  );
}

export default SideBar;
