import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { cleanCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { saveLastOrder } from "../../redux/orderSlice";


function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");

  const products = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      setTimeout(() => toast.info("You need to login to make a purchase"), 700);
    } else if (cart.length < 1) {
      navigate("/products");
      setTimeout(() => toast.info("Your order is empty. Please add cars to your order."), 700);
    }
  }, [token]);

  const getDeliveryDate = () => {
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate);
    deliveryDate.setDate(currentDate.getDate() + 7);

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return deliveryDate.toLocaleDateString(undefined, options);
  };

  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].qty;
  }

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

  const handleOrder = async (e) => {
    e.preventDefault();
    const call = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/orders`,
      data: { address, cart, nanoId: nanoid() },
      headers: { authorization: `Bearer ${token}` },
    });
    dispatch(saveLastOrder(call.data));
    dispatch(cleanCart([]));
    navigate("/thank-you");
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const disableFunction = ()=>{
    toast.info("This feature is in development.")
  }

  return (
    user && (
      <>
        {/*  imagen principal */}
        <div className="position-relative d-flex">
          <img
            className="img-fluid w-100 img-checkout-styles d-none d-md-block"
            src="keys.png"
            alt="image 1"
          />
          {/* div del checkout */}

          <form
            lang="en"
            method="POST"
            onSubmit={handleOrder}
            className="container-fluid align-items-center div-checkout-styles input-checkout-styles px-3 position-absolute p-md-4 p-xl-5 saira color-text-our-white "
          >
            <div className="row justify-content-center">
              {/* 1° columna - contact information */}
              <div className="col-6">
                <div className="">
                  <p className="saira-expanded-bold title-responsive d-none d-sm-block">
                    Contact Information
                  </p>
                  <p className="saira-expanded-bold title-responsive d-sm-none">Contact Info</p>

                  <div className="d-md-flex">
                    <div className="col-md-6">
                      <div className="mb-3 me-md-2">
                        <label hidden className="form-label" htmlFor="firstname"></label>
                        <input
                          value={user?.firstname}
                          className="form-control input-checkout-styles rounded-0"
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="Firstname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 ms-md-2">
                        <label hidden className="form-label" htmlFor="lastname"></label>
                        <input
                          value={user?.lastname}
                          className="form-control input-checkout-styles rounded-0"
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Lastname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="col-md-6">
                      <div className="mb-3 mb-md-0 me-md-2">
                        <label hidden className="form-label" htmlFor="email"></label>
                        <input
                          value={user?.email}
                          className="form-control input-checkout-styles rounded-0"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ms-md-2">
                        <label hidden className="form-label" htmlFor="phone"></label>
                        <input
                          value={user?.phone}
                          type="text"
                          className="form-control input-checkout-styles rounded-0"
                          name="phone"
                          id="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>

                  {/*   shipping information */}
                  <hr className="mt-4" />
                  <p className="saira-expanded-bold title-responsive">Shipping Information</p>
                  <div className="d-md-flex mb-3">
                    <div className="col-md-6">
                      <div className="me-md-2">
                        <label hidden className="form-label" htmlFor="country"></label>
                        <input
                          type="text"
                          className="form-control input-checkout-styles rounded-0"
                          name="country"
                          id="country"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ms-md-2">
                        <label hidden className="form-label" htmlFor="city"></label>
                        <input
                          type="text"
                          className="form-control input-checkout-styles rounded-0"
                          name="city"
                          id="city"
                          placeholder="City"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label hidden className="form-label" htmlFor="address"></label>
                    <input
                      required
                      value={address}
                      onChange={handleAddress}
                      type=""
                      className="form-control input-checkout-styles rounded-0"
                      name="address"
                      id="address"
                      placeholder="Address"
                    />
                  </div>
                  <div className="mb-3">
                    <label hidden className="form-label" htmlFor="postalCode"></label>
                    <input
                      type="text"
                      className="form-control input-checkout-styles rounded-0"
                      name="postalCode"
                      id="postalCode"
                      placeholder="Postal code"
                    />
                  </div>
                  {/* Pay Buttons */}
                  <div className="d-none d-md-block">
                    <hr className="mt-4" />
                    <p className="saira-expanded-bold title-responsive">Express Checkout</p>
                    <div className="d-block d-md-flex">
                      <div className="col-md-6">
                        <div className="mb-3 mb-md-0 me-md-2">
                          <button type="button" onClick={disableFunction} className="button-checkout-pay-apple py-2 w-100 d-flex align-items-center justify-content-center text-center">
                            <i className="bi bi-apple me-1"></i>
                            <p className="m-0 ms-1">Pay</p>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ms-md-2">
                          <button type="button" onClick={disableFunction} className="button-checkout-pay-google py-2 w-100 d-flex align-items-center justify-content-center text-center">
                            <i className="bi bi-google me-1"></i>
                            <p className="m-0 ms-1">Pay</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2° columna -  purchase information */}
              <div className="col-6">
                <div className="">
                  <p className="saira-expanded-bold title-responsive">Final Order</p>

                  {/* Scroll interface */}
                  <div className="scroll-checkout">
                    {cart.map((car) => (
                      <div
                        key={car.nanoId}
                        className="d-flex align-items-md-center mb-4 shadow input-checkout-styles  position-relative"
                      >
                        {/*  car info (min 768px) */}
                        <div className="d-none d-md-block">
                          <img
                            className="img-fluid img-checkout-product me-md-2"
                            src={`${import.meta.env.VITE_API_URL}/img/${car.image}`}
                            alt="image poster"
                          />
                        </div>
                        <div className="ms-xl-2 d-none d-md-block">
                          <p className="saira fw-medium font-brand-model my-0 mb-1 mb-sm-0">
                            {car.model}
                          </p>
                          <div className="d-flex div-info-product align-items-end pe-2">
                            <p className="saira m-0 brand-font d-none d-md-block">
                              {car.brand.name}{" "}
                            </p>
                            <div className="div-price-checkout position-absolute">
                              <p className="ms-auto m-0 price-font">
                                ${formatNumber(car.price, 0)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* car info (max 768px) */}
                        <div className="d-md-none">
                          <img
                            className="img-fluid img-checkout-product me-md-2"
                            src={`${import.meta.env.VITE_API_URL}/img/${car.image}`}
                            alt="image poster"
                          />
                        </div>
                        <div className="ms-xl-2 ms-2 d-md-none ms-sm-3">
                          <p className="saira fw-medium font-brand-model pe-2 mb-1 mb-sm-0">
                            {car.brand.name} {car.model}
                          </p>
                          <div className="d-flex div-info-product align-items-end pe-2">
                            {/*  <p className="saira m-0 brand-font d-none d-md-block">
                              {car.brand.name}{" "}
                            </p> */}
                            <div className="div-price-checkout position-absolute">
                              <p className="ms-auto m-0 price-font">
                                ${formatNumber(car.price, 0)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center m-0 p-0">
                    <i className="bi bi-caret-down-fill text-center m-0 p-0 pb-2"></i>
                  </div>
                  <hr className="m-0 mb-3" />
                  {/* Subtotal */}
                  <div className="">
                    <div className="d-flex">
                      <p className="saira-expanded paragraph-font-weight m-0">Subtotal</p>
                      <p className="ms-auto mb-2 paragraph-font-weight">
                        ${formatNumber(subtotal, 0)}
                      </p>
                    </div>
                    <div className="d-flex">
                      <p className="saira-expanded paragraph-font-weight mb-0">Shipping</p>
                      <p className="ms-auto mb-2 paragraph-font-weight">$ 1.900</p>
                    </div>
                    <div className="d-flex">
                      <p className="saira-expanded paragraph-font-weight mb-0">Arrival Date</p>
                      <p className="ms-auto mb-0 paragraph-font-weight text-end">
                        {getDeliveryDate()}
                      </p>
                    </div>
                  </div>
                  <hr />

                  {/* Total */}
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <p className="saira-expanded-bold paragraph-font-weight m-0">Total</p>
                      <p className="ms-auto saira-expanded-bold paragraph-font-weight m-0">
                        $ {formatNumber(subtotal + 1900, 0)}
                      </p>
                    </div>
                    <div className="">
                      <div className="form-check mb-3">
                        <input
                          required
                          className="form-check-input rounded-0 input-check-tick"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label paragraph-font-weight"
                          htmlFor="flexCheckDefault"
                        >
                          Accept terms and conditions
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="button-checkout fw-bold py-2 mb-3 title-responsive"
                      >
                        Confirm Order
                      </button>
                    </div>
                    {/*  Pay buttons */}
                    <div className="d-block d-md-none">
                      <div className="d-flex">
                        <div className="col-6">
                          <div className="me-2">
                            <button type="button" onClick={disableFunction} className="button-checkout-pay-apple py-2 w-100 d-flex align-items-center justify-content-center text-center">
                              <i className="bi bi-apple me-1"></i>
                              <p className="m-0 ms-1">Pay</p>
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="ms-2">
                            <button type="button" onClick={disableFunction} className="button-checkout-pay-google py-2 w-100 d-flex align-items-center justify-content-center text-center">
                              <i className="bi bi-google me-1"></i>
                              <p className="m-0 ms-1">Pay</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  );
}

export default Checkout;
