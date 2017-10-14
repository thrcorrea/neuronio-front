import React from 'react';
import { Route, Link } from 'react-router-dom'
import LoginScreen from '../screens/loginScreen';
import UserScreen from '../screens/userScreen';


class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <Route exact path='/' component={UserScreen} />
        <Route path='/login' component={LoginScreen} />
      </div>
    );
  }
}

export default App;
