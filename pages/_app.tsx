import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/login.css'
import type { AppProps } from 'next/app'
import Login from './login';
import Layout from '../components/Layout';
import { routePermission } from '../models/RoutesType';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from '.';



function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check 
    console.log(router)
    authCheck(router.pathname);
  }, []);

  const authCheck = (url: string) => {
    // redirect to login page if accessing a private page and not logged in 
    const user = localStorage.getItem("user-token")
    const publicPaths = ['/login', '/'];

    if (!user) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  }

  const permissions: Array<string> = [
    'read', 'create', 'edit'
  ]

  const routePermission: routePermission = {
    read: false,
    create: false,
    edit: false,
    update: false
  }

  permissions.map(permission => {
    routePermission[permission] = true
  })

  const ComponentToRender = authorized ? (permissions.length > 0 ? Component : Home) : Login
  return <Layout permissions={routePermission}>
    <ComponentToRender {...pageProps} />
  </Layout>

}

export default MyApp
