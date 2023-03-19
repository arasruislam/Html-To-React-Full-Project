import React from 'react'

function Clients() {
  return (
    <div>
      <section id="clients" class="my-5">
        <div class="text-center">
          <h2 class="fw-bold">
            Happy Client <span class="biker-text">Says</span>
          </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-4 pb-5">
          <div class="col">
            <div class="card h-100">
              <img
                src=".//assets/images/users/user-1.png"
                class="w-25 mx-auto pt-5 card-img-top"
                alt="Client image"
              />
              <div class="card-body text-center pt-3 p-5">
                <p class="card-text text-secondary">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <p class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </p>
                <h5 class="card-title text-info fw-bold">
                  Muhammad Asru Islam
                </h5>
                <h6>Front-end Developer</h6>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src=".//assets/images/users/user-2.png"
                class="w-25 mx-auto pt-5 card-img-top"
                alt="Client image"
              />
              <div class="card-body text-center pt-3 p-5">
                <p class="card-text text-secondary">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <p class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </p>
                <h5 class="card-title text-info fw-bold">Mrs. Alla Lopez</h5>
                <h6>Graphics Designer</h6>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src=".//assets/images/users/user-3.png"
                class="w-25 mx-auto pt-5 card-img-top"
                alt="Client image"
              />
              <div class="card-body text-center pt-3 p-5">
                <p class="card-text text-secondary">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <p class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <i class="far fa-star"></i>
                </p>
                <h5 class="card-title text-info fw-bold">Mrs. Alina Johan</h5>
                <h6>SEO Expart</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clients