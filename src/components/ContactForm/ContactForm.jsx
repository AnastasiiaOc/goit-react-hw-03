// import Contact from "../Contact/Contact";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "../ContactForm/contactForm.module.css";

const ValidationSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too short").max(50, "Too long").required("Required"),
     number: Yup.string().min(2, "Too short").max(50, "Too long").required("Required")
})


const ContactForm = () => {
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
// export default function contactForm() {

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
            <label className={css.formLabel} htmlFor="name">Name</label >
            <Field className={css.formField} type="text" name="username"></Field>
            <ErrorMessage className={css.errorMessage} name="username" component="span"/>
            <label htmlFor="" className={css.formLabel} >Number</label>

            <Field className={css.formField} type="text" name="number"></Field>
            <ErrorMessage className={css.errorMessage} name="number" component="span" />
            <button className={css.formButton }type="submit">Add contact</button>
         
        </Form>

    </Formik >)
}

//    ======================================boys=====================================


//    import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// // import styles from "./ContactForm.module.css";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Must be at least 3 characters")
//     .max(50, "Must be 50 characters or less")
//     .required("Required"),
//   number: Yup.string().min(7, "Must be at least 7 digits").required("Required"),
// });

// const ContactForm = ({ onSubmit }) => (
//   <Formik
//     initialValues={{ name: "", number: "" }}
//     validationSchema={validationSchema}
//     onSubmit={(values, { resetForm }) => {
//       onSubmit(values);
//       resetForm();
//     }}
//   >
//     {() => (
//       <Form >
//         <label  htmlFor="name">
//           Name
//         </label>
//         <Field  name="name" type="text" />
//         <ErrorMessage  name="name" component="div" />

//         <label  htmlFor="number">
//           Number
//         </label>
//         <Field  name="number" type="text" />
//         <ErrorMessage  name="number" component="div" />

//         <button  type="submit">
//           Add contact
//         </button>
//       </Form>
//     )}
//   </Formik>
// );

export default ContactForm;