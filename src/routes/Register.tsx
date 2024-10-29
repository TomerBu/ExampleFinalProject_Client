import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Spinner from '../components/Spinner';
import { dialogs } from '../dialogs/dialogs';
import { auth } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required"),
        username: Yup.string().required().min(2).max(20),
        password: Yup.string().required().min(8).max(20).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,20}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match")
    });

    const initialValues = {
        email: "",
        username: "",
        password: "",
        conformPassword: ""
    }

    const handleSubmit = (o) => {
        setIsLoading(true);
        auth
            .register(o.email, o.username, o.password)
            .then(() => {
                dialogs.success("Registration Successful")
                    .then(() => {
                        navigate("/login");
                    })
            })
            .catch((error) => {
                setError("error")
                dialogs.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form className="flex flex-col items-center">
                <div className="flex flex-col gap-2 w-1/2 mx-auto text-lg my-4">
                    <label htmlFor="username">UserName</label>
                    <Field
                        name="username"
                        type="text"
                        id="username"
                        className="border-2 rounded-md p-1 hover:border-black" />
                    <ErrorMessage
                        name="username"
                        component="div"
                        className='text-red-600' />
                </div>
                <div className="flex flex-col gap-2 w-1/2 mx-auto text-lg my-4">
                    <label htmlFor="email">Email</label>
                    <Field
                        name="email"
                        type="email"
                        id="email"
                        className="border-2 rounded-md p-1 hover:border-black" />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className='text-red-600' />
                </div>
                <div className="flex flex-col gap-2 w-1/2 mx-auto text-lg my-4">
                    <label htmlFor="password">Password</label>
                    <Field
                        name="password"
                        type="password"
                        id="password"
                        className="border-2 rounded-md p-1 hover:border-black" />
                    <ErrorMessage
                        name="password"
                        component="div"
                        className='text-red-600' />
                </div>
                <div className="flex flex-col gap-2 w-1/2 mx-auto text-lg my-4">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                        name="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        className="border-2 rounded-md p-1 hover:border-black" />
                    <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className='text-red-600' />
                </div>
                {isLoading ? <Spinner /> : ""}
                {error ?? <p className='text-red-600'>{error}</p>}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="block w-1/6 mx-auto my-5 disabled:bg-blue-200 bg-blue-500 text-white font-bold self-center rounded-md p-2">
                    Register
                </button>
            </Form>
        </Formik >
    )
}

export default Register