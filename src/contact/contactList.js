import React from 'react'

const ContactList = (props) => {
    return (
        <div className='contact-card'>
           <img src={props.avatarUrl} alt='profile'/>
           <div className='user-details'>
           <p><b>Name</b>: {props.name}</p>
           <p><b>Email</b>: {props.email}</p>
           <p><b>Location</b>: {props.city}</p>
           </div>
        </div>
    )
}

export default ContactList