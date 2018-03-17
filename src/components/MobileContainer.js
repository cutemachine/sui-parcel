import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  Button,
  Container,
  Responsive,
  Sidebar,
  Segment,
  Menu,
  Icon
} from 'semantic-ui-react'
import HomePageHeading from '../components/HomePageHeading'

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render () {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={991}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as={Link} name='home' to='/'>Home</Menu.Item>
            <Menu.Item as={Link} name='page-2' to='/page-2'>Page 2</Menu.Item>
            <Menu.Item as={Link} name='github' href='https://github.com'>Github</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ backgroundColor: '#263749', minHeight: 350, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Button basic color='teal'>
                      <Button.Content>
                        <Icon name='sidebar' />
                      </Button.Content>
                    </Button>
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as={Link} href='https://github.com' primary style={{marginLeft: '0.5em'}}>
                      <Icon name='github' /> GitHub
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomePageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
}

export default MobileContainer
