import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Footer() {
//help sticky footer
const disableFunction = ()=>{
  toast.info("This feature is in development.")
}

  return (
    <>
      <footer className="saira footer-styles py-5">
        <div className="container color-text-our-white">
          <div className="row">
            <div className="col-md-7 mb-3">
              <div className="row">
                <div className="col-4">
                  <h5>Company</h5>
                  <NavLink className="text-decoration-none" to="/about">
                    <p className="text-secondary">About us</p>
                  </NavLink>

                  <p onClick={disableFunction} className="text-secondary cursor-pointer">Terms & Conditions</p>
                  <p onClick={disableFunction} className="text-secondary cursor-pointer">Privacy</p>
                </div>
                <div className="col-4">
                  <h5>Account</h5>
                  <NavLink className="text-decoration-none" to="/profile">
                    <p className="text-secondary">Manage Account</p>
                  </NavLink>
                  <p onClick={disableFunction} className="text-secondary cursor-pointer">Returns & Exchanges</p>
                  <p onClick={disableFunction} className="text-secondary cursor-pointer">Reedem a Gift Card</p>
                </div>
                <div className="col-4">
                  <h5>Connect</h5>
                  <p onClick={disableFunction} className="text-secondary cursor-pointer">Instagram</p>
                  <p onClick={disableFunction} className="text-secondary cursor-pointer">Facebook</p>
                  <p onClick={disableFunction} className="text-secondary cursor-pointer">Twitter</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h5>SUBSCRIBE TO OUR MAILING LIST</h5>
              <InputGroup  className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  aria-describedby="basic-addon2"
                />
                <Button onClick={disableFunction} variant="outline-secondary" id="button-addon2">
                  Subscribe
                </Button>
              </InputGroup>
              <hr className="my-3" />
              <div className="d-flex justify-content-between">
                <p className="text-secondary">Copyright @ 2024 Crown Motors</p>
                <div className="d-flex">
                  <i onClick={disableFunction} className="bi bi-instagram me-1 cursor-pointer"></i>
                  <i onClick={disableFunction} className="bi bi-facebook mx-1 cursor-pointer"></i>
                  <i onClick={disableFunction} className="bi bi-twitter-x ms-1 cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
