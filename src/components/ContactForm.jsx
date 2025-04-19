import { Formik, Form, Field} from 'formik';
import { ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/asyncActions';

const ContactForm = () => {
    const nameID = useId();
    const numberID = useId();
    const dispatch = useDispatch();

    const ContactSchema = Yup.object({
        name: Yup.string()
                .matches(/^[A-Za-z\s]+$/, 'Name must contains only letters and spaces.')
                .min(3, "Name is too short")
                .max(50, "Name is too long")
                .required("Name is Required"),
        number: Yup.string()
                .matches(/^[0-9]+$/, 'Phone number must contains only digits.')
                .min(9, "Number must contain 9 digits")
                .max(9, "Number must contain 9 digits")
                .required("Number is Required"),
    });

    const handleSubmit = (values, actions) => {   
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={{name: "", number: ""}} onSubmit={handleSubmit} validationSchema={ContactSchema}>
                <Form className={css.FormBox}>
                    <div>
                    <label htmlFor={nameID}>Name</label>
                    <Field type="text" 
                           name="name" 
                           id={nameID}
                           className={css.NameField}
                           />
                    <ErrorMessage name="name" as="span" className={css.Error}/>
                    </div>

                    <div>
                    <label htmlFor={numberID}>Number</label>
                    <Field type="text" 
                           name="number" 
                           id={numberID}
                           className={css.NumberField}
                           />
                    <ErrorMessage name="number" as="span" className={css.Error}/>
                    </div>

                    <button type="submit" className={css.FormButton}>Add contact</button>
                </Form>
        </Formik>
    );

};

export default ContactForm;