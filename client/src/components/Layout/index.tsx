import React, { ReactNode } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Header from './Header'

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => (
  <Container fluid>
    <Header />
    <Grid>
      <Grid.Column>

      </Grid.Column>

      {props.children}
    </Grid>
  </Container>

)

export default Layout
