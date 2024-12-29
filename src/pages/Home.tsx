import "./Home.css";
import dashboardImage from "../assets/images/dashboard.svg";
import { MdSecurity } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { TiHeadphones } from "react-icons/ti";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="container min-w-full flex justify-center items-center flex-col">
        <div className="free-trial h-auto flex justify-center items-center flex-col gap-10 p-10 rounded-lg">
          <h1 className="text-primary text-5xl w-[60%] text-center">
            The Best Software to Grow your Sales and Services
          </h1>
          <p className="text-primary font-semibold w-[60%] text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <div
            className="get-free-trial flex items-center justify-center gap-4 p-4 rounded-lg w-[40%] h-auto shadow-lg"
            style={{
              background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), inset 0px 2px 4px rgba(255, 255, 255, 0.6)",
            }}
          >
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border border-gray-300 rounded-lg p-3 border-none outline-none"
            />
            <button className="bg-primary text-secondary px-5 py-3 rounded-lg">
              Get Free Trial
            </button>
          </div>
        </div>
        <img src={dashboardImage} className="h-100" />
        <div className="quality w-[100%] h-auto flex flex-col items-center justify-center mt-10 p-10">
          <div className="quality-text flex items-center justify-center flex-col text-center gap-4">
            <h1 className="text-gradient text-xl ">High-Quality</h1>
            <h2 className="text-primary text-3xl w-[60%] text-center">
              We have the Best Solution for your Business
            </h2>
          </div>
          <div className="quality-provide flex items-start justify-center w-[80%] gap-10 mt-20">
            <div className="security flex items-start justify-center gap-4 flex-col p-4">
              <div className="icon text-quality text-4xl">
                <MdSecurity />
              </div>
              <h1 className="text-2xl w-[80%] text-primary">
                High security to protect from piracy
              </h1>
              <h4 className="font-light">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </h4>
            </div>
            <div className="performance flex items-start justify-center gap-4 flex-col p-4">
              <div className="icon text-quality text-4xl">
                <BiLike />
              </div>
              <h1 className="text-2xl w-[60%] text-primary">Premium quality performance</h1>
              <h4 className="font-light">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </h4>
            </div>
            <div className="support flex items-start justify-center gap-4 flex-col p-4">
              <div className="icon text-quality text-4xl">
                <TiHeadphones />
              </div>
              <h1 className="text-2xl w-[70%] text-primary">
                Full time customer support - 24/7
              </h1>
              <h4 className="font-light">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </h4>
            </div>
          </div>
        </div>
        <div className="work flex items-center justify-center flex-row mt-20 p-10 w-[80%]">
          <div className="left flex items-right justify-center flex-col gap-8">
            <h3 className="text-gradient">Why should you work with us?</h3>
            <h1 className="text-3xl w-[50%]">To upscale your business to the next level</h1>
            <p className="w-[60%] font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="right flex items-center justify-center flex-col">
            <div className="row flex items-center justify-center gap-4">
              <FaArrowAltCircleRight className="text-6xl text-primary"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="row">
              <FaArrowAltCircleRight />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="row">
              <FaArrowAltCircleRight />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
