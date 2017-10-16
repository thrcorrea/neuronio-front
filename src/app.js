import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import UserScreen from './screens/userScreen';
import LoginScreen from './screens/loginScreen';
import AdminScreen from './screens/adminScreen';
import auth from './util/auth';

let routes;

if (auth.isAuthenticated()) {
  routes = (
    <div>
      <Route exact path='/' component={UserScreen} />
      <Route path='/admin' component={AdminScreen} />
    </div>
  )
} else {
  routes = (
    <div>
      <Route exact path='/' component={LoginScreen} />
    </div>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    auth.deAuthenticate();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/admin">admin</Link></li>
            <li><a href="#" onClick={this.handleClick}> Logout </a></li>
          </ul>
          {routes}
        </div>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'));
