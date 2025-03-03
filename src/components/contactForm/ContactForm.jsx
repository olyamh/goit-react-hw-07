import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import clsx from 'clsx';
import s from './ContactFrom.module.css';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";


const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch =useDispatch();
  const onSubmit = (values, options) => {
    const newObj ={
      name: values.name,
      number: values.number, 
     
     };
    dispatch(addContact(newObj));
    options.resetForm();
  }



  const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const phoneNumberRegex = /^\+?\d{9,15}$/;

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "The name must contain more than 2 characters")
      .max(50, "The name must contain up to 50 characters")
      .required("This field is required")
      .matches(nameRegex, "Enter only letters"),
    number: Yup.string()
      .matches(
        phoneNumberRegex,
        "The phone number contains only numbers (from 9 to 15 characters)"
      )
      .required("This field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={formSchema}
    >
      {({ values }) => (
        <section className={clsx(s.formSection)}>
        <Form className={clsx(s.form)}>
        
            <label className={clsx(s.lable)}>
              Name
              <Field name="name" className={clsx(s.input)} placeholder="enter contact name" />
              <ErrorMessage name="name" component="p" className={clsx(s.error)}></ErrorMessage>
            </label>
          

          
            <label className={clsx(s.lable)}>
              Phone
              <Field name="number" type="text" className={clsx(s.input)} placeholder="enter phone number"/>
              <ErrorMessage name="number" component="p" className={clsx(s.error)} />
            </label>
          

          <button disabled={!values.name || !values.number} type="submit" className={clsx(s.button)} onSubmit={onSubmit}>
            Add contact
          </button>
        </Form></section>
      )}
    </Formik>
  );
};

export default ContactForm;
