import React from 'react';

const Statement = ({ statement }) => (
  <tr>
    <td> {statement.date} </td>
    <td> {statement.description} </td>
    <td> N$ {statement.amount} </td>
  </tr>
);

const StatementList = ({ statements }) => (
  <table class="table table-striped">
    <thead>
      <tr>
        <td> Data </td>
        <td> Descrição </td>
        <td> Valor </td>
      </tr>
    </thead>
    <tbody>
      {statements.map((statement, index) => {
        return <Statement statement={statement} key={index} />;
      })}
    </tbody>
  </table>
);

export default StatementList;
