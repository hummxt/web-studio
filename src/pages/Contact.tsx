import { useRef, useState } from "react";
import Footer from "../components/Footer";
import { IoMdMail } from "react-icons/io";
import { GiTriangleTarget } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm('service_gpot2uf', 'template_skelfc3', form.current, 'FiY0z79JT-T8CE8S2')
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            toast.success("Message sent successfully!");
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
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
        <div className="contact w-full flex items-center justify-center flex-col p-14 text-primary gap-10 mb-20">
          <h1 className="text-4xl">Get in touch with us</h1>
          <div
            className="contact-container flex items-center justify-center w-full p-14 gap-20"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,231,0.12657563025210083) 0%, rgba(255,255,255,1) 100%)",
            }}
          >
            <div className="left flex items-start justify-center flex-col bg-contact gap-8 p-14">
              <div className="text-container flex items-start justify-center flex-col gap-3">
                <h2 className="text-3xl">Drop us a message</h2>
                <h3 className="text-md font-medium">
                  We will get back to you as soon as possible.
                </h3>
              </div>
              <form ref={form} onSubmit={sendEmail} className="flex items-start justify-center flex-col gap-4">
                <div className="name flex gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className="p-3 rounded-xl outline-none text-md font-semibold form-input"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="p-3 rounded-xl outline-none text-md font-semibold form-input"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  className="p-3 rounded-xl outline-none text-md font-semibold w-full form-input"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="p-3 rounded-xl outline-none text-md font-semibold w-full form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="p-3 rounded-xl outline-none text-md font-semibold w-full form-input"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-secondary px-5 py-3 rounded-lg w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
            </div>
            <div className="right flex items-start justify-center flex-col gap-5 p-14">
              <div className="call flex items-start justify-center gap-4">
                <div className="icon m-auto rounded-full bg-quality p-2 text-xl text-secondary">
                  <FaPhoneAlt />
                </div>
                <div className="info flex items-start justify-center flex-col">
                  <h3 className="text-lg">+ 1800 145 276</h3>
                  <p className="text-sm font-semibold">Free support</p>
                </div>
              </div>
              <div className="help flex items-start justify-center gap-4">
                <div className="icon m-auto rounded-full bg-quality p-2 text-xl text-secondary">
                  <GiTriangleTarget />
                </div>
                <div className="info flex items-start justify-center flex-col">
                  <h3 className="text-lg">finsweet@gmail.com</h3>
                  <p className="text-sm font-semibold">Help Email support</p>
                </div>
              </div>
              <div className="sales flex items-start justify-center gap-4">
                <div className="icon m-auto rounded-full bg-quality p-2 text-xl text-secondary">
                  <IoMdMail />
                </div>
                <div className="info flex items-start justify-center flex-col">
                  <h3 className="text-lg">sales@finsweet.com</h3>
                  <p className="text-sm font-semibold">Sales Enquiry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default Contact;