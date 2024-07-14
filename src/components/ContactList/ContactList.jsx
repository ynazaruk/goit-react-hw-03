import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContactList({contacts, onDelete}) {
    return (
        <ul className={css.contactList}>
           {contacts.map((contact) => (
            <li key={contact.id}>
                <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
            </li>
           ))} 
        </ul>
    )
}