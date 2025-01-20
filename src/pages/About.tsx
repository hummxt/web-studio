import peopleWorking from "../assets/images/about-images/people-working.png";
import manWorking from "../assets/images/about-images/man-working.png";
import macBook from "../assets/images/about-images/macbook.svg";
import authencity from "../assets/images/about-images/authencity.svg";
import bestClass from "../assets/images/about-images/class.svg";
import management from "../assets/images/about-images/management.svg";
import support from "../assets/images/about-images/support.svg";
import discounts from "../assets/images/about-images/discounts.svg";
import marketing from "../assets/images/about-images/marketing.svg";
import ceo from "../assets/images/about-images/ceoBlake.svg";
import cto from "../assets/images/about-images/ctoJack.svg";
import marketingSarinia from "../assets/images/about-images/marketingSarinia.svg";
import projectManger from "../assets/images/about-images/projectSpencer.svg";
import sales from "../assets/images/about-images/salesCaroline.svg";
import design from "../assets/images/about-images/designAnna.svg";

function About() {
  return (
    <>
      <div className="container w-full flex items-center justify-center flex-col relative">
        <div
          className="absolute top-0 left-0 w-[800px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(132deg, rgba(0,255,231,0.23301820728291311) 0%, rgba(255,255,255,1) 100%)",
          }}
        />
        <div className="our-products w-full flex items-center justify-center flex-col text-primary relative p-14">
          <div className="text-container flex items-center justify-center flex-col p-4 text-center gap-5">
            <h2 className="text-5xl">We are proud of our products</h2>
            <p className="text-lg font-medium w-[60%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div className="images flex items-center justify-center p-4 object-cover gap-6 w-90">
            <img src={macBook} alt="Macbook" />
            <img src={manWorking} alt="Man Working" />
            <img src={peopleWorking} alt="People Working" />
          </div>
        </div>
        <div className="about-us-text w-full flex items-center justify-center flex-col text-center gap-4 mt-10 p-14 text-primary">
          <h1 className="text-gradient text-2xl">About Us</h1>
          <h2 className="text-primary text-4xl w-[60%] text-center">
            We’re a team of data analysts
          </h2>
          <p className="text-md font-medium w-[38%] text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="goals-vision w-full flex items-center justify-center bg-contact mt-16 p-4 text-primary">
          <div className="left w-[68%] flex items-start justify-center flex-col p-20 gap-5">
            <h1 className="text-gradient text-2xl">Our Goals</h1>
            <h2 className="text-primary text-4xl w-[78%]">
              To upscale your business to the next level
            </h2>
            <p className="text-md font-medium w-[94%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="right w-[68%] flex items-start justify-center flex-col p-20 gap-5">
            <h1 className="text-gradient text-2xl">Our Vision</h1>
            <h2 className="text-primary text-4xl w-[80%]">
              To provide solutions for growing companies
            </h2>
            <p className="text-md font-medium w-[94%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
        <div className="corporate flex items-center justify-center flex-col p-14 text-primary">
          <div className="text-container flex items-center justify-center flex-col p-8 mt-10 gap-4">
            <h1 className="text-4xl">Our corporate values</h1>
            <p className="text-md font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className="values grid items-center justify-center grid-cols-3 p-4 mt-10 gap-5 ml-20">
            <div className="best flex items-start flex-col gap-4 p-4">
              <img src={bestClass} className="w-90" alt="Best in Class" />
              <h2 className="text-2xl">Best in class</h2>
              <p className="text-md font-light w-[80%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="authencity flex items-start flex-col gap-4 p-4">
              <img src={authencity} className="w-90" alt="Best in Class" />
              <h2 className="text-2xl">Authencity</h2>
              <p className="text-md font-light w-[80%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="support flex items-start flex-col gap-4 p-4">
              <img src={support} className="w-90" alt="Best in Class" />
              <h2 className="text-2xl">Email Support</h2>
              <p className="text-md font-light w-[80%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="discounts flex items-start flex-col gap-4 p-4">
              <img src={discounts} className="w-90" alt="Best in Class" />
              <h2 className="text-2xl">BDiscounts Available </h2>
              <p className="text-md font-light w-[80%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="marketing flex items-start flex-col gap-4 p-4">
              <img src={marketing} className="w-90" alt="Best in Class" />
              <h2 className="text-2xl">Powerful Marketing</h2>
              <p className="text-md font-light w-[80%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="management flex items-start flex-col gap-4 p-4">
              <img src={management} className="w-90" alt="Best in Class" />
              <h2 className="text-2xl">Inventory Management</h2>
              <p className="text-md font-light w-[80%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
        <div className="talented-team w-full flex items-start justify-center mt-16 p-14 text-primary mb-20">
          <div className="left w-[40%] flex items-start flex-col gap-5 mt-5 ml-24">
            <h1 className="text-5xl font-semibold">Our talented Team</h1>
            <p className="text-md font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.
            </p>
          </div>
          <div className="right w-[70%] grid items-center gap-6">
            <div className="row flex items-center justify-center gap-6 w-full">
            <div className="ceo flex flex-col w-[210px] overflow-hidden rounded-lg bg-button shadow">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={ceo}
                  alt="CEO Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="m-6 text-start">
                <h3 className="text-xl font-medium">Blake Matthews</h3>
                <p className="text-md font-light">CEO & Co-Founder</p>
              </div>
            </div>
            <div className="cto flex flex-col w-[210px] overflow-hidden rounded-lg bg-button shadow">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={cto}
                  alt="CTO Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="m-6 text-start">
                <h3 className="text-xl font-medium">Jack Newman</h3>
                <p className="text-md font-light">CTO</p>
              </div>
            </div>
            <div className="marketing flex flex-col w-[210px] overflow-hidden rounded-lg bg-button shadow">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={marketingSarinia}
                  alt="marketing Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="m-6 text-start">
                <h3 className="text-xl font-medium">Sarinia Martins</h3>
                <p className="text-md font-light">Marketing</p>
              </div>
            </div>
            </div>
            <div className="row flex items-center justify-center gap-6 w-full">
            <div className="project-manager flex flex-col w-[210px] overflow-hidden rounded-lg bg-button shadow">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={projectManger}
                  alt="Project Manager Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="m-6 text-start">
                <h3 className="text-xl font-medium">Spencer Wright</h3>
                <p className="text-md font-light">Project Manager</p>
              </div>
            </div>
            <div className="sales flex flex-col w-[210px] overflow-hidden rounded-lg bg-button shadow">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={sales}
                  alt="Sales Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="m-6 text-start">
                <h3 className="text-xl font-medium">Caroline Ming</h3>
                <p className="text-md font-light">Sales</p>
              </div>
            </div>
            <div className="design flex flex-col w-[210px] overflow-hidden rounded-lg bg-button shadow">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={design}
                  alt="Design Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="m-6 text-start">
                <h3 className="text-xl font-medium">Anna Mills</h3>
                <p className="text-md font-light">Design Leader</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
