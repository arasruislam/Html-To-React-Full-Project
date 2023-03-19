import React from "react";
import { Link } from "react-router-dom";
import Blogs from "./Blogs/Blogs"
import Clients from "./Clients/Clients";
import Footer from "./Footer";
import Header from "./Header";

function Bike2() {
  return (
    <div className="Bike2">
      {/* <!-- Header Area --> */}
      <header id="header" class="bg-secondary rider-bg">
        {/* <!-- Navigation Bar --> */}
        <section>
          <nav class="navbar navbar-expand-md bg-transparent">
            <div class="container">
              <a
                class="navbar-brand text-capitalize text-white fs-1 fw-bold"
                href="index.html"
              >
                Go Rider
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
                    <Link to={"/"} class="nav-link text-white active">
                      Bike Zone v1
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/bike-zone-2"} class="nav-link text-white">
                      Bike Zone v2
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/bike-zone-3"} class="nav-link text-white">
                      Bike Zone v3
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
                <button class="biker-btn" type="submit">
                  Login
                </button>
              </div>
            </div>
          </nav>
        </section>
        {/* <!-- Banner --> */}
        <section class="container h-100 ">
          <div class="h-100 d-flex justify-content-center align-items-start align-items-lg-center mt-5 mt-lg-0">
            <div>
              <h1 class="fw-bold display-4 text-white">
                Keep Your Ride Safe <br /> At Every Time
              </h1>
              <p class="text-white mt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button class="biker-btn mt-4">Purchase</button>
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
                src="/assets/bike2/images/feature-bike.jpg"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="w-75"
                src="/assets/bike2/images/feature-bike.jpg"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="w-75 biker-black-white"
                src="/assets/bike2/images/feature-bike.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* <!-- News Area--> */}
        <Blogs />

        {/* <!-- Clients Area --> */}
        <Clients/>
        
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
                class="w-50"
                src="/assets/bike2/images/faq.png"
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
                      riding a bike?import blogs from './Blogs/Blogs';
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
      <Footer/>
    </div>
  );
}

export default Bike2;
