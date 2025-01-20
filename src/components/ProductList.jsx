import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductList() {
  const products = useSelector((state) => state.product);

  const [brand, setBrand] = useState(products);
  const [searchParams, setSearchParams] = useSearchParams();

  const brandQueryId = searchParams.get("brand");
  const timeQuery = searchParams.get("time");

  const handleBrandFilter = (id) => {
    const filtrado = products.filter((car) => car.brandId === id);
    setBrand(filtrado);
  };

  const handleTime = () => {
    if (timeQuery === "vintage") {
      const filterTime = products.filter((car) => car.year < 2000);
      setBrand(filterTime);
    } else {
      const filterTime = products.filter((car) => car.year > 2000);
      setBrand(filterTime);
    }
  };

  useEffect(() => {
    if (brandQueryId) {
      handleBrandFilter(Number(brandQueryId));
    } else if (timeQuery) {
      handleTime();
    }
  }, []);

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

  return (
    <>
      <div className="">
        {/* imagen principal */}
        <div className="gradient-main-home-style">
          <img
            className="img-fluid w-100 img-products-styles"
            src="cool-cars-pictures-sscfk7uv8d48q5uv.png"
            alt="image 1"
          />
        </div>

        <div className="text-center position-absolute color-text-our-white title-product-styles saira-expanded-more-bold">
          <h1 className="title-product-list">Feel the Power, Taste the Luxury</h1>
        </div>
        {/* Filtrar por marca + Buscador */}
        <div className="color-text-our-white background-night">
          {/* categorias (min 568px) */}
          <div className="container py-4 d-none d-sm-block">
            {/*  Categorias */}
            <div className="d-flex justify-content-between m-0 p-0">
              <span onClick={() => handleBrandFilter(1)} className="saira categories-text">
                McLaren
              </span>
              <span onClick={() => handleBrandFilter(2)} className="saira categories-text">
                Porsche
              </span>
              <span onClick={() => handleBrandFilter(3)} className="saira categories-text">
                Ferrari
              </span>
              <span onClick={() => handleBrandFilter(4)} className="saira categories-text">
                Rolls Royce
              </span>
              <span onClick={() => handleBrandFilter(5)} className="saira categories-text">
                Lamborghini
              </span>
              <span onClick={() => handleBrandFilter(6)} className="saira categories-text">
                Audi
              </span>
            </div>

            {/*   Buscador */}

            {/* <form className="d-flex">
              <label hidden htmlFor="carSearcher">
                hey
              </label>
              <input
                className="form-control buscador-styles color-text-our-white border-end-0 rounded-0 rounded-start background-night"
                name="carSearcher"
                id="carSearcher"
              />
              <button className="button-search rounded-end px-3 border-start-0">
                <i className="bi bi-search"></i>
              </button>
            </form> */}
          </div>
          {/* 2° categorias (max 568px) */}
          <div className="container py-4 d-block d-sm-none">
            {/*  Categorias */}
            <div>
              <div className="d-flex justify-content-between m-0 p-0 mb-2">
                <div className="d-flex justify-content-start w-25">
                  <span onClick={() => handleBrandFilter(1)} className="saira ms-2 categories-text">
                    McLaren
                  </span>
                </div>
                <div className="d-flex justify-content-center w-25">
                  <span onClick={() => handleBrandFilter(2)} className="saira categories-text">
                    Porsche
                  </span>
                </div>
                <div className="d-flex justify-content-end w-25">
                  <span onClick={() => handleBrandFilter(3)} className="saira categories-text">
                    Ferrari
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between m-0 p-0">
                <div className="d-flex justify-content-start w-25">
                  <span onClick={() => handleBrandFilter(4)} className="saira categories-text">
                    Rolls Royce
                  </span>
                </div>
                <div className="d-flex justify-content-center w-25">
                  <span onClick={() => handleBrandFilter(5)} className="saira categories-text">
                    Lamborghini
                  </span>
                </div>
                <div className="d-flex justify-content-end w-25">
                  <span onClick={() => handleBrandFilter(6)} className="saira me-2 categories-text">
                    Audi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  lista de productos */}
        <div className="pb-5 background-night color-text-our-white saira">
          <div className="container overflow-hidden">
            <div className="row gx-4 gy-5">
              {brand.map((car) => (
                <div key={car.id} className="col-lg-6 text-center">
                  <div className="overflow-hidden shadow">
                    <Link to={`/product/${car.id}`}>
                      <div className="div-products-image div-gradient-and-image cursor-pointer">
                        <img
                          className="img-fluid products-image"
                          src={`${import.meta.env.VITE_API_URL}/img/${car.imageProduct}`}
                        />
                      </div>
                    </Link>
                  </div>

                  {/* info del producto */}

                  <div className="container-fluid background-accent color-text-our-white text-start pepe py-3">
                    <h4 className="fw-medium m-0">
                      {car.brand.name} {car.model}
                    </h4>
                    <div className="row align-items-end">
                      <div className="col-5 col-sm-6">
                        <div className="m-0 align-items-end d-flex">
                          <p className="m-0">{`Starting at $${formatNumber(car.price)}`}</p>
                        </div>
                      </div>
                      <div className="col-7 col-sm-6">
                        <div className=" d-flex justify-content-end align-items-center">
                          <Link to={`/product/${car.id}`}>
                            <button className="button-purchase-product px-3">Discover more</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
