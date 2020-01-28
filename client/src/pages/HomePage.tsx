import React from "react";
import BlockLeft from "../components/Layout/BlockLeft";
import PaneLeft from "../components/Layout/PaneLeft";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

interface NewBeaconFormValues {
  url: string;
}

const schema = yup.object({
  url: yup.string().required()
});

const CREATE_BEACON = gql`
  mutation insert_beacons($url: String!) {
    insert_beacons(objects: [{ url: $url }])
  }
`;

const HomePage = () => {
  const [createBeacon] = useMutation(CREATE_BEACON);

  return (
    <BlockLeft>
      <PaneLeft>
        <div className="todoWrapper">
          <div className="sectionHeader">Beacons</div>
        </div>
        <Formik
          initialValues={{ url: "" }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            console.log(values, setSubmitting, setStatus);
            createBeacon({ variables: { name: values.url } });
          }}
        >
          {(props: FormikProps<NewBeaconFormValues>) => {
            return (
              <Form className="formInput">
                <Field
                  name="url"
                  type="text"
                  component="input"
                  className="input"
                />
                <i className="inputMarker fas fa-angle-right"></i>
                <ErrorMessage name="url" component="span" />
                {props.status && props.status.msg && (
                  <div>{props.status.msg}</div>
                )}
              </Form>
            );
          }}
        </Formik>
        <div>
          {/* <Formik
            initialValues={{ name: "" }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting, setStatus }) => {
              console.log(values, setSubmitting, setStatus);
              createBeacon({ variables: { name: values.name } });
            }}
          >
            {(props: FormikProps<NewBeaconFormValues>) => {
              return (
                <div>
                  <Form>
                    <Field
                      name="name"
                      type="text"
                      component="input"
                      className="formInput"
                    />
                    <ErrorMessage name="name" component="span" />
                    {props.status && props.status.msg && (
                      <div>{props.status.msg}</div>
                    )}
                    <button type="submit" disabled={props.isSubmitting}>
                      Start
                    </button>
                  </Form>
                </div>
              );
            }}
          </Formik> */}
        </div>
      </PaneLeft>
    </BlockLeft>
  );
};

export default HomePage;
