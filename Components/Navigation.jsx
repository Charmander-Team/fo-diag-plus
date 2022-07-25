import AuthenticationContext from "../Contexts/Authentication";
import {useContext} from 'react'
import Image from 'next/image'

const Navigation = () => {

    let { login } = useContext(AuthenticationContext);

    return (
        <div className="w-full">
            {
            login? 
            <nav className="flex items-center w-full justify-between flex-wrap p-3">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <Image className="h-8 w-8 rounded-full" width="40" height="40" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>                
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8] mr-4">
                        Rendez-vous
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8] mr-4">
                        Consultations
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8] mr-4">
                        Dossier
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#94a3b8] hover:text-[#6688b8]">
                        chat
                    </a>
                    </div>
                </div>
            </nav>
            :""
            }
        </div>
    )
}

export default Navigation;