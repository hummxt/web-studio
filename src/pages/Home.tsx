import "./Home.css";
import { Link } from "react-router-dom";
import dashboardImage from "../assets/images/dashboard.svg";
import activityImage from "../assets/images/home-images/activity.svg";
import arrowIcon from "../assets/images/home-images/Icon.svg";
import logo1 from "../assets/images/home-images/Logo 1.svg";
import logo2 from "../assets/images/home-images/Logo 2.svg";
import logo3 from "../assets/images/home-images/Logo 3.svg";
import logo4 from "../assets/images/home-images/Logo 4.svg";
import logo5 from "../assets/images/product-images/Logo 5.svg";
import sales from "../assets/images/home-images/Feature Icon with circle.svg";
import management from "../assets/images/home-images/Feature Icon with circle (1).svg";
import report from "../assets/images/home-images/Feature Icon with circle (2).svg";
import bilmirem from "../assets/images/home-images/bilmirem.svg";
import chat from "../assets/images/home-images/chat.svg";
import bot from "../assets/images/home-images/bot.svg";
import ceo from "../assets/images/home-images/ceo.png";
import pisik from "../assets/images/home-images/pisik.png";
import idk from "../assets/images/home-images/idk.png";
import { MdSecurity } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TiHeadphones } from "react-icons/ti";

