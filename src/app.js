import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import UserScreen from './screens/userScreen';
import LoginScreen from './screens/loginScreen';
import AdminScreen from './screens/adminScreen';

let routes;

const authenticated = true;

if (authenticated) {
  routes = (
    <div>
      <Route path='/user' component={UserScreen} />
      <Route path='/admin' component={AdminScreen} />
    </div>
  )
} else {
  routes = (
    <div>
      <Route path='/' component={LoginScreen} />
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/user">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          {routes}
        </div>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'));
