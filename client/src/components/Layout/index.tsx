import React, { ReactNode } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => (
  <div>
    <Header />
    <MainContent>{props.children}</MainContent>
  </div>
);

export default Layout;
