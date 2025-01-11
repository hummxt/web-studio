import "./Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import dashboardImage from "../assets/images/dashboard.svg";
import logo1 from "../assets/images/Logo 1.svg";
import logo2 from "../assets/images/Logo 2.svg";
import logo3 from "../assets/images/Logo 3.svg";
import logo4 from "../assets/images/Logo 4.svg";
import logo5 from "../assets/images/Logo 5.svg";
import tracker from "../assets/images/time-tracker.svg";
import smallDashboard from "../assets/images/small-dashboard.svg";
import time from "../assets/images/real-time.svg";
import ai from "../assets/images/ai.svg";
import security from "../assets/images/security.svg";
import colaborate from "../assets/images/colaborate.svg";
import features from "../assets/images/features.svg";
import notes from "../assets/images/notes.svg";
import bilmirem from "../assets/images/bilmirem.svg";
import chat from "../assets/images/chat.svg";
import bot from "../assets/images/bot.svg";


function Product() {
  return (
    <>
      <div className="min-w-full flex items-center justify-center flex-col">
        <div className="services flex items-center justify-center flex-col w-full h-auto p-10">
          <div className="top flex items-center justify-center m-10">
            <div className="left flex items-start flex-col gap-6">
              <h1 className="text-primary text-5xl w-[80%]">
                Grow your Sales and Services
              </h1>
              <p className="font-light w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="button flex items-start gap-4">
                <div className="trial p-6 bg-primary rounded-xl w-36 h-14 flex items-center justify-center">
                  <Link to="/product" className="text-secondary">
                    Get Started
                  </Link>
                </div>
                <Link
                  to="/contact"
                  className="contact p-6 bg-secondary text-primary border-2 border-grey rounded-xl w-36 h-14 flex items-center justify-center"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <div
              className="right flex items-start justify-center w-100"
              style={{
                background:
                  "radial-gradient(circle, rgba(0, 232, 255, 0.23) 0%, rgba(255, 255, 255, 1) 100%)",
              }}
            >
              <img
                src={dashboardImage}
                className="w-[80%]"
                alt="Dashboard Image"
              />
            </div>
          </div>
          <div className="bottom w-full flex items-center justify-center">
            <div className="logos w-full h-10 flex items-center justify-between p-20">
              <img src={logo1} alt="Logo 1" className="w-40 h-auto" />
              <img src={logo2} alt="Logo 2" className="w-40 h-auto" />
              <img src={logo3} alt="Logo 3" className="w-40 h-auto" />
              <img src={logo4} alt="Logo 4" className="w-40 h-auto" />
              <img src={logo4} alt="Logo 5" className="w-40 h-auto" />
            </div>
          </div>
        </div>
        <div
          className="information-company flex items-center justify-center flex-col w-[1519px] p-10 mt-12 text-primary"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,232,255,0.1741946778711485) 0%, rgba(0,232,255,0.2274159663865546) 47%)",
          }}
        >
          <h1 className="text-4xl w-[40%] mt-10 text-center">
            Get the best out of your company with our service
          </h1>
          <div className="informations w-full grid self-center grid-cols-3 gap-12 bg-secondary rounded-[40px] p-20 mt-10">
            <div className="privacy w-full h-auto flex items-start justify-center gap-4 flex-col">
              <img src={security} alt="Security" className="w-12 h-auto" />
              <h2 className="text-xl">Security and privacy</h2>
              <p className="text-md font-light w-[90%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="ai w-full h-auto flex items-start justify-center gap-4 flex-col">
              <img src={ai} alt="ai" className="w-12 h-auto" />
              <h2 className="text-xl">Built-in AI features</h2>
              <p className="text-md font-light w-[90%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="collaborate w-full h-auto flex items-start justify-center gap-4 flex-col">
              <img src={colaborate} alt="Collaborate" className="w-12 h-auto" />
              <h2 className="text-xl">Collaborate with others</h2>
              <p className="text-md font-light w-[90%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="privacy w-full h-auto flex items-start justify-center gap-4 flex-col">
              <img src={time} alt="Real-time" className="w-12 h-auto" />
              <h2 className="text-xl">Real time sync</h2>
              <p className="text-md font-light w-[90%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="features w-full h-auto flex items-start justify-center gap-4 flex-col">
              <img src={features} alt="Features" className="w-12 h-auto" />
              <h2 className="text-xl">Built-in AI features</h2>
              <p className="text-md font-light w-[90%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="notes w-full h-auto flex items-start justify-center gap-4 flex-col">
              <img src={notes} alt="Notes" className="w-12 h-auto" />
              <h2 className="text-2xl">Easy notes organization</h2>
              <p className="text-md font-light w-[90%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
          </div>
        </div>
        <div className="client-feedback flex items-center justify-center text-primary p-14">
          <div className="left flex items-start justify-center flex-col gap-6 p-10">
            <h4 className="text-gradient text-2xl">Marketing insights</h4>
            <h2 className="text-5xl w-[60%] leading-tight">
              Data-driven client feedback
            </h2>
            <p className="text-md font-light w-[80%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
          <div className="right w-full flex items-center justify-center p-10">
            <img
              src={smallDashboard}
              alt="Dashboard"
              className="w-[80%] h-auto"
            />
          </div>
        </div>
        <div className="time-tracker flex items-center justify-center w-full gap-6 p-14 text-primary">
          <div className="left flex items-center justify-center w-full">
            <img src={tracker} alt="Time Tracker" className="w-[80%]" />
          </div>
          <div className="right flex items-start justify-center flex-col w-full gap-6 p-10">
            <h4 className="text-gradient text-2xl">Time tracker</h4>
            <h2 className="text-5xl w-[80%] leading-tight">
              Track your project performance
            </h2>
            <p className="text-md font-light w-[80%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
        </div>
        <div className="lead-generation flex items-center justify-center text-primary p-14">
          <div className="left flex items-start justify-center flex-col gap-6 p-10">
            <h4 className="text-gradient text-2xl">Lead Generation</h4>
            <h2 className="text-5xl leading-tight">
            More leads that convert
            </h2>
            <p className="text-md font-light w-[80%]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
          <div className="right w-full flex items-center justify-center p-10" 
          style={{
            borderRadius: "160px",
            background: "radial-gradient(circle, rgba(0,255,231,0.12657563025210083) 0%, rgba(255,255,255,1) 100%)"
          }}
          >
            <img
              src={smallDashboard}
              alt="Dashboard"
              className="w-[80%] h-auto"
            />
          </div>
        </div>
        <div className="time-tracker flex items-center justify-center w-full gap-6 p-14 text-primary">
          <div className="left flex items-center justify-center w-full">
            <img src={tracker} alt="Time Tracker" className="w-[80%]" />
          </div>
          <div className="right flex items-start justify-center flex-col w-full gap-6 p-10">
            <h4 className="text-gradient text-2xl">Remote Teams</h4>
            <h2 className="text-5xl leading-tight">
            Real-time collaboration
            </h2>
            <p className="text-md font-light w-[84%]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
        </div>
        <h1 className="flex items-center justify-center text-3xl text-primary p-4 mt-10">Features</h1>
        <div className="features flex items-center justify-center flex-row mt-10 mb-20 w-[80%] text-primary">
          <div className="row flex items-start justify-center gap-4 flex-col p-4">
            <img src={bilmirem} alt="Bilmirem Icon" />
            <h2 className="text-3xl">Advanced 256-bit encryption</h2>
            <p className="font-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          </div>
          <div className="w-[2px] h-20 sm:h-64 lg:h-56 bg-grey m-4"></div>
          <div className="row flex items-start justify-center gap-4 flex-col p-4">
          <img src={chat} alt="Chat Icon" />
            <h2 className="text-3xl">Simple collaboration tools</h2>
            <p className="font-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          </div>
          <div className="w-[2px] h-20 sm:h-64 lg:h-56 bg-grey m-4"></div>
          <div className="row flex items-start justify-center gap-4 flex-col p-4">
          <img src={bot} alt="Bot Icon" />
            <h2 className="text-3xl">Customizable AI features</h2>
            <p className="font-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Product;
