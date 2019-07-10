import React from 'react'
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik'
import { TextField, ErrorText } from './CustomControls';
import { signUp } from '../../actions/auth'

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
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: ''}}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, setStatus }) => {

        setSubmitting(true)
        dispatch({type: 'AUTH_SIGNUP'})

        signUp(values.email, values.password)
          .then((resp) => {
            setSubmitting(false)
            console.log(resp)
          })
          .catch((e) => {
            setSubmitting(false)
            setStatus({msg: 'error'})
            console.log(e)
          })
      }}
    >
      {( props: FormikProps<SignUpFormValues> ) => {

        return (
          <div className="tl">
            <Form className="pa4 black-80">
              <div className="measure">
                <Field name="email" type="text" label="Email" component={TextField} />
                <ErrorMessage name="email" component={ErrorText} />
                <Field name="password" type="password" label="Password" component={TextField}/>
                <ErrorMessage name="password" component={ErrorText} />
                <Field name="confirmPassword" type="password" label="Confirm password" component={TextField}/>
                <ErrorMessage name="confirmPassword" component={ErrorText} />
                { props.status && props.status.msg && <div>{props.status.msg}</div> }
                <button type="submit" className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" disabled={props.isSubmitting}>Register</button>
              </div>
            </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
