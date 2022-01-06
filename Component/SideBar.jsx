import Link from "next/link";

const SideBar = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>ACCUEIL</a>
                </Link>
            </li>
            <li>
                <Link href="/my-body">
                    <a>MON CORPS</a>
                </Link>
            </li>
            <li>
                <Link href="/shop">
                    <a>BOUTIQUE</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>CONTACT</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>A PROPOS</a>
                </Link>
            </li>
        </ul>
    </nav>
);

export default SideBar;
