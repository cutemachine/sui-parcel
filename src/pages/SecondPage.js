import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'semantic-ui-react'

export default class SecondPage extends Component {
  render () {
    return (
      <div>
        <h1>Page 2</h1>
        <p>This is a second page demonstrating the React Router.</p>
        <Button as={Link} to='/' style={{marginLeft: '0.5em'}}>
          Home
        </Button>
      </div>
    )
  }
}
