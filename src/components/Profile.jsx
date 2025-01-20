import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { editUser } from "../../redux/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState(null);
  const [modalEdit, setModalEdit] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      setTimeout(() => toast.info("You need to login to access your Profile"), 800);
    }
  }, [token]);

  const [firstname, setFirstname] = useState(user?.firstname);
  const [lastname, setLastname] = useState(user?.lastname);
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);

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

  const totalPurchase = (order) => {
    let sum = 0;
    order.productList.map((car) => {
      sum += car.price * car.qty;
    });
    return sum;
  };

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data);
    };
    getOrders();
  }, []);

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

  const hideModalEdit = () => {
    setModalEdit(false);
  };

  const showModalEdit = () => {
    setModalEdit(true);
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    const call = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/users/${user.id}`,
      data: { firstname, lastname, phone, email },
      headers: { Authorization: `Bearer ${token}` },
    }); 
    dispatch(editUser(call.data));
    setModalEdit(false);
  };

  return (
    user &&
    orders && (
      <>
        <div className="saira-expanded container-fluid color-text-our-white background-night py-5">
          <div className="container py-5">
            <h1 className="saira-expanded-more-bold">
              {" "}
              Welcome {user.firstname[0].toUpperCase()}
              {user.firstname.slice(1)}!
            </h1>
            <div className="mb-5 d-flex align-items-center justify-content-center">
              <span className="line background-gold"></span>
            </div>
            <div className="row g-4">
              {/* personal information */}
              <div className="col-md-5 mb-4 mb-md-0">
                <div className="d-flex align-items-center mb-3">
                  <p className="fs-4 saira-expanded-more-bold me-2 m-0">Personal information</p>
                </div>
                <div>
                  <div className="input-checkout-styles p-2 d-flex mb-3">
                    <p className="saira-expanded-bold me-1 m-0">Full Name:</p>
                    <p className="mx-1 m-0">
                      {user.firstname[0].toUpperCase()}
                      {user.firstname.slice(1)} {user.lastname[0].toUpperCase()}
                      {user.lastname.slice(1)}
                    </p>
                  </div>
                  <div className="input-checkout-styles align-items-center p-2 d-flex mb-3">
                    <p className="saira-expanded-bold me-1 m-0 ">Email:</p>
                    <p className="mx-1 m-0">{user.email}</p>
                  </div>
                  <div className="input-checkout-styles align-items-center p-2 d-flex mb-3">
                    <p className="saira-expanded-bold me-1 m-0">Phone:</p>
                    <p className="mx-1 m-0">{user.phone}</p>
                  </div>
                  <div className="d-flex">
                    <button onClick={showModalEdit} className="w-100 btn-profile-styles me-2">
                      Edit Information
                    </button>
                    <Link className="text-decoration-none w-100 ms-2" to="/emailcheck">
                      <button className="w-100 btn-profile-styles">Reset password</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Orders*/}
              <div className="col-md-7 mb-4 mb-md-0">
                <div className="">
                  <p className="fs-4 saira-expanded-more-bold mb-3 me-2 m-0">My orders</p>

                  <Table className="min-h-100" bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>Status</th>
                        <th>Address</th>
                        <th>List</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders
                        ?.filter((order) => order.userId === user.id)
                        .map((order) => (
                          <tr key={order?.id}>
                            <td>
                              <div className="order-col">{order?.nanoId}</div>
                            </td>
                            <td>{order?.status}</td>
                            <td>{order?.address}</td>
                            <td>
                              {order?.productList?.map((car) => (
                                <li key={car?.nanoId}>
                                  {car?.brand?.name} {car?.model} - {car?.qty} units
                                </li>
                              ))}
                            </td>
                            <td>${formatNumber(totalPurchase(order), 0)} </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={modalEdit} onHide={hideModalEdit}>
          <Modal.Body className="background-night color-text-our-white saira p-4 position-relative">
            <i
              onClick={hideModalEdit}
              className="bi bi-x x-modal-styles position-absolute cursor-pointer"
            ></i>
            <p className="m-0 saira-expanded-bold">Change your personal information</p>
            <hr />
            <form onSubmit={handleEdit} method="PATCH">
              <label className="mb-1" htmlFor="firstname">
                Firstname
              </label>
              <input
                className="form-control mb-3 input-checkout-styles rounded-0"
                type="text"
                id="firstname"
                name="firstname"
                placeholder={user?.firstname}
                onChange={handleFirstname}
              />
              <label className="mb-1" htmlFor="lastname">
                Lastname
              </label>
              <input
                className="form-control mb-3 input-checkout-styles rounded-0"
                type="text"
                id="lastname"
                name="lastname"
                placeholder={user?.lastname}
                onChange={handleLastname}
              />
              <label className="mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="form-control mb-3 input-checkout-styles rounded-0"
                type="email"
                id="email"
                name="email"
                placeholder={user?.email}
                onChange={handleEmail}
              />
              <label className="mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                className="form-control mb-3 input-checkout-styles rounded-0"
                type="phone"
                id="phone"
                name="phone"
                placeholder={user?.phone}
                onChange={handlePhone}
              />
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  onClick={hideModalEdit}
                  className="button-no-modal saira-bold me-2 px-3"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  onClick={hideModalEdit}
                  className="button-yes-modal saira-bold ms-2 px-2"
                >
                  Save changes
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    )
  );
}

export default Profile;
