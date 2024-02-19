import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    console.log(user?.username)
    if (!user) return <div>Please log in !!</div>
    return <div>Welcome {user?.username}</div>
}

export default Profile