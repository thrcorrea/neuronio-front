import React from 'react';

const User = ({ user }) => (
  <tr>
    <td> {user.name} </td>
    <td> {user.balance} </td>
  </tr>
);

const UserList = ({ users }) => (
  <table class="table table-striped">
    <thead>
      <tr>
        <td> Nome </td>
        <td> Saldo</td>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </tbody>
  </table>
)

export default UserList;
