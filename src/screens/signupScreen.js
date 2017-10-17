import React from 'react';
import SignupForm from '../components/signupForm';

class SignupScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
        name: '',
      },
      errors: {},
      loading: false
    };
  }

  render() {
    return (
      <SignupForm
        user={this.state.user}
        errors={this.state.errors}
        loading={this.state.loading}
      />
    )
  }

}

export default SignupScreen;
