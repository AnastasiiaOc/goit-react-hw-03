// import Contact from "../Contact/Contact";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "../ContactForm/contactForm.module.css";

import { nanoid } from "nanoid";

// const ContactForm = () => {
    const ContactForm = ({ onSubmit }) => {

    const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    const ValidationSchema = Yup.object().shape({
        username: Yup.string().min(2, "Too short").max(50, "Too long").required("Required"),
         number: Yup.string().min(2, "Too short").max(50, "Too long").matches(
            phoneRegExp,
            "Номер телефону має співпадати з форматом 'xxx-xx-xx'"
          ).required("Required")
    })
    // ++++++++++++++++++++++NOT MINE ++++++++++++++++++++++++++++++++++++++
// const ContactForm = ({ onAddContact }) => {
    // const handleSubmit = (values, actions) => {
    //   const contactObject = {
    //     name: values.contactName,
    //     number: values.contactNumber,
    //   };
  
    // //   onAddContact(contactObject);
  
    //   console.log(values);
    //   actions.resetForm();
    //   actions.setStatus({});
    // };
    // +++++++++++++++++++++my today++++++++++++++++++++++++++++++++++++++++
// export default function contactForm() {


    // const handleSubmit = (values, actions) => {
    //     addContact({values});
    //     console.log(values)
    //     actions.resetForm();
    // };

    // ========================================================
    const handleSubmit = (values, actions) => {
        console.log(values);
        const newContact = {
          id: nanoid(),
          name: values.username,
          number: values.number,
        };
        onSubmit(newContact);
        actions.resetForm();
      };
    const initialValues = {
        username: "",
        number: "",
    }
    // (THE KEY in initial values (username, number) has to be the same as the name of the FIELD)

    return (<Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}>
        <Form className={css.form}>
            <label className={css.formLabel} htmlFor="name">Name</label >
            <Field className={css.formField} type="text" name="username"></Field>
            <ErrorMessage className={css.errorMessage} name="username" component="span"/>
            <label htmlFor="number" className={css.formLabel} >Number</label>

            <Field className={css.formField} type="text" name="number"></Field>
            <ErrorMessage className={css.errorMessage} name="number" component="span" />
            <button className={css.formButton }type="submit">Add contact</button>
         
        </Form>

    </Formik >)
}

export default ContactForm;




