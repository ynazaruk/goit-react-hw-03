import css from "./Contact.module.css"

export default function Contact({contact: {id, name, number}}) {
    return (
        <div className={css.container}>
            <p>{name}</p>
            <p>{number}</p>
            <button className={css.btn}>Delete</button>
        </div>
    )
}