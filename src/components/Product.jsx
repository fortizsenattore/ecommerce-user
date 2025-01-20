import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItemToCart } from "../../redux/cartSlice";
import { nanoid } from "@reduxjs/toolkit";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

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

  useEffect(() => {
    const getOneProduct = async () => {
      const call = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/${params.id}`,
      });
      setProduct(call.data);
    };
    getOneProduct();
  }, [params.id]);

  const notify = () =>
    toast.success("Item added to cart!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleAddtoCart = (product) => {
    dispatch(addItemToCart({ ...product, nanoId: nanoid() }));
  };

  return (
    <>
      {/*  imagen principal del producto */}
      <div className="gradient-main-home-styles">
        <img
          className="img-fluid w-100 main-image-home"
          src={`${import.meta.env.VITE_API_URL}/img/${product?.image}`}
          alt="image 1"
        />
      </div>
      <div className="background-night color-text-our-white saira">
        <div className="container py-5">
          <div className="row gx-4 align-items-start">
            {/*  carousel de imagenes del auto */}
            <div className="col-md-6">
              <div className="">
                <Carousel
                  className=""
                  showArrows={true}
                  infiniteLoop={true}
                  useKeyboardArrows={true}
                  dynamicHeight={false}
                  showThumbs={true}
                  showStatus={false}
                  centerMode={true}
                  centerSlidePercentage={100}
                >
                  {product?.photos.map((image) => (
                    <div key={product?.id} className="">
                      <img
                        className="img-fluid"
                        src={`${import.meta.env.VITE_API_URL}/img/${image}`}
                        alt={product.model}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            {/* Caracteristicas y precio */}
            <div className="col-md-6">
              <div className="rounded-0 color-text-our-white background-night saira-expanded">
                <div className="card-body">
                  <h5 className="saira-expanded-more-bold">
                    {product?.brand.name} {product?.model}
                  </h5>
                  <hr />
                  <p>
                    <span className="me-1 saira-expanded-bold">Description:</span>
                    {product?.description}
                  </p>
                  <p className="">
                    <span className="me-1 saira-expanded-bold">Engine:</span>
                    {product?.engine}
                  </p>
                  <p>
                    <span className="saira-expanded-bold me-1">Year:</span>
                    {product?.year}
                  </p>
                  <p className="">
                    <span className="saira-expanded-bold me-1">Price:</span>$
                    {formatNumber(product?.price)}
                  </p>

                  <div className="">
                    <button
                      onClick={() => {
                        notify();
                        handleAddtoCart(product);
                      }}
                      className="button-purchase-product text-center py-2 px-5"
                    >
                      Add to cart
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
