import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import ToppingCard from "./../ToppingCard/index";

export default function Toppings() {
  const [toppingsData, setToppingsData] = useState([]);
  const [basket, setBasket] = useState([]);

  console.log(basket);

  useEffect(() => {
    fetchData("toppings")
      .then((data) => {
        // set data to state
        setToppingsData(data);
      })
      .catch((error) => {
        console.error("An error has occured:", error);
      });
  }, []);

  return (
    <div className="toppings container my-5  ">
      <h2>Toppings</h2>
      <p className="lead fw-normal">Each 1$</p>
      <h5 className="text-bg-success d-inline-block p-1 px-2 border rounded">
        Total for toppings: {basket.length}&nbsp;$
      </h5>
      <div className="toppings__display row d-flex align-items-center justify-content-center gap-3  ">
        {toppingsData.map((topping, i) => (
          <ToppingCard
            key={i}
            topping={topping}
            basket={basket}
            setBasket={setBasket}
          />
        ))}
      </div>
    </div>
  );
}
