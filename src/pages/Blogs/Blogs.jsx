import React from "react";

function blogs() {
  return (
    <div>
      <section id="news" class="my-5">
        <div class="text-center">
          <h2 class="fw-bold">Latest News</h2>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-4 pb-5">
          <div class="col">
            <div class="card h-100 rounded-4">
              <img
                src=".//assets/images/bikes/bike-1.png"
                class="card-img-top"
                alt="Blog post image"
              />
              <div class="card-body mt-3">
                <h5 class="card-title fw-bold">Ducati XDIAVEL S-73</h5>
                <p class="card-text text-secondary">
                  The XDiavel Nera will be produced in a limited-edition
                  numbered series of 500 units. The serial number is engraved on
                  a dedicated plate on the trellis frame.
                </p>
                <button class="biker-btn mt-3">Read More</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 rounded-4">
              <img
                src=".//assets/images/bikes/bike-2.png"
                class="card-img-top"
                alt="Blog post image"
              />
              <div class="card-body mt-3">
                <h5 class="card-title fw-bold">Motorcycles & Scooters</h5>
                <p class="card-text text-secondary">
                  The most recognizable part of the XDiavel Nera is the special
                  seat made of Pelle Frau®: a soft natural leather saddled by
                  hand, the result of years
                </p>
                <button class="biker-btn-outline mt-3">Read More</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 rounded-4">
              <img
                src=".//assets/images/bikes/bike-3.png"
                class="card-img-top"
                alt="Blog post image"
              />
              <div class="card-body mt-3">
                <h5 class="card-title fw-bold">2021 Honda CBR500R</h5>
                <p class="card-text text-secondary">
                  Each saddle, handmade in natural Pelle Frau® leather, is a
                  unique piece, it is available in 5 different colors directly
                  from the Poltrona Frau palette.
                </p>
                <button class="biker-btn-outline mt-3">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default blogs;
