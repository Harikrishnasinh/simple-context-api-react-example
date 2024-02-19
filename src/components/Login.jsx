import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const { setUser, user } = useContext(UserContext)

    const [usersData, setUsersData] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const ClickHandler = (e) => {
        setUser({ username: username, password: password })
    }

    return (
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            <h1 style={{ fontWeight: 200 }}>Login &gt;</h1>
            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" style={{ padding: '0.5rem', borderRadius: '8px', fontSize: '19px' }} placeholder='username' />
            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" id="password" style={{ padding: '0.5rem', borderRadius: '8px', fontSize: '19px' }} placeholder='password' />
            <input type="submit" style={{ background: 'red', color: 'white', border: 'none', width: 'auto' }} onClick={(e) => ClickHandler(e)} value="Submit" />
        </div>
    )
}

export default Login