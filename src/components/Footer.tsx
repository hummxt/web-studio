import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { PiCopyright } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Footer() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const toggleSection = (sectionIndex: number) => {
    setActiveSection(activeSection === sectionIndex ? null : sectionIndex);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_yz7gvg9",
          "template_q20i9da",
          form.current,
          "FiY0z79JT-T8CE8S2"
        )
        .then(
          (result) => {
            console.log("Success!", result.text);
            toast.success("Subscribed successfully!");
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log("Failed...", error.text);
            toast.error("Failed to subscribe. Please try again.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div
      className="footer min-w-full h-auto flex items-center justify-center flex-col"
      style={{
        background:
          "linear-gradient(0deg, rgba(58,180,177,0.364670868347339) 55%, rgba(255,255,255,0) 90%)",
      }}
    >
      <div className="business w-full h-full flex items-center justify-center flex-col gap-8 text-primary">
        <h1 className="text-4xl text-center w-[90%] sm:w-[75%] md:w-[60%]">
          Are you ready to grow your business with us?
        </h1>
        <p className="font-light w-[90%] sm:w-[80%] md:w-[70%] text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
        </p>
        <div className="trial p-6 bg-primary rounded-xl flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40">
          <Link to="/pricing" className="text-secondary relative z-10">
            View Pricing
          </Link>
        </div>
      </div>
      <footer className="min-w-full h-auto flex items-center justify-center flex-col bg-primary mt-20 p-4">
        <div className="col w-full h-auto flex flex-col lg:flex-row items-center justify-center p-12 gap-12 lg:gap-24">
          <div className="row flex items-center justify-center flex-col gap-4 w-full lg:w-auto">
            <h2
              className="text-secondary text-lg cursor-pointer lg:cursor-default flex items-center justify-between w-full"
              onClick={() => toggleSection(1)}
            >
              Company
              <IoIosArrowDown
                className={`lg:hidden transition-transform duration-300 ${
                  activeSection === 1 ? "transform rotate-180" : ""
                }`}
              />
            </h2>
            <div
              className={`lg:flex ${
                activeSection === 1 ? "flex" : "hidden"
              } flex-col text-start gap-2 lg:text-left`}
            >
              <Link to="about" className="text-grey font-light text-md">
                About us
              </Link>
              <Link to="about" className="text-grey font-light text-md">
                Why Choose us
              </Link>
              <Link to="pricing" className="text-grey font-light text-md">
                Pricing
              </Link>
              <Link to="about" className="text-grey font-light text-md">
                Testimonial
              </Link>
            </div>
          </div>
          <div className="row flex items-center justify-center flex-col gap-4 w-full lg:w-auto">
            <h2
              className="text-secondary text-lg cursor-pointer lg:cursor-default flex items-center justify-between w-full"
              onClick={() => toggleSection(2)}
            >
              Resources
              <IoIosArrowDown
                className={`lg:hidden transition-transform duration-300 ${
                  activeSection === 2 ? "transform rotate-180" : ""
                }`}
              />
            </h2>
            <div
              className={`lg:flex ${
                activeSection === 2 ? "flex" : "hidden"
              } flex-col text-start gap-2 lg:text-left`}
            >
              <Link to="about" className="text-grey font-light text-md">
                Privacy Policy
              </Link>
              <Link to="about" className="text-grey font-light text-md">
                Terms and Condition
              </Link>
              <Link to="blog" className="text-grey font-light text-md">
                Blog
              </Link>
              <Link to="contact" className="text-grey font-light text-md">
                Contact us
              </Link>
            </div>
          </div>
          <div className="row flex items-center justify-center flex-col gap-4 w-full lg:w-auto">
            <h2
              className="text-secondary text-lg cursor-pointer lg:cursor-default flex items-center justify-between w-full"
              onClick={() => toggleSection(3)}
            >
              Product
              <IoIosArrowDown
                className={`lg:hidden transition-transform duration-300 ${
                  activeSection === 3 ? "transform rotate-180" : ""
                }`}
              />
            </h2>
            <div
              className={`lg:flex ${
                activeSection === 3 ? "flex" : "hidden"
              } flex flex-col text-start gap-2 lg:text-left`}
            >
              <Link to="product" className="text-grey font-light text-md">
                Project management
              </Link>
              <Link to="product" className="text-grey font-light text-md">
                Time tracker
              </Link>
              <Link to="product" className="text-grey font-light text-md">
                Time schedule
              </Link>
              <Link to="about" className="text-grey font-light text-md">
                Remote Collaboration
              </Link>
            </div>
          </div>
          <div className="row flex items-center justify-center flex-col gap-6 text-center w-full lg:w-auto">
            <div className="logo text-2xl text-secondary text-center lg:text-left w-full">
              <h2>{"{ FinCompany"}</h2>
            </div>
            <div className="flex items-center lg:items-start justify-center flex-col gap-3 w-full">
              <div className="subscribe text-md text-center lg:text-left w-full">
                <h3 className="text-secondary">Subscribe to our Newsletter</h3>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 bg-input rounded-md w-full max-w-md"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="flex-grow px-4 py-2 rounded-md text-secondary font-semibold bg-input border-none outline-none caret-secondary w-full"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-3 bg-secondary text-primary rounded-lg text-white font-bold hover:bg-primary hover:text-secondary transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out w-full sm:w-auto"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col w-full flex items-center justify-center gap-6 p-3 flex-col lg:flex-row">
          <div className="horizontal w-[90%] sm:w-[80%] lg:w-[355px] h-[1.4px] bg-grey m-4"></div>
          <div className="infos flex flex-col sm:flex-row items-center justify-center gap-6 text-xl text-grey">
            <div className="copyright flex items-center justify-center gap-2">
              <PiCopyright className="text-lg" />
              <p className="font-medium">Copyright Finsweet 2025</p>
            </div>
            <div className="social-media flex items-center justify-center gap-3">
              <Link to="https://www.linkedin.com/in/hummet/">
                <FaFacebook />
              </Link>
              <Link to="https://www.linkedin.com/in/hummet/">
                <FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/hummet/">
                <RiTwitterXLine />
              </Link>
              <Link to="https://www.linkedin.com/in/hummet/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="horizontal w-[90%] sm:w-[80%] lg:w-[355px] h-[1.4px] bg-grey m-4"></div>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default Footer;