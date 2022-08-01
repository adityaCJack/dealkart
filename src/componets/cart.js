import React, { useEffect, useState } from "react";

export default function Cart({ cart, setCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState();

  function handleDelete(id) {
    const newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
  }

  //Handling cart changes
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handlePrice = () => {
    let total = 0;
    cart.map((item) => (total += item.amount * item.price));
    setTotalPrice(total);

    if (discount) {
      let d = total - (total * 20) / 100;
      setTotalPrice(d);
    }
  };

  useEffect(() => {
    handlePrice();
  });

  function handleDiscountClick() {
    let form = document.querySelector("#form1").value;

    if (form) {
      if (form === "MY20") {
        setDiscount(totalPrice / 2);
        document.querySelector("#form1").disabled = true;
      } else {
        alert("Invalid coupon");
      }
    } else {
      alert("No coupon entered");
    }
  }

  return (
    <section className="h-100 my-cart">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>

            {cart.map((item) => {
              return (
                <div className="card rounded-3 mb-2">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={item.img}
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2 cart-p">
                          {item.title}
                        </p>
                      </div>
                      <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button
                          onClick={() => handleChange(item, -1)}
                          className="btn btn-link px-2"
                        >
                          -
                        </button>

                        <button className="btn">{item.amount}</button>

                        <button
                          onClick={() => handleChange(item, 1)}
                          className="btn btn-link px-2"
                        >
                          +
                        </button>
                      </div>
                      <div className="col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">{item.price * item.amount} INR</h5>
                      </div>
                      <div className="col-4 col-sm-1 col-md-1 col-lg-1 col-xl-1 text-end">
                        <a
                          href="#"
                          onClick={() => handleDelete(item.id)}
                          className="text-danger"
                        >
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div class="card mb-2">
              <div class="card-body">
                <a class="grand-total">Grand total: {totalPrice} INR</a>
              </div>
            </div>

            <div class="card mb-2">
              <div class="card-body p-4 d-flex flex-row">
                <div class="form-outline flex-fill">
                  <input
                    placeholder="Discount Code"
                    type="text"
                    id="form1"
                    class="form-control form-control-lg"
                    name="discount"
                  />
                </div>
                <button
                  onClick={handleDiscountClick}
                  type="button"
                  class="btn btn-outline-warning btn-lg ms-3"
                >
                  Apply
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <button type="button" class="btn btn-warning btn-block btn-lg">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
