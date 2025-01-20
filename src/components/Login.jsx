import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/tokenSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../redux/userSlice";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notAuth, setNotAuth] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const createToken = async (e) => {
    e.preventDefault();
    const call = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}`,
      data: { email, password },
    });
    
    if (call.data.msg !== "Invalid credentials") {
      dispatch(saveUser(call.data.user));
      dispatch(login(call.data.token));
      navigate("/");
      setTimeout(() => toast.success("Login successful!"), 800);
    } else{
      setNotAuth("NO");
    }
  };

  return (
    <>
      <div className="position-relative vh-100 w-100 saira color-text-our-white">
        <img
          className="img-login-styles d-none d-sm-block img-fluid vh-100"
          src="car-red.png"
          alt="poster de crown motors"
        />
        <div className="position-absolute px-5 div-login-styles shadow">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <div className="mb-4">
              <img
                className="img-fluid logo-login-styles"
                src="/crown-logo.png"
                alt="logo crown motors"
              />
            </div>
            <h2 className="text-center saira-expanded-more-bold">Welcome!</h2>
            <form onSubmit={createToken} method="POST" className="form-styles">
              <label className="mb-2" htmlFor="email">
                Sign in with your Crown Motors credentials:
              </label>
              <input
              required
                value={email}
                onChange={handleEmail}
                placeholder="Email"
                className="input-checkout-styles form-control mb-3 rounded-0"
                type="email"
                name="email"
                id="email"
              />
              <label className=" mb-2" htmlFor="password">
                Password
              </label>
              <div className="position-relative">
                <input
                required
                  value={password}
                  onChange={handlePassword}
                  placeholder="Password"
                  className="input-checkout-styles form-control rounded-0"
                  type={showPassword}
                  name="password"
                  id="password"
                />
                {showPassword === "password" ? (
                  <i
                    onClick={() => setShowPassword("text")}
                    className="position-absolute bi bi-eye cursor-pointer"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPassword("password")}
                    className="position-absolute bi bi-eye-slash cursor-pointer"
                  ></i>
                )}
              </div>
              {notAuth !== "NO" ? (
                ""
              ) : (
                <div>
                  <p className="mt-2 text-invalid-credentials mb-0">Invalid credentials</p>
                </div>
              )}
              <button className="btn-login-styles w-100 mt-4 mb-3">
                Login
              </button>
            </form>

            <div className="d-flex justify-content-center mb-3">
              <span className="me-1">Don't have an account?</span>{" "}
              <Link className="color-text-gold text-decoration-none ms-1" to="/signup">
                Sign up
              </Link>
            </div>

            <Link to="/emailcheck" className="text-decoration-none text-primary">
              <p className="text-end text-decoration-none text-primary">Forgot your password?</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
