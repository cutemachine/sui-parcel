// Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  Button,
  Container,
  Responsive,
  Visibility,
  Segment,
  Menu,
  Icon
} from 'semantic-ui-react'
import HomePageHeading from '../components/HomePageHeading'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render () {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                {/* TODO handle active <Menu.Item as='a' active>Home</Menu.Item> */}
                <Link className='item' to='/'>Home</Link>
                <Link className='item' to='/commands'>Commands</Link>
                <Link className='item' to='/components'>Components</Link>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}><Icon color='blue' name='github' /> GitHub</Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomePageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

export default DesktopContainer
