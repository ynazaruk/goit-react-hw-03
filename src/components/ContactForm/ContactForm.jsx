import { Form, Field, Formik } from "formik"
import { nanoid } from 'nanoid'

export default function ContactForm({addContact}) {

    const initialValues ={
        name: "",
        number: "",
    };

    const handleSubmit = (values, actions) => {
        const newContact ={
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        addContact(newContact);
        actions.resetForm();
    }
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor="name" id="name">Name</label>
                <Field type="text" name="name"></Field>
                </div>
                <div className="inputSection">
                    <label className="css.label" htmlFor="number" id="number">Number</label>
                    <Field type="text" name="number"></Field>
                </div>
                <button className="inputBtn" type="submit">Add contact</button>
            </Form>
        </Formik>
        

    )
}