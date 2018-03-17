import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'semantic-ui-react'

export default class ComponentsPage extends Component {
  render () {
    return (
      <div>
        <h1>ComponentsPage</h1>
        <p>This is a second page and demonstrates the React Router.</p>
        <Button as={Link} to='/' style={{marginLeft: '0.5em'}}>
          Back to home
        </Button>
      </div>
    )
  }
}
