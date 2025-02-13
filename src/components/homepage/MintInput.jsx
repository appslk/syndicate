import { useState } from "react";

import GradientButton from "../ui/buttons/GradientButton";
import "../../assets/css/mint-input.css";

let totalCost = 0;

const MintInput = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => {
      const count = prev + 1;
      totalCost = count * 0.0002;
      return count;
    });
  };

  const handleChange = (e) => {
    const value = +e.target.value;
    if (!isFinite(value)) return;

    totalCost = +value * 0.0002;
    setCount(+value);
  };

  const handleDecrease = () => {
    setCount((prev) => {
      if (prev === 0) return prev;

      const count = prev - 1;
      totalCost = count * 0.0002;
      return count;
    });
  };

  return (
    <>
      <div className="mint-input relative my-[1em] flex gap-[0.5em] border-y border-y-[#FFBE25] py-[1.2em]">
        {/* Plus btn */}
        <GradientButton className="px-[1em]" onClick={handleIncrease}>
          +
        </GradientButton>

        {/* Input */}
        <input
          type="number"
          min={0}
          value={count}
          onChange={handleChange}
          className="w-[20ch] rounded-[0.25em] border border-[#FFBE25]/80 px-[1em] text-center font-semibold focus:border-[#FFBE25] focus:outline-0"
        />

        {/* Minus btn */}
        <GradientButton className="px-[1em]" onClick={handleDecrease}>
          -
        </GradientButton>
      </div>

      {/* Mint btn */}
      <GradientButton disabled={count === 0}>
        Mint {totalCost.toFixed(4)} ETH
      </GradientButton>
    </>
  );
};

export default MintInput;
