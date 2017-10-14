import React from 'react';
import axios from 'axios';
import LoginForm from '../components/loginForm';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      user: {
        email: '',
        password: '',
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();

    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);

    console.log('tem que autenticar');

    axios.post('https://api-neuroniohomolog.wedeploy.io/login', {
      email,
      password
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });


  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        user={this.state.user}
      />
    );
  }
}

export default LoginScreen;
