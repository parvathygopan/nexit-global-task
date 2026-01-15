"use client";
import React from "react";
import Steel from "../../../../public/Assets/OIP.jpg";
import Image from "next/image";
function Industries() {
  const cards = [
    {id: 1, type: "image", title: "Iron And Steel"},
    {
      id: 2,
      type: "text",
      title: "Iron and steel industry is categorised by huge material handling",
    },
    {id: 3, type: "image", title: "Iron And Steel"},
    {id: 4, type: "image", title: "Iron And Steel"},
    {id: 5, type: "image", title: "Iron And Steel"},
    {id: 6, type: "image", title: "Iron And Steel"},
    {id: 7, type: "image", title: "Iron And Steel"},
    {id: 8, type: "image", title: "Iron And Steel"},
    {id: 9, type: "image", title: "Iron And Steel"},
    {id: 10, type: "image", title: "Iron And Steel"},
    {id: 11, type: "image", title: "Iron And Steel"},
    {id: 12, type: "image", title: "Iron And Steel"},
  ];
  return (
    <div className="container pt-100">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className="indus">Industries We Serve</h1>
        </div>
        <div className="col-md-6 col-sm-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </div>
      </div>
      <div className="container py-5">
        <div className="row g-4">
          {cards.map((card) => (
            <div key={card.id} className="col-lg-2 col-md-4 col-sm-6">
              {card.type === "image" ? (
                <div className="industry-card position-relative overflow-hidden">
                  <Image
                    src={Steel}
                    alt="Iron and Steel"
                    fill
                    className="industry-img"
                  />

                  <div className="overlay"></div>

                  <div className="position-absolute top-50 start-50 translate-middle text-center px-3">
                    <h5 className="text-white fw-light">{card.title}</h5>
                  </div>
                </div>
              ) : (
                <div className="industry-text d-flex align-items-center justify-content-center">
                  <p className="text-white text-center m-0">{card.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
