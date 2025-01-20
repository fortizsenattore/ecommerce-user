import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ThankYou() {
  const lastOrder = useSelector((state) => state.order);

  return (
    <>
      <div className="background-night saira vh-100 d-flex justify-content-center align-items-center">
        <div className="main-div-thankyou d-flex flex-column align-items-center justify-content-center px-4 p-md-4 text-center">
          <img className="img-fluid logo-thankyou" src="crown-motors.png" alt="crown motors logo" />
          <h1 className="saira-expanded-more-bold">Thank You!</h1>
          <p className="saira-bold font-subtitle-thankyou mb-4">
            Your order was received successfully
          </p>
          <div className="container-fluid">
            <div className="row invert-col mb-4 g-4">
              {/*  image of cars */}
              <div className="col-md-6 pe-md-0 d-flex justify-content-center align-items-center">
                <div className="">
                  <img
                    className="img-fluid image-thankyou-page"
                    src="yellow-car.png"
                    alt="cars order"
                  />
                </div>
              </div>
              {/*    order number and info */}
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div>
                  <p className="fw-medium m-0">Your track code ID is:</p>
                  <p className="m-0 mb-2">{lastOrder.nanoId}</p>
                  <Link className="color-text-our-white" to="/profile">
                    <button className="track-button-styles w-100 fw-medium py-1">
                      Track Order Status
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Link className="color-text-our-white" to="/">
                <button className="return-button-styles py-1 px-3 m-0 mb-sm-3 mb-md-0 fw-medium">
                  Return Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
