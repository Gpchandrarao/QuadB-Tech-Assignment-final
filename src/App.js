import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import JobItems from './components/JobItems'

import HomePart from './components/HomePart'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <ProtectedRoute path="/" component={HomePart} />
      <ProtectedRoute path="/jobs" component={JobItems} />
    </Switch>
  </BrowserRouter>
)

export default App
