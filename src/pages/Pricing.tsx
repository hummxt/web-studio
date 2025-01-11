import { useState } from "react";

function Pricing() {
  const [selected, setSelected] = useState("monthly");

  return (
    <>
      <div className="min-w-full h-auto flex items-center justify-center flex-col">
        <div className="pricing-plans flex items-center justify-center flex-col p-10 text-primary">
          <div className="information  flex items-center justify-center flex-col text-center gap-5">
            <h1 className="text-5xl w-[70%] leading-tight">Pricing plans that suit you</h1>
            <p className="text-md font-light w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="buttons inline items-center justify-center px-4 py-2 rounded-2xl bg-button">
              <button
                onClick={() => setSelected("monthly")}
                className={`px-8 py-4 rounded-xl transition-colors duration-300 mr-2 ${
                  selected === "monthly"
                    ? "bg-primary text-secondary"
                    : "bg-button text-primary"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelected("yearly")}
                className={`px-8 py-4 rounded-xl transition-colors duration-300 ml-2 ${
                  selected === "yearly"
                    ? "bg-primary text-secondary"
                    : "bg-button text-primary"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className="plans">
            <div className="regular">
                
            </div>
            <div className="platinium"></div>
            <div className="standart"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
