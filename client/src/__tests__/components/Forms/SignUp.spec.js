import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import SignUpForm from '../../../components/Forms/SignUp'

const setup = () => {
  const component = render(<SignUpForm />)
}
