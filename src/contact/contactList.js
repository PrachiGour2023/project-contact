import React, { useEffect, useState } from 'react'

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(data => { setContacts(data.results) })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            {
                contacts.map((contact, i) => {
                    return (
                        <div className='contact-card' key={i}>
                            <img src={contact?.picture?.medium} alt='profile' />
                            <div className='user-details'>
                                <p><b>Name</b>: {contact?.name?.first}{contact?.name?.last}</p>
                                <p><b>Email</b>: {contact?.email}</p>
                                <p><b>Age</b>: {contact?.dob?.age}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ContactList