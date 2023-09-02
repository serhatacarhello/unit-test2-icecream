import React, { useState } from "react";

export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
  console.log("isChecked", isChecked);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    console.log(isHover);
  };

  console.log("isHover", isHover);
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="my-4 d-flex align-items-center justify-content-center gap-3">
      <input
        id="terms"
        className="form-check-input"
        type="checkbox"
        onChange={handleChange}
      />
      <div className="terms position-relative">
        <p
          style={{ display: isHover ? "block" : "none" }}
          className=" bg-light rounded p-2 shadow position-absolute bottom-100 start-0 text-nowrap text-black"
        >
          This is an alert for terms and policies.
        </p>
        <label className="lead" htmlFor="terms">
          Accept tems and policies
        </label>
      </div>

      <button
        type="button"
        disabled={!isChecked}
        className="btn btn-warning px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        Order
      </button>
    </div>
  );
}
