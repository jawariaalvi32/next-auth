import Link from 'next/link'
import Router  from 'next/router'
import React from 'react'
import { routePermission } from '../models/RoutesType'
// import { useSession } from "next-auth/react"

const Nav = ({ permissions }: { permissions: routePermission }) => {
    // const { data } = useSession()

    const signOut = () => {
        localStorage.removeItem('user-token');
        Router.push('/')
    }

//    const isLoggedIn = localStorage.getItem('user-token')

    return (
        <nav className='header'>
            <h1 className='logo'>
                <a href='#'>NextAuth</a>
            </h1>
            <ul className={`main-nav `}>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                {
                    permissions.read &&
                    <li>
                        <Link href='/list'>
                            <a>List</a>
                        </Link>
                    </li>
                }


                {
                //  !isLoggedIn &&
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
                //  isLoggedIn &&
                 (
                    <li>
                        <Link href='' onClick={() =>{signOut()}}>
                            <a>
                                Sign Out
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>

    )
}

export default Nav