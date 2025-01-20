import { Link } from "react-router-dom";
import accountBased from "../assets/images/blog-images/account-based-marketing.svg";
import peopleWorking from "../assets/images/blog-images/peopleWorking.svg";
import calculateSaas from "../assets/images/blog-images/calculate-saas.svg";
import customerStrategies from "../assets/images/blog-images/customer-strategiess.svg";
import dataDriven from "../assets/images/blog-images/data-driven.svg";
import excellentCX from "../assets/images/blog-images/excellet-cx.svg";
import mainBenefits from "../assets/images/blog-images/main-benefits.png";
import makeRecurring from "../assets/images/blog-images/make-reccuring.svg";
import managingRails from "../assets/images/blog-images/managing-rails.svg";
import checkoutAbandoment from "../assets/images/blog-images/checkout-abandonment.svg";

function Blog() {
  
  const posts = [
    {
      id: "0",
      title: "7 Automation use cases that foster excellent CX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: excellentCX,
    },
    {
      id: "1",
      title: "Managing Rails application secrets with encrypted credentials",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: managingRails,
    },
    {
      id: "2",
      title: "Account-based marketing: Data-driven selection for ABM success",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: accountBased,
    },
    {
      id: "3",
      title: " How to Calculate Your SaaS Gross Margin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: calculateSaas,
    },
    {
      id: "4",
      title: "The Five Main Benefits of Automating your Accounts Receivable Process",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: mainBenefits,
    },
    {
      id: "5",
      title: "How to Make Data-driven Pricing Decisions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: dataDriven,
    },
    {
      id: "6",
      title: "How to Make Recurring Invoicing More Efficient",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: makeRecurring,
    },
    {
      id: "7",
      title: "How to Reduce Checkout Abandonment for more Conversions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: checkoutAbandoment,
    },
    {
      id: "8",
      title: "10 Customer Retention Strategies for better Dwell time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: "Luke Matthews",
      date: "November 8, 2021",
      image: customerStrategies,
    },
  ];

  return (
    <>
      <div className="container w-full flex items-center justify-center flex-col mt-20 text-primary">
        <div className="blog flex items-center justify-center">
          <div className="read-blogs flex items-center justify-center flex-col gap-5 z-10 p-14">
            <h1 className="text-5xl">Read our latest blogs</h1>
            <p className="text-md font-light w-[60%] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
        <div className="trending-post w-[84%] flex items-center justify-center z-0 p-10 mt-5 border-2 gap-10 border-grey rounded-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer">
          <div className="left flex items-start justify-center flex-col gap-5 p-2 w-[40%]">
            <h3 className="text-xl text-gradient">Trending Post</h3>
            <h2 className="text-4xl w-[100%]">
              New invoicing features to help you get paid faster
            </h2>
            <p className="text-md font-medium w-[82%]">
              Over the past few months, we’ve added several new features to SaaS
              Invoicing to help any business get paid faster.
            </p>
            <h4 className="text-md font-medium">
              Luke Matthews | November 8, 2021
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
        <div className="all-posts w-[90%] grid grid-cols-3 items-center justify-center flex-col p-14 gap-6 mb-20">
        {posts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id}>
              <div className="flex items-start justify-center flex-col gap-4 p-2 hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={post.image}
                  className="w-[100%]"
                  alt={`${post.title} Image`}
                />
                <h2 className="text-xl w-[94%]">{post.title}</h2>
                <p className="text-md font-medium w-[89%]">{post.description}</p>
                <p className="text-md font-medium">
                  {post.author} | {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
