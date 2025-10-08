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

import PageWrapper from "../components/PageWrapper";

function About() {
  return (
    <>
      <PageWrapper className="relative flex items-center justify-center flex-col">
        <div
          className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(132deg, rgba(0,255,231,0.23301820728291311) 0%, rgba(255,255,255,1) 100%)",
          }}
        />
        <div className="our-products w-full flex items-center justify-center flex-col text-primary relative p-6 sm:p-8 md:p-14">
          <div className="text-container flex items-center justify-center flex-col p-4 text-center gap-4 sm:gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              We are proud of our products
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-medium w-[90%] sm:w-[80%] md:w-[60%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div className="images flex flex-col sm:flex-row items-center justify-center p-4 object-cover gap-4 sm:gap-6 w-full">
            <img
              src={macBook}
              alt="Macbook"
              className="w-[90%] sm:w-[30%] h-auto"
            />
            <img
              src={manWorking}
              alt="Man Working"
              className="w-[90%] sm:w-[30%] h-auto"
            />
            <img
              src={peopleWorking}
              alt="People Working"
              className="w-[90%] sm:w-[30%] h-auto"
            />
          </div>
        </div>
        <div className="about-us-text w-full flex items-center justify-center flex-col text-center gap-4 mt-6 sm:mt-10 p-6 sm:p-8 md:p-14 text-primary">
          <h1 className="text-gradient text-xl sm:text-2xl">About Us</h1>
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl w-[90%] sm:w-[80%] md:w-[60%] text-center">
            We’re a team of data analysts
          </h2>
          <p className="text-sm sm:text-base font-medium w-[90%] sm:w-[80%] md:w-[38%] text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="goals-vision w-full flex flex-col lg:flex-row items-center justify-center bg-contact mt-10 sm:mt-16 p-4 sm:p-6 md:p-8 text-primary">
          <div className="left w-[90%] sm:w-[80%] lg:w-[50%] flex items-start justify-center flex-col p-6 sm:p-8 md:p-10 gap-4 sm:gap-5">
            <h1 className="text-gradient text-xl sm:text-2xl">Our Goals</h1>
            <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl w-[90%] sm:w-[80%]">
              To upscale your business to the next level
            </h2>
            <p className="text-sm sm:text-base font-medium w-[90%] sm:w-[80%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="right w-[90%] sm:w-[80%] lg:w-[50%] flex items-start justify-center flex-col p-6 sm:p-8 md:p-10 gap-4 sm:gap-5">
            <h1 className="text-gradient text-xl sm:text-2xl">Our Vision</h1>
            <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl w-[90%] sm:w-[80%]">
              To provide solutions for growing companies
            </h2>
            <p className="text-sm sm:text-base font-medium w-[90%] sm:w-[80%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
        <div className="corporate flex items-center justify-center flex-col p-6 sm:p-8 md:p-14 text-primary">
          <div className="text-container flex items-center justify-center flex-col p-4 sm:p-6 md:p-8 mt-6 sm:mt-10 gap-3 sm:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl">Our corporate values</h1>
            <p className="text-sm sm:text-base font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className="values grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center p-4 sm:p-6 md:p-8 mt-6 sm:mt-10 gap-4 sm:gap-6">
            {[
              { icon: bestClass, title: "Best in class", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." },
              { icon: authencity, title: "Authencity", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." },
              { icon: support, title: "Email Support", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." },
              { icon: discounts, title: "Discounts Available", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." },
              { icon: marketing, title: "Powerful Marketing", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." },
              { icon: management, title: "Inventory Management", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start flex-col gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-md"
              >
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
                <h2 className="text-lg sm:text-xl md:text-2xl">{item.title}</h2>
                <p className="text-sm sm:text-base font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="talented-team w-full flex flex-col lg:flex-row items-start justify-center mt-10 sm:mt-16 p-6 sm:p-8 md:p-14 text-primary mb-10 sm:mb-20">
          <div className="left w-[90%] sm:w-[80%] lg:w-[40%] flex items-start flex-col gap-4 sm:gap-5 mt-4 sm:mt-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Our talented Team
            </h1>
            <p className="text-sm sm:text-base font-light">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.
            </p>
          </div>
          <div className="right w-[90%] sm:w-[80%] lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { img: ceo, name: "Blake Matthews", position: "CEO & Co-Founder" },
              { img: cto, name: "Jack Newman", position: "CTO" },
              { img: marketingSarinia, name: "Sarinia Martins", position: "Marketing" },
              { img: projectManger, name: "Spencer Wright", position: "Project Manager" },
              { img: sales, name: "Caroline Ming", position: "Sales" },
              { img: design, name: "Anna Mills", position: "Design Leader" },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col w-full overflow-hidden rounded-lg bg-button shadow"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="m-4 sm:m-6 text-start">
                  <h3 className="text-lg sm:text-xl font-medium">{member.name}</h3>
                  <p className="text-sm sm:text-base font-light">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default About;