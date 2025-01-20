import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function OffCanvas({ name, ...props }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const formatNumber = (num, fixed) => {
    const array = Math.floor(num).toString().split("");
    let index = -3;
    while (array.length + index > 0) {
      array.splice(index, 0, ".");
      index -= 4;
    }
    if (fixed > 0) {
      const decimalPart = num.toFixed(fixed).split(".")[1];
      return array.join("") + "," + decimalPart;
    }
    return array.join("");
  };

  const handleDeleteFromCart = (product) => {
    dispatch(removeItemFromCart(product));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].qty;
  }

  return (
    cart && (
      <>
        <i
          onClick={handleShow}
          className="bi bi-car-front-fill position-relative color-text-offwhite link-inactive-car me-0 cursor-pointer"
        >
          {cart.length > 0 ? <div className="gold-circle-styles position-absolute"></div> : ""}
        </i>
        <Offcanvas className="background-night offcanvas-cart-styles" show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton className="custom-offcanvas">
            <Offcanvas.Title className="fw-bold color-text-our-white saira">Order</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex color-text-our-white flex-column p-0">
            <div className="p-3 saira">
              {cart.length === 0 ? (
                <p className="mb-4">
                  Add
                  <Link
                    onClick={() => setShow(false)}
                    className="color-text-gold text-decoration-none mx-1"
                    to="/products"
                  >
                    products
                  </Link>
                  to your order
                </p>
              ) : (
                ""
              )}
              {cart.map((car) => (
                <div key={car.nanoId} className="d-flex align-items-center mb-4">
                  <div>
                    <Link onClick={() => setShow(false)} to={`/product/${car.id}`}>
                      <img
                        className="img-cart-styles shadow-sm me-3"
                        src={`${import.meta.env.VITE_API_URL}/img/${car.image}`}
                        alt="car poster"
                      />
                    </Link>
                  </div>

                  <div className="w-100">
                    <div className="d-flex w-100 m-0 justify-content-between">
                      <p className="saira-expanded-bold title-model-cart m-0 prueba1 cursor-pointer">
                        {car.model}{" "}
                      </p>
                      <p
                        onClick={() => handleDeleteFromCart(car)}
                        className="cursor-pointer m-0 p-0"
                      >
                        ¯¯
                      </p>
                    </div>

                    <p className="m-0 p-0">${formatNumber(car.price)} </p>
                    {car.qty > 1 ? <p className=""> Units: {car.qty}</p> : ""}
                  </div>
                </div>
              ))}
            </div>
            {cart.length === 0 ? (
              ""
            ) : (
              <div className="color-text-our-white background-night p-3  mt-auto">
                <hr />
                <div className="saira d-flex justify-content-between">
                  <span>Subtotal:</span>
                  <span className="fw-medium saira">${formatNumber(subtotal, 0)}</span>
                </div>
                <Link to="/checkout">
                  <button className="saira color-text-our-darkgreen button-cart-styles p-2 w-100 my-3 fw-bold">
                    Checkout
                  </button>
                </Link>
                <div className="text-center">
                  <span>
                    or{" "}
                    <Link
                      onClick={() => setShow(false)}
                      to="/products"
                      className="saira fw-bold color-text-our-white text-decoration-none"
                    >
                      Continue Shopping
                    </Link>
                  </span>
                </div>
              </div>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  );
}

export default OffCanvas;
