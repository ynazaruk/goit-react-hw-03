import { useState, useEffect } from "react"
// import contacts from "../../contacts.json"
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css"
import SearchBox from "../SearchBox/SearchBox"
import ContactForm from "../ContactForm/ContactForm"


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts]= useState(initialContacts);  
  
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts")
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      setContacts(initialContacts);
      localStorage.setItem('contacts', JSON.stringify(initialContacts));
    }
  }, []); 

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const handleAddContact = (newContact) => {
  setContacts([...contacts, newContact])
}

  return (
<div className={css.container}>
  <h1>Phonebook</h1>
  <ContactForm addContact={handleAddContact}/>
  <SearchBox value={searchTerm} onChange={handleSearchChange} />
  <ContactList contacts={filteredContacts} searchTerm={searchTerm}/>
</div>
  )
};

