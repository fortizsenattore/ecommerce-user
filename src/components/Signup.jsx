import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const [newUser, setNewUser] = useState(null);

  const navigate = useNavigate();

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: `${import.meta.env.VITE_API_URL}/users`,
      method: "POST",
      data: { firstname, lastname, phone, email, password },
    });
    setNewUser(response.data);
    navigate("/login");
  };

  return (
    <>
      <div className="position-relative vh-100 w-100">
        <img
          className="img-login-styles p-0 m-0 d-none d-sm-block img-fluid vh-100"
          src="dark-car.png"
          alt="poster de crown motors"
        />
        <div className="position-absolute px-5 div-signup-styles shadow">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <div className="mb-1">
              <img
                className="img-fluid logo-login-styles"
                src="/crown-logo.png"
                alt="logo crown motors"
              />
            </div>
            <div className="form-styles">
              <h2 className="text-center fw-bold">Sign Up</h2>
              <p className="mb-3">Complete your details to create your Crown Motors Account</p>
              <form onSubmit={handleSignIn} method="POST" className=" w-sm-100">
                <label hidden className="mb-2" htmlFor="email">
                  First Name
                </label>
                <input
                  required
                  onChange={handleFirstname}
                  value={firstname}
                  placeholder="First name"
                  className="input-checkout-styles form-control rounded-0 mb-3"
                  type="firstName"
                  name="firstName"
                  id="firstName"
                />
                <label hidden className="mb-2" htmlFor="email">
                  Last Name
                </label>
                <input
                  required
                  onChange={handleLastname}
                  value={lastname}
                  placeholder="Last name"
                  className="input-checkout-styles form-control rounded-0 mb-3"
                  type="lastName"
                  name="lastName"
                  id="lastName"
                />
                <label hidden className="mb-2" htmlFor="email">
                  Phone Number
                </label>
                <input
                  required
                  onChange={handlePhone}
                  value={phone}
                  placeholder="Phone"
                  className="input-checkout-styles form-control rounded-0 mb-3"
                  type="phone"
                  name="phone"
                  id="phone"
                />
                <label hidden className="mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  onChange={handleEmail}
                  value={email}
                  placeholder="Email"
                  className="input-checkout-styles form-control rounded-0 mb-3"
                  type="email"
                  name="email"
                  id="email"
                />
                <label hidden className="mb-2" htmlFor="password">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    required
                    onChange={handlePassword}
                    value={password}
                    placeholder="Password"
                    className="input-checkout-styles form-control rounded-0 mb-3"
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
                <button className="w-100 btn-login-styles mb-3">Sign up</button>
              </form>
            </div>

            <div className="d-flex justify-content-center">
              <span className="me-1">Already have an account?</span>
              <Link className="color-text-gold text-decoration-none ms-1" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
