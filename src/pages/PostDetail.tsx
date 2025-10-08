import { useParams } from 'react-router-dom';
import accountBased from "../assets/images/blog-images/account-based-marketing.svg";
import calculateSaas from "../assets/images/blog-images/calculate-saas.svg";
import customerStrategies from "../assets/images/blog-images/customer-strategiess.svg";
import dataDriven from "../assets/images/blog-images/data-driven.svg";
import excellentCX from "../assets/images/blog-images/excellet-cx.svg";
import mainBenefits from "../assets/images/blog-images/main-benefits.png";
import makeRecurring from "../assets/images/blog-images/make-reccuring.svg";
import managingRails from "../assets/images/blog-images/managing-rails.svg";
import checkoutAbandoment from "../assets/images/blog-images/checkout-abandonment.svg";

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

import PageWrapper from "../components/PageWrapper";

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <PageWrapper className="p-10 sm:p-20 mt-20 sm:mt-40 mb-10 sm:mb-20 text-bold text-2xl sm:text-4xl text-primary">
        <div className="flex items-center justify-center">Post not found!</div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="mt-4 text-primary">
      <div className="post-detail flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-14 gap-6 sm:gap-8">
        {/* Post Title and Author */}
        <div className="text-container flex flex-col items-center justify-center p-4 gap-3 sm:gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl w-[90%] sm:w-[80%] md:w-[70%] text-center leading-tight">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base font-semibold">
            {post.author} | {post.date}
          </p>
        </div>
        <img
          src={post.image}
          className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto"
          alt={post.title}
        />
        <div className="post-content flex flex-col items-center justify-center p-4 gap-6 sm:gap-8 mt-6 sm:mt-12">
          <h1 className="text-lg sm:text-xl md:text-2xl">{post.title}</h1>
          <p className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-sm sm:text-base font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default PostDetail;