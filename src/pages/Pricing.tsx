import { useState } from "react";
import "./Pricing.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import regularIcon from "../assets/images/regular.svg";
import platiniumIcon from "../assets/images/platinium.svg";
import standartIcon from "../assets/images/standart.svg";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Pricing() {
  const [selected, setSelected] = useState("monthly");
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index) => {
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
          className="absolute top-1/2 left-0 w-[800px] h-[600px] rounded-full blur-3xl -translate-y-1/2 z-0"
          style={{
            background:
              "linear-gradient(132deg, rgba(0,255,231,0.17699579831932777) 0%, rgba(255,255,255,1) 100%)",
          }}
        />
        <div className="pricing-plans flex items-center justify-center flex-col p-10 text-primary z-0">
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
                  <svg
                    className="second-svg hidden"
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
                      fill="#6B7CFF"
                    />
                    <rect
                      x="16"
                      y="16"
                      width="20"
                      height="9"
                      rx="4.5"
                      fill="#6B7CFF"
                    />
                    <rect
                      x="27"
                      y="27"
                      width="9"
                      height="13"
                      rx="4.5"
                      fill="#6B7CFF"
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
                  <p>3 GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-3xl">Free</h3>
                  <p className="font-light text-sm text-center">
                    For Limited Period
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl flex items-center justify-center before:ease relative h-14 w-36 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40 drop-shadow-xl">
                  <Link to="/" className="text-secondary relative z-10">
                    Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <div className="platinium flex items-center justify-center flex-col bg-secondary rounded-2xl border-secondary cursor-pointer border-4 border-transparent hover:border-quality hover:bg-card transition-all duration-300 ease-in-out">
              <div className="title flex items-start justify-start gap-5 py-8 px-12 mr-20">
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
                  <svg
                    className="second-svg hidden"
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
                      fill="#6B7CFF"
                    />
                    <rect
                      x="15"
                      y="27"
                      width="9"
                      height="9"
                      rx="4.5"
                      transform="rotate(-90 15 27)"
                      fill="#6B7CFF"
                    />
                    <rect
                      x="26"
                      y="27"
                      width="9"
                      height="13"
                      rx="4.5"
                      transform="rotate(-90 26 27)"
                      fill="#6B7CFF"
                    />
                    <rect
                      x="31"
                      y="38"
                      width="9"
                      height="8"
                      rx="4"
                      transform="rotate(-90 31 38)"
                      fill="#6B7CFF"
                    />
                  </svg>
                </div>
                <div className="right flex items-start justify-center flex-col">
                  <h2 className="text-3xl">Platinium</h2>
                  <p className="text-md font-light">For the best results</p>
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
                  <p>20 GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-3xl">
                    {selected === "monthly"
                      ? platiniumMonthlyPrice
                      : platiniumYearlyPrice}
                  </h3>
                  <p className="font-light text-sm text-center">
                    For Limited Period
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl flex items-center justify-center before:ease relative h-14 w-36 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40 drop-shadow-xl">
                  <Link to="/" className="text-secondary relative z-10">
                    Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <div className="standart flex items-center justify-center flex-col bg-secondary rounded-2xl border-secondary cursor-pointer border-4 border-transparent hover:border-quality hover:bg-card transition-all duration-300 ease-in-out">
              <div className="title flex items-start justify-start gap-5 py-8 px-12 mr-20">
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
                  <svg
                    className="second-svg hidden"
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
                      fill="#6B7CFF"
                    />
                    <rect
                      x="15"
                      y="17"
                      width="9"
                      height="9"
                      rx="4.5"
                      fill="#6B7CFF"
                    />
                    <rect
                      x="27"
                      y="17"
                      width="9"
                      height="20"
                      rx="4.5"
                      fill="#6B7CFF"
                    />
                  </svg>
                </div>
                <div className="right flex items-start justify-center flex-col">
                  <h2 className="text-3xl">Standart</h2>
                  <p className="text-md font-light">Most Popular</p>
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
                  <p>10 GB Storage</p>
                </div>
                <div className="info flex gap-4 items-center justify-center">
                  <IoCheckmarkSharp className="text-2xl bg-check rounded-[50%] p-1" />
                  <p>Ads Preview</p>
                </div>
              </div>
              <div className="get-plan flex items-center justify-center flex-col p-4">
                <p className="text-primary font-light text-sm p-3 text-center w-[80%]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="free flex items-center justify-center flex-col p-4 gap-1">
                  <h3 className="text-3xl">
                    {selected === "monthly"
                      ? standartMonthlyPrice
                      : standartYearlyPrice}
                  </h3>
                  <p className="font-light text-sm text-center">
                    Billing Monthly
                  </p>
                </div>
                <div className="trial bg-primary rounded-xl flex items-center justify-center before:ease relative h-14 w-36 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40 drop-shadow-xl">
                  <Link to="/" className="text-secondary relative z-10">
                    Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="faq w-full flex items-start justify-center p-10 mt-5 mb-24"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,231,0.12657563025210083) 0%, rgba(255,255,255,1) 100%)",
          }}
        >
          <div className="left flex items-start flex-col gap-4 p-10 text-primary">
            <h2 className="text-4xl w-[60%]">Frequently Asked Questions</h2>
            <p className="text-md font-light w-[64%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </div>
          <div className="questions flex items-start flex-col gap-4">
            <div className="question bg-secondary px-8 py-6 rounded-xl text-primary w-[470px] h-auto transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="q-container flex items-center justify-between gap-16">
                <h2 className="text-lg">How do I grow my business?</h2>
                {openQuestion === 1 ? (
                  <FaMinus
                    className="cursor-pointer"
                    onClick={() => toggleAnswer(1)}
                  />
                ) : (
                  <FaPlus
                    className="cursor-pointer"
                    onClick={() => toggleAnswer(1)}
                  />
                )}
              </div>

              {openQuestion === 1 && (
                <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              )}
            </div>
            <div className="question bg-secondary px-8 py-6 rounded-xl text-primary w-[470px] h-auto transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="q-container flex items-center justify-between gap-16">
                <h2 className="text-lg">How do I contact the support?</h2>
                {openQuestion === 2 ? (
                  <FaMinus
                    className="cursor-pointer"
                    onClick={() => toggleAnswer(2)}
                  />
                ) : (
                  <FaPlus
                    className="cursor-pointer"
                    onClick={() => toggleAnswer(2)}
                  />
                )}
              </div>
              {openQuestion === 2 && (
                <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              )}
            </div>
            <div className="question bg-secondary px-8 py-6 rounded-xl text-primary w-[470px] h-auto transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="q-container flex items-center justify-between gap-16">
                <h2 className="text-lg">Can I cancel my subscription?</h2>
                {openQuestion === 3 ? (
                  <FaMinus
                    className="cursor-pointer"
                    onClick={() => toggleAnswer(3)}
                  />
                ) : (
                  <FaPlus
                    className="cursor-pointer"
                    onClick={() => toggleAnswer(3)}
                  />
                )}
              </div>
              {openQuestion === 3 && (
                <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              )}
            </div>
            <div className="question bg-secondary px-8 py-6 rounded-xl text-primary w-[470px] h-auto transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="q-container flex items-center justify-between gap-16">
                <h2 className="text-lg">Is a credit card required?</h2>
                {openQuestion === 4 ? (
                  <FaMinus
                    className="cursor-pointer"
                    onClick={() => toggleAnswer(4)}
                  />
                ) : (
                  <FaPlus
                    className="cursor-pointer"
                    onClick={() => toggleAnswer(4)}
                  />
                )}
              </div>
              {openQuestion === 4 && (
                <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Pricing;
