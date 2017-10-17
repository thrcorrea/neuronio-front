import React from 'react';

const SingnupForm = ({ onSubmit, onChange, user, errors, loading }) => (
  <div>
    <h2> Cadastro </h2>
    {errors.summary && <div className="alert alert-danger"> {errors.summary} </div>}
    <form action="/" onSubmit={onSubmit}>
      <div className="form-group">
        <label for="name">Nome</label>
        <input type="text" name="name" id="name" onChange={onChange} value={user.name} />
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" onChange={onChange} value={user.email} />
      </div>
      <div className="form-group">
        <label for="password">Senha</label>
        <input type="password" name="password" id="password" onChange={onChange} value={user.password} />
      </div>
      <button type="submit">Submit</button> {loading && <span class="fa fa-spinner fa-spin fa-3x"></span>}
    </form>
  </div>
);

export default SingnupForm;
