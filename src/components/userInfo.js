import React from 'react';

const UserInfo = ({ info }) => (
  <div class="jumbotron">
    <h1 class="text-center"> Olá {info.name} </h1>
    <h2 class="text-right"> Saldo N$ {info.saldo} </h2>
  </div>
);

export default UserInfo;
