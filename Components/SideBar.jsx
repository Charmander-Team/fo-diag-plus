import Link from "next/link";
import { useRouter } from "next/router"

const SideBar = () => {

    const router = useRouter();
    const active = "bg-white text-slate-400 rounded-l-lg";

 return (
    <>
        <img src="/favicon.png" alt="logo"/>
        <ul className="grid gap-4">
            <li className={router.pathname == "/" ? active : ""}>
                <Link href="/">
                    <a>ACCUEIL</a>
                </Link>
            </li>
            <li className={router.pathname == "/my-body" ? active : ""}>
                <Link href="/my-body">
                    <a>MON CORPS</a>
                </Link>
            </li>
            <li className={router.pathname == "/shop" ? active : ""}>
                <Link href="/shop">
                    <a>BOUTIQUE</a>
                </Link>
            </li>
            <li className={router.pathname == "/contact" ? active : ""}>
                <Link href="/contact">
                    <a>CONTACT</a>
                </Link>
            </li>
            <li className={router.pathname == "/about" ? active : ""}>
                <Link href="/about">
                    <a>A PROPOS</a>
                </Link>
            </li>
        </ul>
    </>
);
}

export default SideBar;
