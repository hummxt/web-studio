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

function PostDetail() {

  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div className='flex items-center justify-center p-20 mt-40 mb-20 text-bold text-4xl text-primary'>Post not found!</div>;
  }

  return (
    <div className="detail-page w-full flex items-center justify-center mt-4 text-primary">
      <div className="post-detail flex flex-col items-center justify-center p-14 gap-8">
      <div className="text-container flex flex-col items-center justify-center p-4 gap-4">
      <h1 className='text-4xl w-[70%] text-center leading-tight'>{post.title}</h1>
      <p className='text-light font-semibold'>{post.author} | {post.date}</p>
      </div>
      <img src={post.image} className='w-[40%] h-auto' alt={post.title} />
      <div className="post-content flex flex-col items-center justify-center p-4 gap-12 mt-12">
        <h1 className='text-2xl'>{post.title}</h1>
        <p className='w-[60%] text-light font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.<br /><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.</p>
      </div>
    </div>
    </div>
  );
}

export default PostDetail;
