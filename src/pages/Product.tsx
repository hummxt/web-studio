import "./Home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import dashboardImage from "../assets/images/dashboard.svg";
import logo1 from "../assets/images/home-images/Logo 1.svg";
import logo2 from "../assets/images/home-images/Logo 2.svg";
import logo3 from "../assets/images/home-images/Logo 3.svg";
import logo4 from "../assets/images/home-images/Logo 4.svg";
import logo5 from "../assets/images/product-images/Logo 5.svg";
import tracker from "../assets/images/product-images/time-tracker.svg";
import smallDashboard from "../assets/images/small-dashboard.svg";
import time from "../assets/images/product-images/real-time.svg";
import ai from "../assets/images/product-images/ai.svg";
import security from "../assets/images/product-images/security.svg";
import colaborate from "../assets/images/product-images/colaborate.svg";
import features from "../assets/images/product-images/features.svg";
import notes from "../assets/images/product-images/notes.svg";
import bilmirem from "../assets/images/home-images/bilmirem.svg";
import chat from "../assets/images/home-images/chat.svg";
import bot from "../assets/images/home-images/bot.svg";

function Product() {
  return (
    <>
      <div className="min-w-full flex items-center justify-center flex-col">
      <div
    className="absolute inset-0 w-full h-full rounded-full blur-3xl z-0"
    style={{
      background: "linear-gradient(132deg, rgba(0,255,231,0.17699579831932777) 0%, rgba(255,255,255,1) 100%)",
    }}
  />
        <div className="services flex flex-col items-center justify-center w-full h-auto p-10 z-0">
          <div className="top flex flex-col lg:flex-row items-center justify-center m-10">
            <div className="left flex flex-col items-start gap-6 lg:w-1/2">
              <h1 className="text-primary text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[80%]">
                Grow your Sales and Services
              </h1>
              <p className="font-light w-full lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="button flex gap-4">
              <div className="trial p-6 bg-primary rounded-xl flex items-center justify-center before:ease relative h-14 w-36 overflow-hidden text-secondary shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40 drop-shadow-xl">
                  <Link to="/pricing" className="text-secondary relative z-10">
                    Get Started
                  </Link>
                </div>

                <div className="group relative h-14 w-36 overflow-hidden border-2 border-grey rounded-xl bg-secondary text-primary transition-all duration-500 hover:bg-primary hover:text-secondary">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-bold">
                      <FaArrowRightLong />
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="flex h-full w-full items-center justify-center text-inherit no-underline"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="right flex items-center justify-center w-full lg:w-1/2 mt-10 lg:mt-0">
              <img
                src={dashboardImage}
                className="w-[100%] md:w-[80%] lg:w-[60%]"
                alt="Dashboard Image"
              />
            </div>
          </div>
          <div className="bottom w-full flex items-center justify-center mt-10">
          <div className="logos flex flex-wrap justify-between items-center gap-6 md:gap-10 p-6 md:p-10 w-full md:w-[90%] mx-auto mt-10 z-0">
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-24 md:w-40 h-auto"
            />
          ))}
        </div>
          </div>
        </div>
        <div
  className="information-company grid place-items-center w-full px-4 py-10 mt-12 text-primary z-0"
  style={{
    background:
      "linear-gradient(90deg, rgba(0,232,255,0.174) 0%, rgba(0,232,255,0.227) 47%)",
  }}
