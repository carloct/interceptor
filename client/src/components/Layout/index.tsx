import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => (
  <div className="sans-serif">
    {props.children}
  </div>
)

export default Layout
