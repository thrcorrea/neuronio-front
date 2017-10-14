import React from 'react';

const LoginForm = ({ onSubmit, onChange, user }) => (
  <div>
    <form action="/" onSubmit={onSubmit}>
      <div className="form-group">
        <input type="email" name="email" onChange={onChange} value={user.email} />
      </div>
      <div className="form-group">
        <input type="password" name="password" onChange={onChange} value={user.password} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default LoginForm;
