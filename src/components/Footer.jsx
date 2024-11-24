import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { text: "About Us", href: "/about" },
    { text: "For entry-level Techies", href: "/entry-level" },
    { text: "For Employers/Companies", href: "/employers" },
    { text: "Resources", href: "/resources" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Privacy Policy", href: "/privacy-policy" },
  ];

  const socials = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com" },
    { icon: <BsTwitterX />, href: "https://www.twitter.com" },
    { icon: <FaInstagram />, href: "https://www.instagram.com" },
    { icon: <FaFacebook />, href: "https://www.facebook.com" },
    { icon: <FaYoutube />, href: "https://www.youtube.com" },
  ];

  return (
    <>
      <footer className="bg-[#FFD700] flex justify-between items-center px-[80px]">
        <div>
          <Link href="/">
            <img src="/skilloft.png" alt="skilloft" width={140} />
          </Link>

          <div className="flex gap-2 p-2 text-xl text-white">
            {socials.map((social, index) => (
              <Link href={social.href} key={index}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-8 text-base">
          {footerLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.text}
            </Link>
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
