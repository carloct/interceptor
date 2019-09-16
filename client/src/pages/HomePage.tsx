import React from 'react'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

interface NewBeaconFormValues {
  name: string;
}

const schema = yup.object({
  name: yup.string().required()
})

const CREATE_BEACON = gql`
  mutation insert_beacons($name: String!) {
    insert_beacons(
      objects: [
        {
          url: $name
        }
      ]
    )
  }
`

const HomePage = () => {

  const [createBeacon] = useMutation(CREATE_BEACON)

  return (
    <div>
      <h2>Homepage</h2>
      <div>
        <Formik
          initialValues={{ name: ''}}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            console.log(values, setSubmitting, setStatus)
            createBeacon({variables: { name: values.name }})
          }}
        >
          {( props: FormikProps<NewBeaconFormValues>) => {
            return (
              <div>
                <Form>
                  <Field name="name" type="text" component="input" />
                  <ErrorMessage name="name" component="span" />
                  { props.status && props.status.msg && <div>{props.status.msg}</div> }
                  <button type="submit" disabled={props.isSubmitting}>Start</button>
                </Form>
              </div>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default HomePage;
