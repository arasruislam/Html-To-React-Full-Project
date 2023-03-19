import React from "react";
import { Link } from "react-router-dom";
import Blogs from "./Blogs/Blogs";
import Clients from "./Clients/Clients";
import Footer from "./Footer";
import Header from "./Header";

function Bike3() {
  return (
    <div className="Bike3">
      {/* <!-- Header Area --> */}
      <header id="header" class="container  pb-3">
        {/* <!-- Navigation Bar --> */}
        <div>
          <nav class="navbar navbar-expand-md bg-transparent">
            <div class="container">
              <a
                class="navbar-brand text-capitalize text-dark fs-1 fw-bold"
                href="index.html"
              >
                Bike Dekho
              </a>
              <button
                class="navbar-toggler text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav fw-medium ms-auto me-md-5 mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to={"/"} class="nav-link  active">
                      BikeZone v1
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/bike-zone-2"} class="nav-link ">
                      BikeZone v2
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/bike-zone-3"} class="nav-link ">
                      BikeZone v3
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
                <button class="biker-btn" type="submit">
                  Log in
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* <!-- Banner --> */}
        <section
          id="banner"
          class="mt-4 bg-warning bg-opacity-50 rounded-3 p-2 p-lg-5 biker-header-bg-1"
        >
          <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row g-3">
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                        <h2 class="fw-bold display-4">
                          Ride-on R15 V4 with Smile
                        </h2>
                        <p class="py-2">
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </p>
                        <button class="biker-btn">Purchase</button>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                        <img
                          class="d-block w-100"
                          src="/assets/bike3/images/bikes/Bike-5.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row g-3">
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                        <h2 class="fw-bold display-4">
                          Ride-on R15 V4 with Smile
                        </h2>
                        <p class="py-2">
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </p>
                        <button class="biker-btn">Purchase</button>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                        <img
                          class="d-block w-100"
                          src="/assets/bike3/images/bikes/Bike-6.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row g-3">
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                        <h2 class="fw-bold display-4">
                          Ride-on R15 V4 with Smile
                        </h2>
                        <p class="py-2">
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </p>
                        <button class="biker-btn">Purchase</button>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                        <img
                          class="d-block w-100"
                          src="/assets/bike3/images/bikes/Bike-7.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row g-3">
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                        <h2 class="fw-bold display-4">
                          Ride-on R15 V4 with Smile
                        </h2>
                        <p class="py-2">
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </p>
                        <button class="biker-btn">Purchase</button>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                        <img
                          class="d-block w-100"
                          src="/assets/bike3/images/bikes/Bike-9.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon slider-bg-color"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon slider-bg-color"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </header>

      {/* <!-- Main Area --> */}
      <main id="main" class="container my-5">
        {/* <!-- Feature Bike Area --> */}
        <section id="feature">
          <div class="text-center">
            <h2 class="fw-bold">Featured Bikes In This Year</h2>
            <p class="biker-text fw-medium">Best bike collection</p>
            <hr class="w-25 mx-auto border-3 biker-border" />
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 py-5 text-center">
            <div class="col">
              <img
                class="w-75 biker-black-white"
                src="/assets/bike3/images/bikes/bike-6.png"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="w-100"
                src="/assets/bike3/images/bikes/bike-5.png"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="w-75 biker-black-white"
                src="/assets/bike3/images/bikes/bike-6.png"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* <!-- News Area--> */}
        <Blogs />

        {/* <!-- Clients Area --> */}
        <Clients />

        {/* <!-- FAQ Area --> */}
        <div id="faq" class="my-5">
          <div class="text-center">
            <h2 class="fw-bold">
              Frequently Asked <span class="biker-text">Questions</span>
            </h2>
          </div>
          <div class="row row-cols-1 row-cols-lg-2 g-4 py-5">
            <div class="text-center">
              <img
                class="w-75"
                src="/assets/bike3/images/faq.png"
                alt="faq image"
              />
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="accordion text-center" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What are the most important things I should know about
                      riding a bike?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>Safety First!</strong> Always obey the rules of
                      the road. Obey all traffic signals, signs, and laws. Get
                      in the mindset of “driving” your bike—not just “riding”
                      your bike. This will help you be a more focused and
                      legally compliant bike rider.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How can I tell if my helmet is old and I need a new one?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>
                        "Biker wave", "Motorcyclist wave", "Motorcycle wave" or
                        just "The Wave."
                      </strong>
                      The greeting made can include a number of gestures
                      including a nod, a pointed finger, palm-out V sign, or an
                      actual raised-hand wave.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Stay in the comfort zone
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Know your abilities and make sure that neither your chosen
                      route nor <strong>motorcycle</strong> is more than you can
                      handle. Your bike should fit you; that means that your
                      feet should be able to rest flat on the ground when seated
                      – no tiptoes. And if the bike feels too heavy for you, it
                      probably is.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer Area --> */}
      <Footer />
    </div>
  );
}

export default Bike3;
