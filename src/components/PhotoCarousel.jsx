import Carousel from "react-bootstrap/Carousel";

function BigCarousel() {
  return (
    <Carousel className="saira-expanded">
      <Carousel.Item>
        <div className="gradient-main-home-styles">
          <img className="img-fluid w-100 main-image-home" src="super-lambo.png" alt="image 1" />
        </div>
        <Carousel.Caption>
          <div className="title-background py-3 text-center rounded-4 position-absolute">
            <h3 className="saira-expanded-bold">Discover Lambo</h3>
            <p>The finest selection of engines</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gradient-main-home-styles">
          <img className="img-fluid w-100 main-image-home" src="porsche-car.png" alt="image 2" />
        </div>
        <Carousel.Caption>
          <div className="title-background py-3 text-center rounded-4 position-absolute">
            <h3 className="saira-expanded-bold">Discover Porsche</h3>
            <p>Fury and brightness in your wheels</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gradient-main-home-styles">
          <img className="img-fluid w-100 main-image-home" src="ferrari-car.png" alt="image 1" />
        </div>
        <Carousel.Caption>
          <div className="title-background py-3 text-center rounded-4 position-absolute">
            <h3 className="saira-expanded-bold">Discover Ferrari</h3>
            <p>Saciate your need for speed</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BigCarousel;