>
  <h1 className="text-2xl sm:text-3xl lg:text-4xl w-full sm:w-[80%] lg:w-[40%] mt-10 text-center">
    Get the best out of your company with our service
  </h1>
  <div className="informations grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 bg-secondary rounded-[40px] p-6 sm:p-12 lg:p-20 mt-10 w-full max-w-7xl">
    <div className="privacy flex flex-col items-start gap-4">
      <img src={security} alt="Security" className="w-12 h-auto" />
      <h2 className="text-xl">Security and privacy</h2>
      <p className="text-md font-light">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>
    </div>
    <div className="ai flex flex-col items-start gap-4">
      <img src={ai} alt="AI" className="w-12 h-auto" />
      <h2 className="text-xl">Built-in AI features</h2>
      <p className="text-md font-light">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>
    </div>
    <div className="collaborate flex flex-col items-start gap-4">
      <img src={colaborate} alt="Collaborate" className="w-12 h-auto" />
      <h2 className="text-xl">Collaborate with others</h2>
      <p className="text-md font-light">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>
    </div>
    <div className="privacy flex flex-col items-start gap-4">
      <img src={time} alt="Real-time" className="w-12 h-auto" />
      <h2 className="text-xl">Real time sync</h2>
      <p className="text-md font-light">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>
    </div>
    <div className="features flex flex-col items-start gap-4">
      <img src={features} alt="Features" className="w-12 h-auto" />
      <h2 className="text-xl">Built-in AI features</h2>
      <p className="text-md font-light">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>
    </div>
    <div className="notes flex flex-col items-start gap-4">
      <img src={notes} alt="Notes" className="w-12 h-auto" />
      <h2 className="text-xl">Easy notes organization</h2>
      <p className="text-md font-light">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>
    </div>
  </div>
</div>

<div className="client-feedback relative flex items-center justify-center w-full h-auto p-6 md:p-10 lg:p-20 text-primary overflow-hidden">
  <div
    className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] rounded-full blur-3xl"
    style={{
      background:
        "linear-gradient(132deg, rgba(0,238,243,0.283) 0%, rgba(255,255,255,1) 100%)",
    }}
  />
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full max-w-7xl mx-auto gap-8">
    <div className="left flex flex-col items-start gap-6 p-4 md:p-10">
      <h4 className="text-gradient text-2xl">Marketing insights</h4>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Data-driven client feedback
      </h2>
      <p className="text-md font-light">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
      </p>
    </div>
    <div className="right flex items-center justify-center p-4 md:p-10">
      <img
        src={smallDashboard}
        alt="Dashboard"
        className="lg:w-[70%] sm:w-[50%] md:w-[10%] xs:w-[10%] h-auto p-3"
      />
    </div>
  </div>
</div>

<div className="time-tracker flex flex-col lg:flex-row items-center justify-center w-full gap-6 p-6 lg:p-14 text-primary">
  <div className="left flex items-center justify-center w-full">
    <img src={tracker} alt="Time Tracker" className="w-[90%] sm:w-[60%] p-3" />
  </div>
  <div className="right flex items-start justify-center flex-col w-full gap-4 p-6 sm:p-10">
    <h4 className="text-gradient text-xl sm:text-2xl">Time tracker</h4>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[80%] leading-tight">
      Track your project performance
    </h2>
    <p className="text-sm sm:text-md font-light w-full lg:w-[80%]">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
    </p>
  </div>
</div>

<div className="features flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 mb-10 sm:mb-16 md:mb-20 w-[90%] sm:w-[80%] text-primary">
  <div className="row flex items-start justify-center gap-4 flex-col p-4 sm:p-6">
    <img src={bilmirem} alt="Bilmirem Icon" className="w-12 h-auto" />
    <h2 className="text-xl sm:text-2xl md:text-3xl">Advanced 256-bit encryption</h2>
    <p className="text-sm sm:text-md font-light">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
    </p>
  </div>
  <div className="hidden sm:block w-[2px] h-20 sm:h-32 lg:h-48 bg-grey mx-4 sm:mx-6"></div>
  <div className="row flex items-start justify-center gap-4 flex-col p-4 sm:p-6">
    <img src={chat} alt="Chat Icon" className="w-12 h-auto" />
    <h2 className="text-xl sm:text-2xl md:text-3xl">Simple collaboration tools</h2>
    <p className="text-sm sm:text-md font-light">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
    </p>
  </div>
  <div className="hidden sm:block w-[2px] h-20 sm:h-32 lg:h-48 bg-grey mx-4 sm:mx-6"></div>
  <div className="row flex items-start justify-center gap-4 flex-col p-4 sm:p-6">
    <img src={bot} alt="Bot Icon" className="w-12 h-auto" />
    <h2 className="text-xl sm:text-2xl md:text-3xl">Customizable AI features</h2>
    <p className="text-sm sm:text-md font-light">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
    </p>
  </div>
</div>
</div>
    </>
  );
}

export default Product;
