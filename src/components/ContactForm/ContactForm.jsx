import { Form, Field, Formik, ErrorMessage} from "formik"
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from "./ContactForm.module.css"



export default function ContactForm({addContact}) {

    const initialValues = {
        name: "",
        number: "",
    };


    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Too short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
      });

    const handleSubmit = (values, actions) => {
        const newContact ={
            id: nanoid(),
            ...values,
        };
        addContact(newContact);
        actions.resetForm();
    }
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form>
                <div>
                <label htmlFor="name" >Name</label>
                <Field type="text" name="name"></Field>
                <ErrorMessage name="name" component="div" className={css.error} />
                </div>
                <div className="inputSection">
                    <label className="css.label" htmlFor="number" >Number</label>
                    <Field type="text" name="number"></Field>
                    <ErrorMessage  name="name" component="div" className={css.error} />
                </div>
                <button className="inputBtn" type="submit">Add contact</button>
            </Form>
        </Formik>
        

    )
}