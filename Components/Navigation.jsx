import AuthenticationContext from "../Contexts/Authentication";
import {useContext} from 'react'
import styles from "../styles/SideBar.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";

const Navigation = () => {

  let {isLogged, userInfo} = useContext(AuthenticationContext);

  return (
    <div className="w-full">
      {
        isLogged ?
          <nav className="flex items-center w-full justify-between flex-wrap p-3">
            <div className="flex items-center flex-shrink-0 mr-6">
              <img className="h-8 w-8 rounded-full" width="40" height="40"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt=""/>
              Bonjour {userInfo.last_name} {userInfo.first_name}
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">

                <Link href="/my-appointments">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8]">
                    Mes Rendez-vous
                  </a>
                </Link>

                <Link href="/my-consultations">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8]">
                    Mes consultations
                  </a>
                </Link>

                <Link href="/my-account">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8]">
                    Mon Compte
                  </a>
                </Link>

                <Link href="/my-medical-file">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8]">
                    Mon Dossier Medical
                  </a>
                </Link>

                <Link href="/chat">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8]">
                    Chat
                  </a>
                </Link>

              </div>
            </div>
          </nav>
          : ""
      }
    </div>
  )
}

export default Navigation;
