import { useState } from "react"
import contacts from "../../contacts.json"
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css"
import SearchBox from "../SearchBox/SearchBox"
import ContactForm from "../ContactForm/ContactForm"


export default function App() {
  const [contacts, setContacts]= useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"))
    return storedContacts || [];
  } )

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

