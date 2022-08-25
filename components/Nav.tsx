import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { routePermission } from '../models/RoutesType'
// import { useSession } from "next-auth/react"

const Nav = ({ permissions }: { permissions: routePermission }) => {
    // const { data } = useSession()

    const router = useRouter()
    let isLoggedIn = null
    if (typeof window !== 'undefined') {
        isLoggedIn = localStorage.getItem('user-token')
    }

    const signOut = () => {
        console.log("INK")
        localStorage.clear();
        router.push('/')
    }

    return (
        <nav className='header'>
            <h1 className='logo'>
                <a href='#'>NextAuth</a>
            </h1>
            <ul className={`main-nav `}>
                {
                    permissions.read && isLoggedIn &&
                    <li>
                        <Link href='/list'>
                            <a>List</a>
                        </Link>
                    </li>
                }

                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>


                {
                    !isLoggedIn &&
                    (
                        <li>
                            <Link href='/login'>
                                <a>
                                    Sign In
                                </a>
                            </Link>
                        </li>
                    )}
                {
                    isLoggedIn &&
                    (
                        <li onClick={() => { signOut() }}>
                            {/* <Link href='' > */}
                            <a>
                                Sign Out
                            </a>
                            {/* </Link> */}
                        </li>
                    )}
            </ul>
        </nav>

    )
}

export default Nav