import React from 'react'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik'
import { TextField, ErrorText } from './CustomControls';
import { signUp } from '../../actions/auth'
import history from '../../lib/history';

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  email:            yup.string().email().required(),
  password:         yup.string().required(),
  confirmPassword:  yup.string().oneOf([yup.ref('password'), ''], 'Passwords do not match')
})


const SignUpForm = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: any) => state.auth)

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: ''}}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, setStatus }) => {

        setSubmitting(auth.isSubmitting)
        dispatch({type: 'AUTH_SIGNUP'})

        signUp(values.email, values.password)
          .then((resp) => {
            console.log(resp)
            setSubmitting(false)
            dispatch({type: 'AUTH_SIGNUP_OK', payload: resp.data})
            history.push("/dashboard")
          })
          .catch((e) => {
            const error = (e.response) ?  e.response.data.error : "Error";
            console.log(e)

            setSubmitting(false)
            setStatus({msg: error})
            dispatch({type: 'AUTH_SIGNUP_ERR', error: 'error'})
          })
      }}
    >
      {( props: FormikProps<SignUpFormValues> ) => {

        return (
          <div className="">
            <Form className="">
              <div className="">
                <Field name="email" type="text" label="Email" component={TextField} />
                <ErrorMessage name="email" component={ErrorText} />
                <Field name="password" type="password" label="Password" component={TextField}/>
                <ErrorMessage name="password" component={ErrorText} />
                <Field name="confirmPassword" type="password" label="Confirm password" component={TextField}/>
                <ErrorMessage name="confirmPassword" component={ErrorText} />
                { props.status && props.status.msg && <div>{props.status.msg}</div> }
                <button type="submit" className="" disabled={props.isSubmitting}>Register</button>
              </div>
            </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
