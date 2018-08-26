import React from 'react'
import  { FaShieldAlt }  from 'react-icons/fa'

export const Member = ({admin, name, image, email, makeAdmin, removeAdmin}) => (<div>
    <h1>{name} {(admin)? <FaShieldAlt /> :''}</h1>
    <img src={image} alt="profile picture" />
    <div> email: <a href={`mailto:${email}`}>{email}</a></div>
    {
        (!admin)?
        <a onClick={() => makeAdmin(email)}> Make Admin </a> :
        <a onClick={() => removeAdmin(email)}> Remove Admin </a>

    }
    </div>
)