function Home() {
  return (
    <>
      <div className="container flex justify-center items-center flex-col">
        <div className="free-trial h-auto flex justify-center items-center flex-col gap-6 md:gap-8 p-6 md:p-8 rounded-lg relative overflow-hidden mt-10">
          <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl w-[90%] sm:w-[80%] md:w-[60%] text-center">
            The Best Software to Grow your Sales and Services
          </h1>
          <p className="text-primary font-semibold text-sm sm:text-base md:text-lg w-[90%] sm:w-[80%] md:w-[60%] text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <div
            className="get-free-trial flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 p-3 sm:p-2 rounded-2xl w-[90%] sm:w-[70%] md:w-[40%] h-auto drop-shadow-md"
            style={{
              background: "linear-gradient(145deg, #ffffff, #ffffff)",
              boxShadow:
                "0px 3px 5px rgba(0, 0, 0, 0.1), inset 0px 1px 3px rgba(255, 255, 255, 0.6)",
            }}
          >
            <input
              type="text"
              placeholder="Enter Your Email"
              className="rounded-lg p-2 sm:p-3 border-none outline-none w-full sm:w-auto flex-1 text-sm sm:text-base"
            />
            <div className="trial p-3 sm:p-4 bg-primary rounded-2xl flex items-center justify-center relative w-full sm:w-36 md:w-40 overflow-hidden border text-white shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-10 before:w-4 sm:before:w-6 before:translate-x-8 sm:before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-80">
              <Link
                to="/contact"
                className="text-secondary relative z-10 text-center text-sm sm:text-base"
              >
                Get Free Trial
              </Link>
            </div>
          </div>
        </div>
        <img
          src={dashboardImage}
          alt="Dashboard Preview"
          className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto z-0 mx-auto"
        />
        <div className="quality w-full h-auto flex flex-col items-center justify-center mt-10 p-6 md:p-10">
          <div className="quality-text flex items-center justify-center flex-col text-center gap-4">
            <h1 className="text-gradient text-lg sm:text-xl">High-Quality</h1>
            <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl w-[90%] sm:w-[80%] md:w-[60%] text-center">
              We have the Best Solution for your Business
            </h2>
          </div>
          <div className="quality-provide flex flex-col lg:flex-row items-start justify-center w-full lg:w-[80%] gap-10 mt-10 md:mt-20">
            <div className="security flex items-start justify-center gap-4 flex-col p-4 text-center lg:text-left">
              <div className="icon text-quality text-3xl sm:text-4xl mx-auto lg:mx-0">
                <MdSecurity />
              </div>
              <h1 className="text-xl sm:text-2xl w-[90%] sm:w-[80%] lg:w-[70%] text-primary mx-auto lg:mx-0">
                High security to protect from piracy
              </h1>
              <h4 className="font-light w-[90%] sm:w-[80%] lg:w-full mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </h4>
            </div>
            <div className="performance flex items-start justify-center gap-4 flex-col p-4 text-center lg:text-left">
              <div className="icon text-quality text-3xl sm:text-4xl mx-auto lg:mx-0">
                <BiLike />
              </div>
              <h1 className="text-xl sm:text-2xl w-[90%] sm:w-[70%] lg:w-[60%] text-primary mx-auto lg:mx-0">
                Premium quality performance
              </h1>
              <h4 className="font-light w-[90%] sm:w-[80%] lg:w-full mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </h4>
            </div>
            <div className="support flex items-start justify-center gap-4 flex-col p-4 text-center lg:text-left">
              <div className="icon text-quality text-3xl sm:text-4xl mx-auto lg:mx-0">
                <TiHeadphones />
              </div>
              <h1 className="text-xl sm:text-2xl w-[90%] sm:w-[80%] lg:w-[70%] text-primary mx-auto lg:mx-0">
                Full time customer support - 24/7
              </h1>
              <h4 className="font-light w-[90%] sm:w-[80%] lg:w-full mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </h4>
            </div>
          </div>
        </div>
        <div className="work flex flex-col lg:flex-row items-center justify-center mt-20 mb-20 p-6 md:p-10 w-[90%] md:w-[80%] mx-auto">
          <div className="left flex items-start justify-center flex-col gap-6 text-primary text-center lg:text-left">
            <h3 className="text-gradient text-lg">
              Why should you work with us?
            </h3>
            <h1 className="text-2xl sm:text-3xl w-[90%] lg:w-[50%]">
              To upscale your business to the next level
            </h1>
            <p className="w-[90%] sm:w-[80%] lg:w-[60%] font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
          </div>
          <div className="right flex flex-col items-center justify-center gap-6 mt-10 lg:mt-0 lg:w-[60%] text-primary">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="row flex items-center gap-4 text-center lg:text-left"
                >
                  <img
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="w-10 sm:w-12"
                  />
                  <p className="text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="conversion flex flex-col lg:flex-row items-center justify-center w-full h-auto p-6 md:p-20 relative">
          <div
            className="absolute top-0 left-0 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] rounded-full blur-3xl"
            style={{
              background:
                "linear-gradient(132deg, rgba(0,238,243,0.283) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
          <div className="left-info flex flex-col items-center lg:items-start w-full lg:w-[50%] gap-6 text-primary z-10 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl w-[90%] lg:w-[70%]">
              More impressions, more conversions
            </h1>
            <p className="text-sm sm:text-base w-[90%] lg:w-[72%] font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
            <div className="trial p-4 md:p-6 bg-primary rounded-xl flex items-center justify-center relative h-12 w-32 md:w-40 sm:w-60 overflow-hidden border border-green-500 bg-green-500 text-white shadow-lg transition-all hover:before:-translate-x-40">
              <Link to="/contact" className="text-secondary relative z-10">
                Get Free Trial
              </Link>
            </div>
          </div>
          <div className="right-image w-[90%] md:w-[60%] lg:w-[50%] z-10 mt-10 lg:mt-0">
            <img
              src={activityImage}
              alt="Activity Image"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
        <div className="logos flex flex-wrap justify-between items-center gap-6 md:gap-10 p-6 md:p-10 w-full md:w-[90%] mx-auto mt-10 z-0">
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-20 md:w-40 h-auto"
            />
          ))}
        </div>
        <div className="sales flex flex-col lg:flex-row items-center justify-center mt-16 mb-20 p-6 md:p-10 w-[90%] lg:w-[80%] mx-auto">
          <div className="left-dicover flex flex-col gap-6 text-primary text-center lg:text-left w-full lg:w-[50%]">
            <h3 className="text-gradient text-lg">Discover More</h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl w-full lg:w-[70%] mx-auto lg:mx-0">
              Analyze your sales and marketing leads
            </h1>
            <p className="w-full md:w-[90%] lg:w-[80%] mx-auto lg:mx-0 font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.
            </p>
          </div>
          <div className="right-info flex flex-col gap-6 mt-10 lg:mt-0 w-full lg:w-[50%] text-primary">
            {[
              { icon: sales, title: "Sales Tracking" },
              { icon: management, title: "Project Management" },
              { icon: report, title: "Activity Report" },
            ].map((item, index) => (
              <div key={index} className="row flex gap-4 items-center">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-12 h-12"
                />
                <div className="info flex flex-col gap-2">
                  <h2 className="text-lg md:text-xl">{item.title}</h2>
                  <p className="font-light text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="flex items-center justify-center text-2xl md:text-3xl text-primary mb-10">
          Features
        </h1>
        <div className="features grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-center w-[90%] lg:w-[80%] mx-auto text-primary">
          {[
            { icon: bilmirem, title: "Advanced 256-bit encryption" },
            { icon: chat, title: "Simple collaboration tools" },
            { icon: bot, title: "Customizable AI features" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-lg shadow-md"
            >
              <img
                src={feature.icon}
                alt={`${feature.title} Icon`}
                className="w-12 h-12"
              />
              <h2 className="text-xl md:text-2xl">{feature.title}</h2>
              <p className="font-light text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          ))}
        </div>
        <h1 className="flex items-center justify-center text-2xl md:text-3xl text-primary p-4 mt-20 ">
          The stunning results our customers have experienced
        </h1>
        <div className="customers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-[90%] mb-20 mx-auto text-primary">
          {[
            { img: ceo, name: "Ron Wood", position: "CEO" },
            { img: pisik, name: "Mark Mason", position: "Marketing Manager" },
            { img: idk, name: "Sam Preston", position: "CTO" },
          ].map((customer, index) => (
            <div
              key={index}
              className="card flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg border border-border shadow-md"
            >
              <p className="text-center font-light text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore.
              </p>
              <div className="avatar flex flex-col items-center gap-2">
                <img
                  src={customer.img}
                  alt={`${customer.name} Avatar`}
                  className="w-12 h-12 rounded-full"
                />
                <div className="name-position text-center">
                  <h4 className="font-medium">{customer.name}</h4>
                  <h4 className="font-light text-sm">{customer.position}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
