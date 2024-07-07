import { useState } from "react"
import contacts from "../../contacts.json"
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css"
import SearchBox from "../SearchBox/SearchBox"


export default function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<div className={css.container}>
  <h1>Phonebook</h1>
  <SearchBox value={searchTerm} onChange={handleSearchChange} />
  <ContactList contacts={filteredContacts} searchTerm={searchTerm}/>
</div>
  )
};

