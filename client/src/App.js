import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}

export default App