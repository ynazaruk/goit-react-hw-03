import { HiUser, HiPhone } from "react-icons/hi";
import css from "./Contact.module.css"

export default function Contact({contact}) {
    return (
        <div className={css.container}>
      <address>
        <div className={css.user}>
          <HiUser />
          <span>{contact.name}</span>
        </div>
        <div className={css.phone}>
          <HiPhone />
          <span>{contact.number}</span>
        </div>
      </address>
      <form>
        <button type="button" className={css.btn}>Delete</button>
      </form>
    </div>
    )
}