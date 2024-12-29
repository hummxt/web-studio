import "./Home.css";
import dashboardImage from "../assets/images/dashboard.svg";
import activityImage from "../assets/images/activity.svg";
import arrowIcon from "../assets/images/Icon.svg";
import logo1 from "../assets/images/Logo 1.svg";
import logo2 from "../assets/images/Logo 2.svg";
import logo3 from "../assets/images/Logo 3.svg";
import logo4 from "../assets/images/Logo 4.svg";
import logo5 from "../assets/images/Logo 5.svg";
import sales from "../assets/images/Feature Icon with circle.svg"
import management from "../assets/images/Feature Icon with circle (1).svg"
import report from "../assets/images/Feature Icon with circle (2).svg"
import { MdSecurity } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { TiHeadphones } from "react-icons/ti";

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
        <div className="work flex items-center justify-center flex-row mt-20 mb-20 p-10 w-[80%]">
          <div className="left flex items-right justify-center flex-col gap-6 text-primary">
            <h3 className="text-gradient text-lg">Why should you work with us?</h3>
            <h1 className="text-3xl w-[50%]">To upscale your business to the next level</h1>
            <p className="w-[60%] font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="right flex items-start justify-center flex-col w-[60%] gap-6 text-primary">
            <div className="row flex items-center justify-center gap-4">
              <img src={arrowIcon} alt="Arrow Icon" className="w-12"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="row flex items-center justify-center gap-4">
            <img src={arrowIcon} alt="Arrow Icon" className="w-12"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="row flex items-center justify-center gap-4">
            <img src={arrowIcon} alt="Arrow Icon" className="w-12"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
        <div className="conversion flex justify-center items-center w-full h-auto p-20" style={{
    background: "linear-gradient(90deg, rgba(58,180,177,0.28904061624649857) 72%, rgba(96,32,251,0) 90%)",
  }}>
          <div className="left-info flex justify-center items-start flex-col w-[50%] gap-6 text-primary">
            <h1 className="text-4xl w-[70%]">More impressions, more conversions</h1>
            <p className="text-md font-light w-[72%]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
            <div className="trial p-6 bg-primary rounded-xl w-36 h-14 flex items-center justify-center">
            <a href="#" className="text-secondary">Free Trial</a>
            </div>
          </div>
          <div className="right-image">
            <img src={activityImage} alt="Activity Image" className="w-[88%] h-100" />
          </div>
        </div>
        <div className="logos w-[86%] h-10 flex items-center justify-between p-20 mt-5">
          <img src={logo1} alt="Logo 1" className="w-40 h-auto" />
          <img src={logo2} alt="Logo 2" className="w-40 h-auto"/>
          <img src={logo3} alt="Logo 3" className="w-40 h-auto"/>
          <img src={logo4} alt="Logo 4" className="w-40 h-auto"/>
          <img src={logo4} alt="Logo 5" className="w-40 h-auto"/>
        </div>
        <div className="sales flex items-center justify-center flex-row mt-10 mb-20 p-10 w-[80%]">
        <div className="left-dicover flex items-right justify-center flex-col gap-6 text-primary">
            <h3 className="text-gradient text-lg">Discover More</h3>
            <h1 className="text-4xl w-[70%]">Analyze your sales and marketing leads</h1>
            <p className="w-[80%] font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="right-info flex items-center justify-center flex-col gap-4 w-[100%] text-primary">
            <div className="row flex gap-4">
              <img src={sales} alt="Sales Icon" />
              <div className="sales-info flex gap-2 flex-col justify-center items-start">
                <h2>Sales Tracking</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
            <div className="row flex gap-4">
            <img src={management} alt="Project Management Icon" />
              <div className="management-info flex gap-2 flex-col justify-center items-start">
                <h2>Project Management</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
            <div className="row flex gap-4">
            <img src={report} alt="Report Icon" />
              <div className="report-info flex gap-2 flex-col justify-center items-start">
                <h2>Activity Report</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
