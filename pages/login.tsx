import axios from 'axios'
import Router from 'next/router'
import React, { useState } from 'react'
// import { loginUser } from '../services/user-service'
const login = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const loginUser = () => {
        console.log("INNN")
        axios.post(`https://reqres.in/api/login`, userData)
            .then(res => {
                console.log(res)
                localStorage.setItem('user-token', res.data.token);
                Router.push('/list')
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(userData)
    return (
        <div className='container'>
            <div className="login">
                <div className="form">
                    <div className="login-form">
                        <span className="material-icons">lock</span>
                        <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        <input type="password" placeholder="password" required onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        <button onClick={loginUser}>login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default login
