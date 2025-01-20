function About() {
  return (
    <>
      {/*  Imagen principal */}

      <div className="position-relative">
        <img
          className="img-about-styles img-fluid w-100 vh-100"
          src="image1.png"
          alt="people working happily"
        />
        <div className="text-center position-absolute title-about-styles">
          <h1 className="saira-expanded-bold text-about-styles">About The Crown</h1>
        </div>
      </div>

      {/*  Meet the team */}
      <div className="saira background-night">
        <div className="container py-5 text-center color-text-our-white">
          <div className="mb-5 d-flex align-items-center justify-content-center">
            <span className="line background-gold"></span>
            <h4 className="saira-expanded-more-bold mx-4">Meet the team</h4>
            <span className="line background-gold"></span>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className="text-center mb-4">
                  <img
                    className="pfp-about-styles img-fluid shadow"
                    src="fran.png"
                    alt="member 1"
                  />
                  <p className="saira-expanded-more-bold fs-5 m-0 mb-1">Francisco Ortiz</p>
                  <p className="">Full Stack Developer</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="link-icon-github color-text-our-white"
                      target="_blank"
                      href="https://github.com/fortizsenattore"
                    >
                      <i className="bi bi-github me-1 fs-5"></i>
                    </a>
                    <a
                      className="color-text-our-white link-icon-linkedin"
                      target="_blank"
                      href="https://www.linkedin.com/in/francisco-ortiz-senattore-1799821b0/"
                    >
                      <i className="bi bi-linkedin ms-1 fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center mb-4">
                  <img
                    className="pfp-about-styles img-fluid shadow"
                    src="clara.png"
                    alt="member 1"
                  />
                  <p className="saira-expanded-more-bold fs-5 m-0 mb-1">María Clara Puñales</p>
                  <p>Girl Developer, providing representation since 2005</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="link-icon-github color-text-our-white"
                      target="_blank"
                      href="https://github.com/clearlyc"
                    >
                      <i className="bi bi-github me-1 fs-5"></i>
                    </a>
                    <a
                      className="link-icon-linkedin color-text-our-white"
                      target="_blank"
                      href="https://www.friv.com/"
                    >
                      <i className="bi bi-linkedin ms-1 fs-5 "></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center">
                  <img
                    className="img-fluid pfp-about-styles shadow"
                    src="ioel.png"
                    alt="member 1"
                  />
                  <p className="saira-expanded-more-bold fs-5 m-0 mb-1">Ioel Katz</p>
                  <p>Singer & Dreamer</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="link-icon-github color-text-our-white"
                      target="_blank"
                      href="https://github.com/ioelkatz/"
                    >
                      <i className="bi bi-github me-1 fs-5"></i>
                    </a>
                    <a
                      className="color-text-our-white link-icon-linkedin"
                      target="_blank"
                      href="https://www.linkedin.com/in/ioelkatz/"
                    >
                      <i className="bi bi-linkedin ms-1 fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About the project */}
      <div className="saira background-offwhite py-5">
        <div className="container color-text-night">
          <div className="mb-5 d-flex align-items-center justify-content-center">
            <span className="line background-gold"></span>
            <h4 className="saira-expanded-more-bold mx-4">About this project</h4>
            <span className="line background-gold"></span>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <img
                    login
                    className="img-fluid mb-4"
                    src="image2.png"
                    alt="team workers poster"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-start">
                  <p className="">
                    This project was the last practical exercise made by our team during a
                    three-month Web Development Bootcamp at Hack Academy. The Bootcamp has an
                    immersive, full time program, in which students invest more than 600 hours.
                  </p>
                  <p className="">
                    A challenge arrived and we as a team accept it. A complete E-commerce site of
                    our preference was to be developed in under three weeks. With sweat, tears and
                    effort we succeed and the results are in your screen.
                  </p>
                  <p className="">
                    Last but not least, we harness essential tools such as MySQL, React and Node.js
                    which enabled us to integrate the front with the back-end so as to fully
                    complete the application in record time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  tools and design */}

      <div className="saira background-night py-5">
        <div className="container color-text-our-white overflow-hidden">
          <div className="row gx-5">
            {/* tools */}
            <div className="col-md-6">
              <div className="mb-5">
                <div className="mb-5 d-flex align-items-center justify-content-center">
                  <span className="line background-gold"></span>
                  <h4 className="saira-expanded-more-bold mx-4">Our tools</h4>
                  <span className="line background-gold"></span>
                </div>
                <div className="container-fluid ">
                  <div className="row g-5">
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="js.png" alt="JS" />
                    </div>
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="github.png" alt="GitHub" />
                    </div>
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="nodejs.png" alt="NodeJS" />
                    </div>
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="redux.png" alt="Redux" />
                    </div>
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="react.png" alt="React" />
                    </div>
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="html.png" alt="HTML" />
                    </div>
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="vite.png" alt="Vite" />
                    </div>
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="mysql.png" alt="MySql" />
                    </div>
                    <div className="col-3 text-center">
                      <img className="tools-about-styles img-fluid" src="css.png" alt="CSS" />
                    </div>
                    <div className="col-3 text-center">
                      <img
                        className="tools-about-styles img-fluid"
                        src="excalidraw.png"
                        alt="Excalidraw"
                      />
                    </div>
                    <div className="col-3 text-center">
                      <img
                        className="tools-about-styles img-fluid"
                        src="sequalize.png"
                        alt="Sequelize"
                      />
                    </div>
                    <div className="col-3 text-center">
                      <img
                        className=" tools-express img-fluid"
                        src="express.png"
                        alt="Express"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div>
                <div className="mb-5 d-flex align-items-center justify-content-center ">
                  <span className="line background-gold"></span>
                  <h4 className="saira-expanded-more-bold mx-4">Design</h4>
                  <span className="line background-gold"></span>
                </div>

                <div className="row">
                  {/* colores */}
                  <div className="text-center col-6 d-flex justify-content-center justify-content-md-start">
                    <div className="ms-lg-4">
                      <p className="mb-4 text-start subtitle-about saira-expanded-bold">
                        Colour Palette
                      </p>

                      <div className="">
                        <div className="d-flex align-items-center color-div-big-style">
                          <div className="color-div-style background-offwhite shadow"></div>
                          <p className="ms-2 m-0 p-saira-styles">#faf2e9</p>
                        </div>
                        <div className="d-flex align-items-center color-div-big-style">
                          <div className="color-div-style background-gold  shadow"></div>
                          <p className="ms-2 m-0 p-saira-styles">#d3a55c</p>
                        </div>
                        <div className="d-flex align-items-center color-div-big-style">
                          <div className="color-div-style background-night  shadow"></div>
                          <p className="ms-2 m-0 p-saira-styles">#0c090d</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*    Tipografía */}
                  <div className="col-6 d-flex flex-column align-items-center align-items-md-start">
                    <div className="text-start">
                      <p className="color-text-our-white subtitle-about text-start saira-expanded-bold">
                        Typography
                      </p>
                      <div className="d-flex align-items-center text-start">
                        <h2 className="big-letter saira-bold text-start me-2">Aa</h2>
                        <p className="m-0 ms-2 p-saira-styles">Saira</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <h2 className="big-letter saira-expanded-bold me-2">Aa</h2>
                        <div className="p-letter-styles ms-2 text-start">
                          <p className="m-0 p-saira-styles">Saira expanded</p>
                        </div>
                      </div>
                    </div>
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

export default About;
