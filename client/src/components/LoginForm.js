const LoginForm = ({ handleLogin, email, password, onSetPassword, onSetEmail, error }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <p className="warning">{error}</p>
              <form className="form-signin mx-auto" onSubmit={handleLogin}>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    autoFocus
                    value={email}
                    onChange={(e) => onSetEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onSetPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <button
                  className="btn btn-lg btn-light btn-block"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
