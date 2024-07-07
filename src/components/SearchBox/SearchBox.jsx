import { Formik, Form, Field } from "formik";
import css from "./SearchBox.module.css"

export default function SearchBox({value, onChange}) {
    return (
        <Formik initialValues={{ search: value }} onSubmit={() => {}}>
      <Form className={css.searchBox}>
        <label htmlFor="search">Find contacts by name</label>
        <Field
          className={css.searchField}
          type="text"
          name="search"
          id="search"
          placeholder="Enter name"
          value={value}
          onChange={onChange}
        />
      </Form>
    </Formik>
    )
}