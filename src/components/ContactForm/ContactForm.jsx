import { Form, Field, Formik, ErrorMessage} from "formik"
import { nanoid } from 'nanoid'
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
  });

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
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form>
                <div>
                    <label htmlFor="name" id="name">Name</label>
                <Field type="text" name="name"></Field>
                <ErrorMessage name="name" component="div" />
                </div>
                <div className="inputSection">
                    <label className="css.label" htmlFor="number" id="number">Number</label>
                    <Field type="text" name="number"></Field>
                    <ErrorMessage name="name" component="div" />
                </div>
                <button className="inputBtn" type="submit">Add contact</button>
            </Form>
        </Formik>
        

    )
}