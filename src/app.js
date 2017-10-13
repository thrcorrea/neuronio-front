import React from 'react';
import { render } from 'react-dom';
import UserScreen from './screens/userScreen';
import AdminScreen from './screens/adminScreen';

class App extends React.Component {
  render() {
    return (
      <div>
        <AdminScreen />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
