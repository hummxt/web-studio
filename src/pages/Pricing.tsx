import { useState } from "react";
import { Link } from "react-router-dom";
import regularIcon from "../assets/images/regular.svg";
import platiniumIcon from "../assets/images/platinium.svg";
import standartIcon from "../assets/images/standart.svg";
import { IoCheckmarkSharp } from "react-icons/io5";
function Pricing() {
  const [selected, setSelected] = useState("monthly");

  return (
    <>
      <div className="min-w-full h-auto flex items-center justify-center flex-col">
        <div className="pricing-plans flex items-center justify-center flex-col p-10 text-primary">
          <div className="information  flex items-center justify-center flex-col text-center gap-5">
            <h1 className="text-5xl w-[70%] leading-tight">
              Pricing plans that suit you
            </h1>
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
          <div
            className="plans w-full flex items-center justify-center gap-6 text-primary p-14 mt-10"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,231,0.12657563025210083) 0%, rgba(255,255,255,1) 100%)",
            }}
          >
            <div className="regular flex items-center justify-center flex-col bg-secondary rounded-2xl border-secondary cursor-pointer border-4 border-transparent hover:border-quality hover:bg-card transition-all duration-300 ease-in-out">
              <div className="title flex items-start justify-start gap-5 py-8 px-12 mr-20">
                <div className="left flex items-start justify-center">
                  <img src={regularIcon} alt="Regular Icon" />
                </div>
                <div className="right flex items-start justify-center flex-col">
                  <h2 className="text-3xl">Regular</h2>
                  <p className="text-md font-light">Starter Plan</p>
                </div>
              </div>
              <div className="horizontal w-full h-[2px] sm:h-[2px] lg:h-[2px] bg-grey m-4"></div>
              <div className="regular-informations flex items-start flex-col gap-5 p-3">
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Limited Projects</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Regular Support Business</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>1 month free trial</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>3GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%] mt-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-3xl">Free</h3>
                  <p className="font-light text-sm text-center">
                    For Limited Edition
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl w-36 h-14 flex items-center justify-center m-4">
                  <Link to="/contact" className="text-secondary">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="platinium flex items-center justify-center flex-col bg-secondary rounded-2xl border-secondary cursor-pointer border-4 border-transparent hover:border-quality hover:bg-card transition-all duration-300 ease-in-out">
              <div className="title flex items-start justify-start gap-5 py-8 px-12 mr-20">
                <div className="left flex items-start justify-center">
                  <img src={regularIcon} alt="Regular Icon" />
                </div>
                <div className="right flex items-start justify-center flex-col">
                  <h2 className="text-3xl">Regular</h2>
                  <p className="text-md font-light">Starter Plan</p>
                </div>
              </div>
              <div className="horizontal w-full h-[2px] sm:h-[2px] lg:h-[2px] bg-grey m-4"></div>
              <div className="regular-informations flex items-start flex-col gap-5 p-3">
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Limited Projects</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Regular Support Business</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>1 month free trial</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>3GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%] mt-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-3xl">Free</h3>
                  <p className="font-light text-sm text-center">
                    For Limited Edition
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl w-36 h-14 flex items-center justify-center m-4">
                  <Link to="/contact" className="text-secondary">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="standart flex items-center justify-center flex-col bg-secondary rounded-2xl border-secondary cursor-pointer border-4 border-transparent hover:border-quality hover:bg-card transition-all duration-300 ease-in-out">
              <div className="title flex items-start justify-start gap-5 py-8 px-12 mr-20">
                <div className="left flex items-start justify-center">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="27" cy="27" r="27" fill="#E6E6E6" />
                    <rect
                      x="16"
                      y="27"
                      width="9"
                      height="13"
                      rx="4.5"
                      fill="#1D2130"
                    />
                    <rect
                      x="16"
                      y="16"
                      width="20"
                      height="9"
                      rx="4.5"
                      fill="#1D2130"
                    />
                    <rect
                      x="27"
                      y="27"
                      width="9"
                      height="13"
                      rx="4.5"
                      fill="#1D2130"
                    />
                  </svg>
                </div>
                <div className="right flex items-start justify-center flex-col">
                  <h2 className="text-3xl">Regular</h2>
                  <p className="text-md font-light">Starter Plan</p>
                </div>
              </div>
              <div className="horizontal w-full h-[2px] sm:h-[2px] lg:h-[2px] bg-grey m-4"></div>
              <div className="regular-informations flex items-start flex-col gap-5 p-3">
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Limited Projects</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Regular Support Business</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>1 month free trial</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>3GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%] mt-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-3xl">Free</h3>
                  <p className="font-light text-sm text-center">
                    For Limited Edition
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl w-36 h-14 flex items-center justify-center m-4">
                  <Link to="/contact" className="text-secondary">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
