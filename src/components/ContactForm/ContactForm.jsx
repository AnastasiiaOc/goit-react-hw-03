// import Contact from "../Contact/Contact";
// import react from "@vitejs/plugin-react-swc";
import { Formik, Form, Field } from "formik";
// import { useId } from "react";
// import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "../ContactForm/contactForm.module.css";

const ValidationSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too short").max(50, "Too long").required("Required"),
     number: Yup.string().min(2, "Too short").max(50, "Too long").required("Required")
})

export default function contactForm() {

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };
    const initialValues = {
        username: "",
        number: "",
    }

    return (<Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}>
        <Form className={css.form}>
            <label className={css.formLabel}>Name</label>
            <Field className={css.formField} type="text" name="username"></Field>
            <ErrorMessage className={css.errorMessage} name="username" component="span"/>
            <label htmlFor="" className={css.formLabel}>Number</label>

            <Field className={css.formField} type="text" name="number"></Field>
            <ErrorMessage className={css.errorMessage} name="number" component="span" />
            <button className={css.formButton }type="submit">Add contact</button>
         
        </Form>

    </Formik >)
}

   


// export default contactForm;