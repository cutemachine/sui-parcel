import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router'
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

const HomePageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='SUI Parcel'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as='h2'
      content='Launch your own React projects in no time with SUI Parcel.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    <Button primary size='huge' as={Link} name='components' to='/components'>
      Components
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomePageHeading.propTypes = {
  mobile: PropTypes.bool
}

export default HomePageHeading
