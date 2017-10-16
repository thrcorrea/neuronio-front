import React from 'react';
import axios from 'axios';
import LoginForm from '../components/loginForm';
import auth from '../util/auth';
import api from '../util/api';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      user: {
        email: '',
        password: '',
      },
      errors: {},
      loading: false,
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();

    const email = this.state.user.email;
    const password = this.state.user.password;

    this.setState({
      loading: true
    });

    api.login(email, password)
      .then((data) => {
        if (data.success) {
          auth.authenticate(data.token);
          this.setState({
            errors: {},
            loading: false,
          });
        } else {
          let errors = {};
          errors.summary = data.err;
          this.setState({
            errors,
            loading: false,
          });
        }
      })
      .catch((error) => {
        const errors = error ? error : {};
        errors.summary = 'Erro ao conectar com servidor';
        this.setState({
          errors,
          loading: false
        });
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
        errors={this.state.errors}
        loading={this.state.loading}
      />
    );
  }
}

export default LoginScreen;
