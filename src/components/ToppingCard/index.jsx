import React from "react";

export default function ToppingCard({ topping, basket, setBasket }) {
  const handleChange = (e) => {
    console.log(e.target.checked, "event");
    if (e.target.checked) {
      setBasket([...basket, topping]);
    } else {
      const filteredBasket = basket.filter(
        (item) => item.name !== topping.name
      );
      setBasket(filteredBasket);
    }
  };
  return (
    <div
      className="topping__card card border-0 bg-transparent mt-2 align-items-center "
      style={{ width: "150px" }}
    >
      <figure className="mb-0 mb-md-2">
        <img
          src={topping.imagePath}
          alt={`topping ${topping.name}`}
          className="img-fluid"
        />
        <label
          role="button"
          htmlFor={topping.name}
          className="form-check-label text-nowrap mt-0 mt-md-2 text-capitalize"
        >
          <figcaption>{topping.name} </figcaption>
        </label>
      </figure>
      <input
        className="form-check-input"
        type="checkbox"
        name={topping.name}
        id={topping.name}
        onChange={handleChange}
      />
    </div>
  );
}
