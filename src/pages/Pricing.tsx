import { useState } from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Pricing() {
  const [selected, setSelected] = useState("monthly");
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index: any) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const platiniumMonthlyPrice = "$342";
  const platiniumYearlyPrice = "$2101";
  const standartMonthlyPrice = "$234";
  const standartYearlyPrice = "$1204";

  return (
    <>
      <div className="min-w-full h-auto flex items-center justify-center flex-col">
        <div
          className="absolute top-1/2 left-0 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full blur-3xl -translate-y-1/2 z-0"
          style={{
            background:
              "linear-gradient(132deg, rgba(0,255,231,0.17699579831932777) 0%, rgba(255,255,255,1) 100%)",
          }}
        />
        <div className="pricing-plans flex items-center justify-center flex-col p-4 sm:p-6 md:p-10 text-primary z-0">
          <div className="information flex items-center justify-center flex-col text-center gap-4 sm:gap-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full sm:w-[80%] md:w-[70%] leading-tight">
              Pricing plans that suit you
            </h1>
            <p className="text-sm sm:text-md font-light w-full sm:w-[80%] md:w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="buttons inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-button">
              <button
                onClick={() => setSelected("monthly")}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors duration-300 mr-2 ${
                  selected === "monthly"
                    ? "bg-primary text-secondary"
                    : "bg-button text-primary"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelected("yearly")}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors duration-300 ml-2 ${
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
            className="plans w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 text-primary p-6 sm:p-8 md:p-14 mt-6 sm:mt-8 md:mt-10"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,231,0.12657563025210083) 0%, rgba(255,255,255,1) 100%)",
            }}
          >
            <div className="regular flex items-center justify-center flex-col bg-secondary rounded-2xl border-secondary cursor-pointer border-4 border-transparent hover:border-quality hover:bg-card transition-all duration-300 ease-in-out w-full sm:w-1/3">
              <div className="title flex items-start justify-start gap-4 sm:gap-5 py-6 sm:py-8 px-6 sm:px-12">
                <div className="left flex items-start justify-center">
                  <svg
                    className="first-svg"
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
                  <h2 className="text-xl sm:text-2xl md:text-3xl">Regular</h2>
                  <p className="text-sm sm:text-md font-light">Starter Plan</p>
                </div>
              </div>
              <div className="horizontal w-full h-[2px] bg-grey m-4"></div>
              <div className="regular-informations flex items-start flex-col gap-4 sm:gap-5 p-3">
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Limited Projects</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Regular Support Business</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">1 month free trial</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">3 GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl">Free</h3>
                  <p className="font-light text-sm text-center">
                    For Limited Period
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl flex items-center justify-center before:ease relative h-12 sm:h-14 w-28 sm:w-36 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40 drop-shadow-xl">
                  <Link to="/pricing" className="text-secondary relative z-10">
                    Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <div className="platinium flex items-center justify-center flex-col bg-secondary rounded-2xl border-secondary cursor-pointer border-4 border-transparent hover:border-quality hover:bg-card transition-all duration-300 ease-in-out w-full sm:w-1/3 mt-6 sm:mt-0">
              <div className="title flex items-start justify-start gap-4 sm:gap-5 py-6 sm:py-8 px-6 sm:px-12">
                <div className="left flex items-start justify-center">
                  <svg
                    className="first-svg"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="27"
                      cy="27"
                      r="27"
                      fill="white"
                      fill-opacity="0.38"
                    />
                    <rect
                      x="15"
                      y="38"
                      width="9"
                      height="15"
                      rx="4.5"
                      transform="rotate(-90 15 38)"
                      fill="#1D2130"
                    />
                    <rect
                      x="15"
                      y="27"
                      width="9"
                      height="9"
                      rx="4.5"
                      transform="rotate(-90 15 27)"
                      fill="#1D2130"
                    />
                    <rect
                      x="26"
                      y="27"
                      width="9"
                      height="13"
                      rx="4.5"
                      transform="rotate(-90 26 27)"
                      fill="#1D2130"
                    />
                    <rect
                      x="31"
                      y="38"
                      width="9"
                      height="8"
                      rx="4"
                      transform="rotate(-90 31 38)"
                      fill="#1D2130"
                    />
                  </svg>
                </div>
                <div className="right flex items-start justify-center flex-col">
                  <h2 className="text-xl sm:text-2xl md:text-3xl">Platinium</h2>
                  <p className="text-sm sm:text-md font-light">
                    For the best results
                  </p>
                </div>
              </div>
              <div className="horizontal w-full h-[2px] bg-grey m-4"></div>
              <div className="regular-informations flex items-start flex-col gap-4 sm:gap-5 p-3">
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Limited Projects</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Regular Support Business</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">1 month free trial</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">20 GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl">
                    {selected === "monthly"
                      ? platiniumMonthlyPrice
                      : platiniumYearlyPrice}
                  </h3>
                  <p className="font-light text-sm text-center">
                    For Limited Period
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl flex items-center justify-center before:ease relative h-12 sm:h-14 w-28 sm:w-36 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40 drop-shadow-xl">
                  <Link to="/pricing" className="text-secondary relative z-10">
                    Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <div className="standart flex items-center justify-center flex-col bg-secondary rounded-2xl border-secondary cursor-pointer border-4 border-transparent hover:border-quality hover:bg-card transition-all duration-300 ease-in-out w-full sm:w-1/3 mt-6 sm:mt-0">
              <div className="title flex items-start justify-start gap-4 sm:gap-5 py-6 sm:py-8 px-6 sm:px-12">
                <div className="left flex items-start justify-center">
                  <svg
                    className="first-svg"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="27" cy="27" r="27" fill="#E6E6E6" />
                    <rect
                      x="16"
                      y="28"
                      width="9"
                      height="9"
                      rx="4.5"
                      fill="#1D2130"
                    />
                    <rect
                      x="15"
                      y="17"
                      width="9"
                      height="9"
                      rx="4.5"
                      fill="#1D2130"
                    />
                    <rect
                      x="27"
                      y="17"
                      width="9"
                      height="20"
                      rx="4.5"
                      fill="#1D2130"
                    />
                  </svg>
                </div>
                <div className="right flex items-start justify-center flex-col">
                  <h2 className="text-xl sm:text-2xl md:text-3xl">Standart</h2>
                  <p className="text-sm sm:text-md font-light">Most Popular</p>
                </div>
              </div>
              <div className="horizontal w-full h-[2px] bg-grey m-4"></div>
              <div className="regular-informations flex items-start flex-col gap-4 sm:gap-5 p-3">
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Limited Projects</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Regular Support Business</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">1 month free trial</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">10 GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-xl sm:text-2xl bg-check rounded-[50%] p-1" />
                  <p className="text-sm sm:text-md">Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl">
                    {selected === "monthly"
                      ? standartMonthlyPrice
                      : standartYearlyPrice}
                  </h3>
                  <p className="font-light text-sm text-center">
                    Billing Monthly
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl flex items-center justify-center before:ease relative h-12 sm:h-14 w-28 sm:w-36 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40 drop-shadow-xl">
                  <Link to="/pricing" className="text-secondary relative z-10">
                    Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="faq w-full flex flex-col sm:flex-row items-start justify-center p-6 sm:p-8 md:p-10 mt-5 mb-24"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,231,0.12657563025210083) 0%, rgba(255,255,255,1) 100%)",
          }}
        >
          <div className="left flex items-start flex-col gap-4 p-6 sm:p-8 md:p-10 text-primary w-full sm:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl w-full sm:w-[80%]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-md font-light w-full sm:w-[80%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </div>
          <div className="questions flex items-start flex-col gap-4 w-full sm:w-1/2">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="question bg-secondary px-6 sm:px-8 py-4 sm:py-6 rounded-xl text-primary w-full h-auto transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <div className="q-container flex items-center justify-between gap-4 sm:gap-16">
                  <h2 className="text-sm sm:text-lg">
                    {index === 1
                      ? "How do I grow my business?"
                      : index === 2
                      ? "How do I contact the support?"
                      : index === 3
                      ? "Can I cancel my subscription?"
                      : "Is a credit card required?"}
                  </h2>
                  {openQuestion === index ? (
                    <FaMinus
                      className="cursor-pointer"
                      onClick={() => toggleAnswer(index)}
                    />
                  ) : (
                    <FaPlus
                      className="cursor-pointer"
                      onClick={() => toggleAnswer(index)}
                    />
                  )}
                </div>
                {openQuestion === index && (
                  <p className="mt-4 text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
