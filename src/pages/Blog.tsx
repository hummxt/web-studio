import Footer from "../components/Footer";
import peopleWorking from "../assets/images/blog/peopleWorking.svg";
import basedMarketing from "../assets/images/blog/account-based-marketing.svg";
import calculateSaas from "../assets/images/blog/calculate-saas.svg";
import customerStrategies from "../assets/images/blog/customer-strategiess.svg";
import dataDriven from "../assets/images/blog/data-driven.svg";
import excellentCX from "../assets/images/blog/excellet-cx.svg";
import mainBenefits from "../assets/images/blog/main-benefits.png";
import makeRecurring from "../assets/images/blog/make-reccuring.svg";
import managingRails from "../assets/images/blog/managing-rails.svg";
import checkoutAbandoment from "../assets/images/blog/checkout-abandonment.svg";

function Blog() {
  return (
    <>
      <div className="container w-full flex items-center justify-center flex-col mt-20 text-primary">
        <div className="blog flex items-center justify-center">
          <div className="read-blogs flex items-center justify-center flex-col gap-5 z-10 p-14">
            <h1 className="text-5xl">Read our latest blogs</h1>
            <p className="text-md font-light w-[60%] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </p>
          </div>
          <div
            className="absolute top-1/2 left-0 w-[800px] h-[600px] rounded-full blur-3xl -translate-y-1/2 z-0"
            style={{
              background:
                "linear-gradient(132deg, rgba(0,255,231,0.17699579831932777) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
          <div
            className="absolute top-[90%] right-0 w-[800px] h-[600px] rounded-full blur-3xl -translate-y-1/2 z-0"
            style={{
              background:
                "linear-gradient(132deg, rgba(0,255,231,0.17699579831932777) 0%, rgba(255,255,255,1) 100%)",
            }}
          />
        </div>
        <div className="trending-post w-[84%] flex items-center justify-center z-0 p-10 mt-5 border-2 gap-10 border-grey rounded-2xl">
          <div className="left flex items-start justify-center flex-col gap-5 p-2 w-[40%]">
            <h3 className="text-xl text-gradient">Trending Post</h3>
            <h2 className="text-4xl w-[100%]">
              New invoicing features to help you get paid faster
            </h2>
            <p className="text-md font-medium w-[82%]">
              Over the past few months, we’ve added several new features to SaaS
              Invoicing to help any business get paid faster and streamline
              their collection workflows.
            </p>
            <h4 className="text-md font-medium">
              Luke Matthews l November 8, 2021
            </h4>
          </div>
          <div className="right p-2 rounded-2xl w-[40%]">
            <img
              src={peopleWorking}
              className="w-[100%]"
              alt="People Working Image"
            />
          </div>
        </div>
        <h1 className="text-4xl text-center mt-28 p-10 z-0">All Posts</h1>
        <div className="all-posts w-[93%] flex items-center justify-center flex-col p-14 gap-4 mb-20">
          <div className="row flex gap-4 justify-center m-auto">
          <div className="post w-[48%] flex items-start justify-center flex-col gap-4 p-4 hover:bg-gray">
  <img
    src={excellentCX}
    className="w-full rounded-md"
    alt="Excellent CX Image"
  />
  <h2 className="text-xl font-semibold">
    7 Automation use cases that foster excellent CX
  </h2>
  <p className="text-md font-medium">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
  <p className="text-sm font-medium text-gray">
    Luke Matthews | November 8, 2021
  </p>
</div>

            <div className="post w-[48%] flex items-start justify-center flex-col gap-4 p-4 hover:bg-card">
              <img
                src={managingRails}
                className="w-full rounded-md"
                alt="Managing Rails Image"
              />
              <h2 className="text-xl font-semibold">
                Managing Rails application secrets with encrypted credentials
              </h2>
              <p className="text-md font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-sm font-medium text-gray-600">
                Luke Matthews | November 8, 2021
              </p>
            </div>

            <div className="post w-[48%] flex items-start justify-center flex-col gap-4 p-4 hover:bg-card">
              <img
                src={basedMarketing}
                className="w-full rounded-md"
                alt="Account-based Marketing Image"
              />
              <h2 className="text-xl font-semibold">
                Account-based marketing: Data-driven selection for ABM success
              </h2>
              <p className="text-md font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-sm font-medium text-gray-600">
                Luke Matthews | November 8, 2021
              </p>
            </div>
          </div>

          <div className="row flex items-center justify-center mt-5 mb-5">
            <div className="post-4 flex items-start justify-center flex-col gap-4 p-2">
              <img
                src={calculateSaas}
                className="w-[88%]"
                alt="Excellent CX Image"
              />
              <h2 className="text-xl w-[84%]">
                {" "}
                How to Calculate Your SaaS Gross Margin
              </h2>
              <p className="text-md font-medium w-[89%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-md font-medium">
                Luke Matthews l November 8, 2021
              </p>
            </div>
            <div className="post-5 flex items-start justify-center flex-col gap-4 p-2">
              <img
                src={mainBenefits}
                className="w-[88%]"
                alt="Excellent CX Image"
              />
              <h2 className="text-xl w-[90%]">
                The Five Main Benefits of Automating your Accounts Receivable
                Process
              </h2>
              <p className="text-md font-medium w-[89%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-md font-medium">
                Luke Matthews l November 8, 2021
              </p>
            </div>
            <div className="post-6 flex items-start justify-center flex-col gap-4 p-2">
              <img
                src={dataDriven}
                className="w-[88%]"
                alt="Excellent CX Image"
              />
              <h2 className="text-xl">
                How to Make Data-driven Pricing Decisions
              </h2>
              <p className="text-md font-medium w-[89%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-md font-medium">
                Luke Matthews l November 8, 2021
              </p>
            </div>
          </div>
          <div className="row flex items-center justify-center flex-row">
            <div className="post-7 flex items-start justify-center flex-col gap-4 p-2">
              <img
                src={makeRecurring}
                className="w-[88%]"
                alt="Excellent CX Image"
              />
              <h2 className="text-xl">
                How to Make Recurring Invoicing More Efficient
              </h2>
              <p className="text-md font-medium w-[89%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-md font-medium">
                Luke Matthews l November 8, 2021
              </p>
            </div>
            <div className="post-8 flex items-start justify-center flex-col gap-4 p-2">
              <img
                src={checkoutAbandoment}
                className="w-[88%]"
                alt="Excellent CX Image"
              />
              <h2 className="text-xl w-[94%]">
                How to Reduce Checkout Abandonment for more Conversions
              </h2>
              <p className="text-md font-medium w-[89%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-md font-medium">
                Luke Matthews l November 8, 2021
              </p>
            </div>
            <div className="post-9 flex items-start justify-center flex-col gap-4 p-2">
              <img
                src={customerStrategies}
                className="w-[88%]"
                alt="Excellent CX Image"
              />
              <h2 className="text-xl w-[80%]">
                10 Customer Retention Strategies for better Dwell time
              </h2>
              <p className="text-md font-medium w-[89%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-md font-medium">
                Luke Matthews l November 8, 2021
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
