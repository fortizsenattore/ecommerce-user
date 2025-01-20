import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

/* To do: (posible mejora) Aplicar una libreria para enviar emails de verificacion (SendGrid, NodeMailer) */

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!user){
      navigate("/emailcheck")
      setTimeout(toast.info("Please enter your email before changing your password."), 800)
    }
  },[])
  
  
  const modifyPassword = async (e) => {
    e.preventDefault();
    const call = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/users`,
      data: { password, email: user.email },
    });
    navigate("/login");
     setTimeout(toast.success("Password changed successfully."), 800)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="position-relative">
        <img
          className="img-fluid w-100 img-checkout-styles d-none d-sm-block"
          src="imageresetpassword.png"
          alt="image 1"
        />
        <form
          method="PATCH"
          id="emailForm"
          onSubmit={modifyPassword}
          className="p-5 input-checkout-styles div-emailcheck-styles position-absolute saira color-text-our-white"
        >
          <div className="container container-form-changepassword">
            <p className="saira-expanded-more-bold fs-4 text-center">Change your password</p>
            <label hidden className="form-label" htmlFor="password"></label>
            <div className="position-relative">
              <input
                type={showPassword}
                className="form-control input-checkout-styles mb-3 rounded-0"
                name="password"
                id="password"
                placeholder="Password..."
                value={password}
                onChange={handlePassword}
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
            <button className="button-purchase-product px-4 py-1 my-0 fw-medium w-100">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
