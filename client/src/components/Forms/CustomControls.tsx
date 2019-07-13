import React from 'react';
import { FieldProps } from 'formik';

interface OwnProps {
  label: string;
  type: string;
}

type TextFieldProps = FieldProps & OwnProps;

export const TextField = (props: TextFieldProps) => {
  return (
    <>
      <label className="f6 db mb2">{props.label}</label>
      <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type={props.type} {...props.field} />
    </>
  );
}

export const ErrorText = (props: any) => {
  console.log(props)
  return(
    <small className="f6 black-60 db mb2">{props.children}</small>)
}
