import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../redux/userSlice";

function EmailCheck() {
  const [email, setEmail] = useState("");
  const [no, setNo] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = async (e) => {
    e.preventDefault();
    const call = await axios({
      url: `${import.meta.env.VITE_API_URL}/users/email`,
      method: "POST",
      data: { email },
    });
    dispatch(saveUser(call.data));
    if (call.data) {
      navigate("/new-password");
    } else if (call.data == null) {
      setNo("NO");
    }
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
          id="emailForm"
          onSubmit={validateEmail}
          className="input-checkout-styles div-emailcheck-styles saira color-text-our-white"
        >
          <div className="container">
            <p className="saira-expanded-more-bold text-center fs-4 mb-4">
              Enter your Crown Motors email
            </p>
            <label hidden className="form-label" htmlFor="email"></label>
            <input
              type="text"
              className="form-control input-checkout-styles rounded-0"
              name="email"
              id="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={handleEmail}
            />

            {no !== "NO" ? (
              ""
            ) : (
              <div>
                <p className="mt-2 text-invalid-credentials m-0 mb-2">Sorry, this email was not found.</p>
              </div>
            )}
            <button className="button-purchase-product w-100 px-4 py-1 my-md-3 fw-medium">
              Validate
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EmailCheck;
