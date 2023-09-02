import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import Card from "../Card";

export default function Scoops() {
  const [scoopsData, setScoopsData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetchData("scoops")
      .then((data) => {
        setScoopsData(data);
      })
      .catch((error) => {
        console.error("An error has occured:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Scoops</h1>

      <p className="lead fw-normal">Each 2$</p>
      <h5 className="text-bg-success d-inline-block p-1 px-2 border border-2 rounded">
        Total for scoops: {basket.length * 2}&nbsp;$
      </h5>
      <div className="scoops d-flex align-items-center justify-content-center row gap-5  p-3">
        {scoopsData?.map((scoop, i) => (
          <Card key={i} scoop={scoop} basket={basket} setBasket={setBasket} />
        ))}
      </div>
    </div>
  );
}
