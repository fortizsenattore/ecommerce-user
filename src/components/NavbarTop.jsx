import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import OffCanvas from "./OffCanvas";
import React from "react";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import crownLogo from "../../public/crown-logo.png";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { logout } from "../../redux/tokenSlice";
import { toast } from "react-toastify";

function NavbarTop() {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  const goodbye = () => {
    toast.success("Logout successful.");
    dispatch(logout(""));
    setModal(false);
    setShowOffCanvas(false)
  };

  useEffect(() => {
    const navbarElement = document.querySelector("#navbar1");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 56) {
        navbarElement.classList.remove("navbar-styles");
        navbarElement.classList.add("scroll-navbar");
      } else if (window.scrollY < 56) {
        navbarElement.classList.add("navbar-styles");
        navbarElement.classList.remove("scroll-navbar");
      }
    });
  });

  return (
    <>
      <Navbar expand="true" id="navbar1" className="fixed-top shadow navbar-styles">
        <Container>
          <Navbar.Toggle
            onClick={() => setShowOffCanvas(!showOffCanvas)}
            className="prueba2"
            aria-controls="offcanvasNavbar"
            data-bs-theme="dark"
          />
          <Navbar.Offcanvas
            onHide={() => setShowOffCanvas(false)}
            show={showOffCanvas}
            className="background-night custom-offcanvas"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header className="color-text-our-white" closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <Nav className="saira color-text-our-white d-flex h-100 w-100 justify-content-between align-items-center">
                <div className="w-100">
                  <NavLink
                    onClick={() => setShowOffCanvas(false)}
                    className={({ isActive }) =>
                      isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                    }
                    to="/"
                  >
                    Home
                    <i className="ms-auto bi bi-chevron-right"></i>
                  </NavLink>
                  <NavLink
                    onClick={() => setShowOffCanvas(false)}
                    className={({ isActive }) =>
                      isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                    }
                    to="/products"
                  >
                    Products
                    <i className="ms-auto bi bi-chevron-right"></i>
                  </NavLink>

                  <NavLink
                    onClick={() => setShowOffCanvas(false)}
                    className={({ isActive }) =>
                      isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                    }
                    to="/about"
                  >
                    About
                    <i className="ms-auto bi bi-chevron-right"></i>
                  </NavLink>
                  <NavLink
                    onClick={() => setShowOffCanvas(false)}
                    className={({ isActive }) =>
                      isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                    }
                    to="/profile"
                  >
                    Profile
                    <i className="ms-auto bi bi-chevron-right"></i>
                  </NavLink>
                </div>

                {token === "" ? (
                  <div className="w-100">
                    <NavLink
                      onClick={() => setShowOffCanvas(false)}
                      className={({ isActive }) =>
                        isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                      }
                      to="/login"
                    >
                      Login
                      <i className="ms-auto bi bi-chevron-right"></i>
                    </NavLink>
                  </div>
                ) : (
                  <div className="w-100">
                    <NavLink
                      to="#"
                      onClick={showModal}
                      className="link-inactive m-0 ps-4 py-4 cursor-pointer"
                    >
                      Logout
                      <i className="ms-auto bi bi-box-arrow-right"></i>
                    </NavLink>
                  </div>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <NavLink className="text-center">
            <img className="img-fluid navbar-logo-styles" src={crownLogo} alt="Brand Image" />
          </NavLink>
          {["end"].map((placement, idx) => (
            <OffCanvas key={idx} placement={placement} name={placement} />
          ))}
        </Container>
      </Navbar>
      <Modal show={modal} onHide={hideModal}>
        <Modal.Body className="background-night color-text-our-white saira px-4 position-relative">
          <i
            onClick={hideModal}
            className="bi bi-x x-modal-styles position-absolute cursor-pointer"
          ></i>
          <p className="m-0 saira-expanded-bold">Are you sure you want to log out?</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link onClick={goodbye} to="/">
              <button className="button-yes-modal saira-bold ms-2">Yes, I want to logout</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarTop;
