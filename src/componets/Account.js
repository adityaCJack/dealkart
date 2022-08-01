import React, { useState } from "react";
import list from "../data";
import Cards from "./cards";

export default function Account({ setCart, cart }) {
  //Adding to cart
  function handleClick(item) {
    setCart([...cart, item]);
  }

  return (
    <section className="main-section pt-5">
      <div className="row container-fluid">
        {list.map((item) => {
          return <Cards key={item.id} item={item} handleClick={handleClick} />;
        })}
      </div>
    </section>
  );
}
