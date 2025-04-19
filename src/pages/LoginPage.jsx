import { Formik, Form, Field} from 'formik';
import { ErrorMessage } from 'formik';
import css from './LoginPage.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/authOperations';

const LoginPage = () => {
    const emailID = useId();
    const passwordID = useId();
    const dispatch = useDispatch();

    const ContactSchema = Yup.object({
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
        dispatch(logIn({
            email: values.email,
            password: values.password,
        }));
        actions.resetForm();
    };

    return (
        <div className={css.FormMainBox}>
            <Formik initialValues={{email: "", password: ""}} onSubmit={handleSubmit} validationSchema={ContactSchema}>
                <Form className={css.FormBox}>
                    <h1>Login</h1>
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

                    <button type="submit" className={css.FormButton}>Log in</button>
                </Form>
            </Formik>
        </div>
    );

};

export default LoginPage;