import contacts from "../../contacts.json"
import ContactList from "../ContactList/ContactList"


export default function App() {
  return (
<>
  <h1>Phonebook</h1>
  <ContactList contacts={contacts}/>
</>
  )
}

