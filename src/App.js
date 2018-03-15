import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import HomePage from './pages/HomePage'
import CommandsPage from './pages/CommandsPage'
import ComponentsPage from './pages/ComponentsPage'

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route>
          <Route path='/' component={HomePage} />
          <Route path='/commands' component={CommandsPage} />
          <Route path='/components' component={ComponentsPage} />
        </Route>
      </Router>
    )
  }
}
