import React from "react";

export default function Card({ scoop, basket, setBasket }) {
  const handleAdd = () => {
    setBasket([...basket, scoop]);
  };
  const found = basket.filter((item) => item.name === scoop.name);
  const amount = found.length;

  const handleReset = () => {
    const filteredScoops = basket.filter((item) => item.name !== scoop.name);
    setBasket(filteredScoops);
  };

  return (
    <>
      <div
        className="card border-0 d-flex flex-column align-items-center justify-content-center mb-3 bg-transparent"
        style={{ width: "170px" }}
      >
        {" "}
        <figure className="d-flex flex-column align-items-center bg-transparent border-0">
          <img
            className="img-fluid"
            src={scoop.imagePath}
            alt={`scoop ${scoop.name}`}
          />
          <figcaption className="mt-1 mt-md-2 text-capitalize">
            {scoop.name}
          </figcaption>
        </figure>
        <div className="btn-group">
          <button onClick={handleReset} className="btn btn-danger">
            Reset
          </button>

          <button className="btn btn-info font-weight-bold"> {amount}</button>
          <button onClick={handleAdd} className="btn btn-warning">
            Add
          </button>
        </div>
      </div>
    </>
  );
}
