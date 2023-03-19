import React from 'react'

function Footer() {
  return (
    <div>
      <footer
        id="footer"
        class="biker-footer-bg text-center text-lg-start py-5 mt-5"
      >
        <div class="container">
          <div class="row row-cols-1 row-cols-lg-2">
            <div class="col">
              <div class="d-flex justify-content-center justify-content-lg-start gap-3">
                <span class="text-secondary">
                  <a class="nav-link" href="">
                    Download
                  </a>
                </span>
                <span class="text-secondary">
                  <a class="nav-link" href="">
                    License
                  </a>
                </span>
              </div>
              {/* <!-- Footer Navbar --> */}
              <div class="d-flex justify-content-center justify-content-lg-start">
                <nav class="navbar navbar-expand-md bg-transparent p-0">
                  <div class="container-fluid text-center p-0">
                    <button
                      class="navbar-toggler mx-auto text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a
                            class="nav-link text-secondary ps-0"
                            aria-current="page"
                            href="#"
                          >
                            About
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link text-secondary ps-0"
                            aria-current="page"
                            href="#"
                          >
                            Features
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link text-secondary ps-0"
                            aria-current="page"
                            href="#"
                          >
                            Pricing
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link text-secondary ps-0"
                            aria-current="page"
                            href="#"
                          >
                            Career
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link text-secondary ps-0"
                            aria-current="page"
                            href="#"
                          >
                            Help
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link text-secondary ps-0"
                            aria-current="page"
                            href="#"
                          >
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div>
                <p class="text-secondary">
                  &copy; 2020 bike. All rights reserved
                </p>
              </div>
            </div>
            <div class="col text-lg-end">
              <h4 class="text-secondary">Get the App</h4>
              <div>
                <img
                  class="w-25"
                  src=".//assets/images/android.png"
                  alt="android"
                />
              </div>
              <div>
                <img
                  class="w-25"
                  src=".//assets/images/ios.png"
                  alt="android"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer