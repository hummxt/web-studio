import { Link } from "react-router-dom";
import { PiCopyright } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div
        className="footer min-w-full h-auto flex items-center justify-center flex-col"
        style={{
          background:
            "linear-gradient(0deg, rgba(58,180,177,0.364670868347339) 55%, rgba(255,255,255,0) 90%)",
        }}
      >
        <div className="business w-full h-full flex items-center justify-center flex-col gap-8 text-primary">
          <h1 className="text-4xl text-center w-[40%]">
            Are you ready to grow your business with us?
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
          <div className="trial p-6 bg-primary rounded-xl flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40">
            <Link to="/pricing" className="text-secondary relative z-10">
              View Pricing
            </Link>
          </div>
        </div>
        <footer className="min-w-full h-auto flex items-center justify-center flex-col bg-primary mt-20 p-4">
          <div className="col w-full h-auto flex items-start justify-center p-12 gap-24">
            <div className="row flex items-start justify-center flex-col gap-1">
              <h2 className="text-secondary text-lg">Company</h2>
              <h4 className="text-grey font-light text-md">About us</h4>
              <h4 className="text-grey font-light text-md">Why Choose us</h4>
              <h4 className="text-grey font-light text-md">Pricing</h4>
              <h4 className="text-grey font-light text-md">Testimonial</h4>
            </div>
            <div className="row flex items-start justify-center flex-col gap-1">
              <h2 className="text-secondary text-lg">Resources</h2>
              <h4 className="text-grey font-light text-md">Privacy Policy</h4>
              <h4 className="text-grey font-light text-md">
                Terms and Condition
              </h4>
              <h4 className="text-grey font-light text-md">Blog</h4>
              <h4 className="text-grey font-light text-md">Contact us</h4>
            </div>
            <div className="row flex items-start justify-center flex-col gap-1">
              <h2 className="text-secondary text-lg">Product</h2>
              <h4 className="text-grey font-light text-md">
                Project management
              </h4>
              <h4 className="text-grey font-light text-md">Time tracker</h4>
              <h4 className="text-grey font-light text-md">Time schedule</h4>
              <h4 className="text-grey font-light text-md">
                Remote Collaboration
              </h4>
            </div>
            <div className="row flex items-start justify-center flex-col gap-6">
              <div className="logo text-2xl text-secondary">
                <h2>{"{ FinCompany"}</h2>
              </div>
              <div className="flex items-start justify-center flex-col gap-3">
                <div className="subscribe text-md ">
                  <h3 className="text-secondary">
                    Subscribe to our Newsletter
                  </h3>
                </div>
                <form className="flex space-x-2 bg-input rounded-md">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="flex-grow px-4 py-2 rounded-md text-secondary font-semibold bg-input border-none outline-none caret-secondary"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-secondary text-primary rounded-lg text-white font-bold hover:bg-primary hover:text-secondary transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col w-full flex items-center justify-center gap-2 p-3">
            <div className="horizontal w-[355px] h-[1.4px] sm:h-[1.4px] lg:h-[1.4px] bg-grey m-4"></div>
            <div className="infos flex items-center justify-center gap-6">
              <div className="copyright flex items-center justify-center gap-2 text-grey">
                <PiCopyright className="text-lg" />
                <p className="font-medium text">Copyright Finsweet 2025</p>
              </div>
              <div className="social-media flex items-center justify-center gap-3 text-xl text-grey">
                <FaFacebook />
                <FaInstagram />
                <RiTwitterXLine />
                <FaLinkedin />
              </div>
            </div>
            <div className="horizontal w-[355px] h-[1.4px] sm:h-[1.4px] lg:h-[1.4px] bg-grey m-4"></div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
