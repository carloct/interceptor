import React from 'react'
import * as yup from 'yup'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

interface LoginFormValues {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const LoginForm = () => {
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={schema}
      onSubmit={( values, { setSubmitting, setStatus }) => {
        console.log(values, setSubmitting, setStatus)
        setSubmitting(true)
        dispatch({ type: 'AUTH_LOGIN'})

      }}
    >
      {( props: FormikProps<LoginFormValues>) => {
        return (
          <div>
            <Form>
              <Field name="email" component="input" />
              <ErrorMessage name="email" component="span" />
              <Field name="password" component="input" />
              <ErrorMessage name="password" component="span" />
              { props.status && props.status.msg && <div>{props.status.msg}</div> }
              <button type="submit" disabled={props.isSubmitting}>Login</button>
            </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default LoginForm
