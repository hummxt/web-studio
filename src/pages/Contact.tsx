import { useRef, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { GiTriangleTarget } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_gpot2uf",
          "template_skelfc3",
          form.current,
          "FiY0z79JT-T8CE8S2"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            toast.success("Message sent successfully!");
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Failed to send message. Please try again.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <>
      <div className="container w-full flex items-center justify-center flex-col">
        <div className="contact w-full flex items-center justify-center flex-col p-6 sm:p-8 md:p-14 text-primary gap-6 sm:gap-10 mb-10 sm:mb-20 overflow-hidden relative z-0">
          <div
            className="absolute top-1/2 left-0 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full blur-3xl -translate-y-1/2 z-0"
            style={{
              background:
                "linear-gradient(132deg, rgba(0,255,231,0.17699579831932777) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
          <div
            className="absolute top-1/2 right-0 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full blur-3xl -translate-y-1/2 z-0"
            style={{
              background:
                "linear-gradient(132deg, rgba(0,255,231,0.17699579831932777) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
            Get in touch with us
          </h1>
          <div className="contact-container flex flex-col lg:flex-row items-center justify-center w-full p-6 sm:p-8 md:p-14 gap-6 sm:gap-10">
            <div className="left flex items-start justify-center flex-col bg-contact gap-6 sm:gap-8 p-6 sm:p-8 md:p-14 z-0 drop-shadow-2xl w-full lg:w-[60%]">
              <div className="text-container flex items-start justify-center flex-col gap-3">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  Drop us a message
                </h2>
                <h3 className="text-sm sm:text-base font-medium">
                  We will get back to you as soon as possible.
                </h3>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex items-start justify-center flex-col gap-4 w-full"
              >
                <div className="name flex flex-col sm:flex-row gap-4 w-full">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className="p-3 rounded-xl outline-none text-sm sm:text-base font-semibold form-input w-full"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="p-3 rounded-xl outline-none text-sm sm:text-base font-semibold form-input w-full"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  className="p-3 rounded-xl outline-none text-sm sm:text-base font-semibold w-full form-input"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="p-3 rounded-xl outline-none text-sm sm:text-base font-semibold w-full form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="p-3 rounded-xl outline-none text-sm sm:text-base font-semibold w-full form-input"
                  required
                ></textarea>
                <div className="send p-4 sm:p-6 w-full h-10 bg-primary rounded-xl flex items-center justify-center before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-40 before:w-12 before:translate-x-24 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-[510px] drop-shadow-xl">
                  <button
                    type="submit"
                    className="text-secondary relative z-10"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form> 
            </div>
            <div className="right flex items-start justify-center flex-col gap-4 sm:gap-5 p-6 sm:p-8 md:p-14 z-0 w-full lg:w-[40%]">
              <div className="call flex items-start justify-center gap-4">
                <div className="icon m-auto rounded-full bg-quality p-2 text-lg sm:text-xl text-secondary">
                  <FaPhoneAlt />
                </div>
                <div className="info flex items-start justify-center flex-col">
                  <h3 className="text-sm sm:text-base lg:text-lg">
                    + 1800 145 276
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold">Free support</p>
                </div>
              </div>
              <div className="help flex items-start justify-center gap-4">
                <div className="icon m-auto rounded-full bg-quality p-2 text-lg sm:text-xl text-secondary">
                  <GiTriangleTarget />
                </div>
                <div className="info flex items-start justify-center flex-col">
                  <h3 className="text-sm sm:text-base lg:text-lg">
                    finsweet@gmail.com
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold">
                    Help Email support
                  </p>
                </div>
              </div>
              <div className="sales flex items-start justify-center gap-4">
                <div className="icon m-auto rounded-full bg-quality p-2 text-lg sm:text-xl text-secondary">
                  <IoMdMail />
                </div>
                <div className="info flex items-start justify-center flex-col">
                  <h3 className="text-sm sm:text-base lg:text-lg">
                    sales@finsweet.com
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold">
                    Sales Enquiry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contact;