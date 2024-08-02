import FooterTail from "./footer-tail";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const menuList = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Contact = () => (
  <div className="bg-[#E8E8EA] h-[495px] py-16 sm:px-16">
    <div className="flex flex-col sm:flex-row justify-between px-[352px] sm:px-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">About</h1>
          <p className="w-[280px] leading-7 font-normal font-sans text-base text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="text-base font-sans">
          <p>Email: info@jstemplate.net</p>
          <p>Phone: 880 123 456 789</p>
        </div>
      </div>
      <div className="px-[120px] sm:px-[229.5px]">
        <ul className="flex flex-col gap-4 text-[#696A75] font-thin mt-2">
          {menuList.map((menu) => (
            <Link href={menu.link}>{menu.label}</Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-[26.67px] pr-[120px] sm:pr-[221px]">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </div>
    <FooterTail />
  </div>
);

export default Contact;
