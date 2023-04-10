import './App.css';
import ContactList from './contact/contactList';

function App() {

  const contacts = [
    {
      id: 1,
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Prachi Gour",
      email: "prachi@gmail.com",
      city: "Indore"
    },
    {
      id: 2,
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Riya Sharma",
      email: "riya@gmail.com",
      city: "Pune"
    },
    {
      id: 3,
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Neha Pandey",
      email: "neha@gmail.com",
      city: "Kota"
    },
  ];

  return (
    <div className='App'>
      {
        contacts.map((contact, i) => {
          return (
            <ContactList key={i} avatarUrl={contact.avatarUrl} name={contact.name} email={contact.email} city={contact.city} />
          )
        })
      }
    </div>
  )
}

export default App;
