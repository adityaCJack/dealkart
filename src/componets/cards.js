import React from "react";

export default function Cards({ item, handleClick }) {
  const { id, title, author, price, img } = item;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
      <div className="my-card p-3 shadow">
        <div className="mydiv d-flex justify-content-center">
          <img src={img} className="my-card-img img-fluid" alt="card-img" />
        </div>
        <h5 className="card-title mt-3">{title}</h5>
        <p className="card-text">Price: {price} INR</p>
        <a onClick={() => handleClick(item)} className="btn my-button">
          Add to cart <i class="bi bi-cart-check-fill"></i>
        </a>
      </div>
    </div>
  );
}
