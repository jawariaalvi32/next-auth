import React from 'react'
import { routePermission } from '../models/RoutesType'
import Nav from './Nav'

const Layout = ({ permissions, children } : { permissions: routePermission, children: React.ReactNode }) => {
  return (
    <div>
        <Nav permissions={permissions}/>
        { children }
    </div>
  )
}

export default Layout