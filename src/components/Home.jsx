import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import "../index.css";
import BigCarousel from "./PhotoCarousel.jsx";
import { useEffect } from "react";
import axios from "axios";
import { getAllProducts } from "../../redux/productSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ModalResetDB from "./ModalResetDb.jsx"

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    const getProducts = async () => {
      const call = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products`,
      });
      dispatch(getAllProducts(call.data));
    };
    getProducts();
  }, []);

  const disableFunction = ()=>{
    toast.info("This feature is in development.")
  }

  return (
    <>
      {/* imagen principal */}
      <BigCarousel />
      {/* old new */}
      <div className="background-night pt-5">
        <div className="container">
          <div className="row invert-col mb-4 mb-lg-0 align-items-center">
            <div className="col-md-6">
              <div className="px-md-4 saira d-flex flex-column align-items-center justify-content-center h-100">
                <p className="color-text-our-white saira-expanded m-0 mt-0 subtitle-home">
                  FUTURISTIC COLLECTION
                </p>
                <hr className="hr-color my-4 my-md-3 my-lg-4" />
                <p className="justified-text color-text-our-white px-5 px-md-3 px-lg-5 mb-4 mb-md-3 mb-lg-4">
                  Step into tomorrow with our exclusive collection of luxury cars, where visionary
                  design meets unmatched performance. Experience the future of driving, today.
                </p>
                <Link to="/products?time=futuristic">
                  <button className="button-purchase-product px-3 py-1 mt-0 mb-4 mb-md-0 fw-medium">
                    Discover more
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 m-0 p-lg-2 p-xl-1">
              <Link to="/products?time=futuristic">
                <div className="d-flex justify-content-center align-items-center position-relative">
                  <img
                    className="img-fluid mb-4 mb-md-0 image-logo-styles cursor-pointer"
                    src="/yellow-car.png"
                    alt="logo de ..."
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 m-0 p-lg-2 p-xl-1">
              <Link to="/products?time=vintage">
                <div className="d-flex justify-content-center position-relative mb-4 mb-md-0">
                  <img
                    className="img-fluid image-logo-styles mb-md-0 mb-lg-0 cursor-pointer"
                    src="/old-car.png"
                    alt="logo de ..."
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="saira d-flex flex-column align-items-center justify-content-center h-100">
                <p className="subtitle-home color-text-our-white saira-expanded mb-0">
                  VINTAGE COLLECTION
                </p>
                <hr className="hr-color my-4 my-md-3 my-lg-4" />
                <p className="color-text-our-white justified-text px-5 px-md-3 px-lg-5 mb-4 mb-md-3 mb-lg-4">
                  Rediscover the golden age of motoring with our vintage collection, bringing
                  classic beauty and unmatched craftsmanship back to the road. Meet our legends.
                </p>
                <Link to="/products?time=vintage">
                  <button className="button-purchase-product px-3 py-1 mt-0 mb-4 mb-md-0 fw-medium">
                    Discover more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Destacados */}
      <div className="background-night py-sm-4">
        <h2 className="text-center color-text-our-white py-3 saira-expanded">
          AT THE CORE OF EXCELLENCE
        </h2>
        <div className="container">
          <div className="carousel-container m-0 p-0">
            <Carousel
              className="position-relative"
              showArrows
              infiniteLoop={true}
              useKeyboardArrows
              dynamicHeight
              showThumbs={false}
              showStatus={false}
              centerMode={true}
              centerSlidePercentage={70}
            >
              {products
                ?.filter((product) => product.featured == true)
                .map((car) => (
                  <Link to={`/product/${car.id}`} key={car.id}>
                    <div className="div-image-carousel">
                      <img
                        className="img-fluid image-carousel-styles"
                        src={`${import.meta.env.VITE_SUPABASE_BACKET_URL}/${car.image}`}
                        alt={car.model}
                      />
                      <div className="position-absolute div-model-title text-start">
                        <p className="color-text-our-white saira-expanded-bold m-0 title-model-style">
                          {car.model}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/*  Vision & Mision */}
      <div className="background-night">
        <div className="container py-5 saira color-text-our-white">
          <div className="row">
            <div className="col-md-6">
              <div className="saira d-flex flex-column pe-md-3 pe-lg-4 align-items-center h-100">
                <p className="fs-4 color-text-our-white saira-expanded mb-0">VISION</p>
                <hr className="hr-color my-4 my-md-3 my-lg-4" />
                <p className="justified-text color-text-our-white mb-4 mb-md-3 mb-lg-4">
                  Our vision is to redefine luxury in automotive retail, setting the standard for
                  elegance, performance, and personalized service. We aim to be the premier
                  destination for those who seek not only an extraordinary vehicle but an
                  extraordinary experience. By embracing innovation and timeless style, we inspire
                  trust and excitement in our clients. Our commitment is to create a legacy of
                  excellence, making each visit an unforgettable journey that resonates with the
                  passion, precision, and elegance of our brand. Driven by sophistication.
                </p>
                <div className=" d-flex justify-content-start w-100">
                  <button onClick={disableFunction} className="button-purchase-product px-4 py-1 mt-0 mb-4 mb-md-0 fw-medium">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="saira d-flex flex-column ps-md-3 ps-lg-4 align-items-center h-100">
                <p className="fs-4 color-text-our-white saira-expanded mb-0">MISSION</p>
                <hr className="hr-color my-4 my-md-3 my-lg-4" />
                <p className="justified-text color-text-our-white mb-4 mb-md-3 mb-lg-4">
                  Our mission is to deliver an unparalleled luxury automotive experience, combining
                  exceptional vehicles with exceptional service. We are committed to providing
                  discerning clients with a curated selection of premium cars that embody style,
                  performance, and innovation. Through personalized, attentive care, we build
                  lasting relationships, ensuring every interaction reflects the sophistication and
                  excellence of our brand. Our goal is not only to meet but to exceed expectations,
                  creating moments of distinction in the world of luxury automotive retail.
                </p>
                <div className=" d-flex justify-content-start w-100">
                  <button onClick={disableFunction} className="button-purchase-product px-4 py-1 my-0 fw-medium">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brands */}
      <div className="container-fluid d-flex justify-content-center background-night">
        <div className="container pb-5 pt-0 pt-md-5">
          <h2 className="text-center color-text-our-white saira-expanded py-3">OUR BRANDS</h2>
          <div className="row">
            <div className="col-6 col-sm-4 m-0 p-0 div-logo">
              <Link to="/products?brand=2">
                <img
                  className="img-fluid image-car-logo-style"
                  src="/porsche_logo.png"
                  alt="brand icon"
                />
              </Link>
            </div>
            <div className="col-6 col-sm-4 m-0 p-0 div-logo">
              <Link to="/products?brand=1">
                <img
                  className="img-fluid image-car-logo-style"
                  src="/mclaren-logo.png"
                  alt="brand icon"
                />
              </Link>
            </div>
            <div className="col-6 col-sm-4 m-0 p-0 div-logo">
              <Link to="/products?brand=5">
                <img
                  className="img-fluid image-car-logo-style"
                  src="/lambo-logo.png"
                  alt="brand icon"
                />
              </Link>
            </div>
            <div className="col-6 col-sm-4 m-0 p-0 div-logo">
              <Link to="/products?brand=4">
                <img
                  className=" img-fluid image-car-logo-style"
                  src="/rolls-royce-logo2.png"
                  alt="brand icon"
                />
              </Link>
            </div>
            <div className="col-6 col-sm-4 m-0 p-0 div-logo">
              <Link to="/products?brand=3">
                <img
                  className="img-fluid image-car-logo-style"
                  src="/ferrari-logo2.png"
                  alt="brand icon"
                />
              </Link>
            </div>
            <div className="col-6 col-sm-4 m-0 p-0 div-logo">
              <Link to="/products?brand=6">
                <img
                  className="img-fluid image-car-logo-style"
                  src="/audi-logo2.png"
                  alt="brand icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ModalResetDB */}
      <ModalResetDB/>
    </>
  );
}

export default Home;
