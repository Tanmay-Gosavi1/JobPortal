import React from 'react'
import {useNavigate , Link} from 'react-router-dom'
import {Briefcase} from 'lucide-react'
import {motion} from 'framer-motion'


const Header = () => {
    const isAuthenticated = true ;
    const user = { fullname : "Alex" , role : "employer"} ;
    const navigate = useNavigate() ;
  return <>
    <header>
        <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                {/* Logo */}
                <div className='flex items-center space-x-3'>
                    <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex justify-center items-center'>
                        <Briefcase className='w-5 h-5 text-white'/>
                    </div>
                    <span>JobPortal</span>
                </div>

                {/* Navlinks - hidden on mobile  */}
                <nav>
                    <Link to='/find-jobs'>Find Jobs</Link>
                    <Link></Link>
                </nav>
            </div>
        </div>
    </header>
  </>
}

export default Header