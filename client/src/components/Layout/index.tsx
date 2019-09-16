import React, { ReactNode} from 'react'
import Header from './Header'

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => (
  <div className="app-admin-wrap layout-horizontal-bar clearfix">
    <Header />
    <div className="main-content-wrap  d-flex flex-column">
      {props.children}
    </div>
  </div>

)

export default Layout
