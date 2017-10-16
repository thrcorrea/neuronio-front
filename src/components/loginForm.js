import React from 'react';

const LoginForm = ({ onSubmit, onChange, user, errors, loading }) => (
  <div>
    <h2> Login </h2>
    {errors.summary && <div className="alert alert-danger"> {errors.summary} </div>}
    <form action="/" onSubmit={onSubmit}>
      <div className="form-group">
        <input type="email" name="email" onChange={onChange} value={user.email} />
      </div>
      <div className="form-group">
        <input type="password" name="password" onChange={onChange} value={user.password} />
      </div>
      <button type="submit">Submit</button> {loading && <span class="fa fa-spinner fa-spin fa-3x"></span>}
    </form>
  </div>
);

export default LoginForm;
