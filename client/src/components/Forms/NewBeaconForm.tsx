import React from "react";
import * as yup from "yup";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";

interface NewBeaconFormValues {
  url: string;
}

const schema = yup.object({
  url: yup.string().required()
});

const CREATE_BEACON = gql`
  mutation insert_beacons($endpoint: String!) {
    insert_beacons(objects: [{ endpoint: $endpoint }]) {
      returning {
        id
      }
    }
  }
`;

const NewBeaconForm = () => {
  const [createBeacon] = useMutation(CREATE_BEACON);
  return (
    <Formik
      initialValues={{ url: "" }}
      validationSchema={schema}
      onSubmit={values => {
        createBeacon({ variables: { endpoint: values.url } });
      }}
    >
      {(props: FormikProps<NewBeaconFormValues>) => {
        return (
          <Form className="formInput">
            <Field name="url" type="text" component="input" className="input" />
            <ErrorMessage name="url" component="span" />
            {props.status && props.status.msg && <div>{props.status.msg}</div>}
          </Form>
        );
      }}
    </Formik>
  );
};

export default NewBeaconForm;
