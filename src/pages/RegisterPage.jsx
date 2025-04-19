import { Formik, Form, Field} from 'formik';
import { ErrorMessage } from 'formik';
import css from './RegisterPage.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../redux/authOperations';

const RegisterPage = () => {
    const nameID = useId();
    const emailID = useId();
    const passwordID = useId();
    const dispatch = useDispatch();

    const ContactSchema = Yup.object({
        name: Yup.string()
                .matches(/^[A-Za-z\s]+$/, 'Name must contains only letters and spaces.')
                .min(3, "Name is too short")
                .max(50, "Name is too long")
                .required("Name is Required"),
        email: Yup.string()
                .matches(/@[^.]*\./, 'Email must contains @ sign.')
                .min(3, "Name is too short")
                .max(50, "Name is too long")
                .required("Email is Required"),
        password: Yup.string()
                .min(3, "Password must contain at least 3 characters.")
                .max(50, "Password is too long.")
                .required("Password is Required"),
    });

    const handleSubmit = (values, actions) => {   
        dispatch(register({
            name: values.name,
            email: values.email,
            password: values.password,
        }));
        actions.resetForm();
    };

    return (
        <div className={css.FormMainBox}>
            <Formik initialValues={{name: "", email: "", password: ""}} onSubmit={handleSubmit} validationSchema={ContactSchema}>
                <Form className={css.FormBox}>
                    <h1>Register</h1>
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
                    <label htmlFor={emailID}>Email</label>
                    <Field type="text" 
                           name="email" 
                           id={emailID}
                           className={css.NameField}
                           />
                    <ErrorMessage name="email" as="span" className={css.Error}/>
                    </div>

                    <div>
                    <label htmlFor={passwordID}>Password</label>
                    <Field type="text" 
                           name="password" 
                           id={passwordID}
                           className={css.NumberField}
                           />
                    <ErrorMessage name="password" as="span" className={css.Error}/>
                    </div>

                    <button type="submit" className={css.FormButton}>Register</button>
                </Form>
            </Formik>
        </div>
    );

};

export default RegisterPage;