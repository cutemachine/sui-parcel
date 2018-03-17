import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route>
          <Route path='/' component={HomePage} />
          <Route path='/page-2' component={SecondPage} />
        </Route>
      </Router>
    )
  }
}
