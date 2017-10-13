import React from 'react';
import UserInfo from '../components/userInfo';
import StatementList from '../components/statementList';

const userInfo = {
  name: 'Thales',
  saldo: 100.0
};

const userStatements = [
  {
    date: '05/08/2016',
    description: 'Ganhou pontos',
    amount: 50.0
  },
  {
    date: '05/09/2016',
    description: 'Comprou pontos',
    amount: 50.0
  }
];

class UserScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserInfo info={userInfo} />
        <h3>Movimentações</h3>
        <StatementList statements={userStatements} />
      </div>
    );
  }
}

export default UserScreen;
