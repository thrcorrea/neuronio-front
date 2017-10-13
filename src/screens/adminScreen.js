import React from 'react';
import UserList from '../components/userList';

const usersList = [
  {
    id: 1,
    name: 'Joao Silva',
    balance: 500.00
  },
  {
    id: 2,
    name: 'Maria Aparecida',
    balance: 200.00
  }
];

class AdminScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Usuários </h1>
        <UserList users={usersList} />
      </div>
    );
  }
}

export default AdminScreen;
