import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  const footerLinks = [
    { text: "About Us", href: "/about" },
    { text: "For entry-level Techies", href: "/entry-level" },
    { text: "For Employers/Companies", href: "/employers" },
    { text: "Resources", href: "/resources" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      <footer className=" bg-[#FFD700] flex justify-evenly items-center">
        <div>
          <img src="/skilloft.png" alt="skilloft" width={140} />
          <div className="flex gap-2 p-2 text-xl text-white">
            <FaLinkedin />
            <BsTwitterX />
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>

        <div className="flex gap-8 text-base">
          {footerLinks.map((link, index) => (
            <a href={link.href} key={index}>
              {link.text}
            </a>
          ))}
        </div>
        <section className="flex items-center">
          <p>
            ©2024 Skilloft.
            <br /> All rights reserved
          </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
