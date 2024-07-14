import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col w-full bg-[#364253] items-center justify-between px-5 py-5">
      <div className="flex justify-center">
        <p className="text-[#BDC3C7] py-5 ">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://www.instagram.com"
          className="rounded-full text-[#BDC3C7] border p-2 border-[#BDC3C7]"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com"
          className="rounded-full text-[#BDC3C7] border p-2 border-[#BDC3C7]"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://twitter.com"
          className="rounded-full text-[#BDC3C7] border p-2 border-[#BDC3C7]"
        >
          <XIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/satyraj-madake-207055291"
          className="rounded-full text-[#BDC3C7] border p-2 border-[#BDC3C7]"
        >
          <LinkedInIcon />
        </a>
        <a
          href="/"
          className="rounded-full text-[#BDC3C7] border p-2 border-[#BDC3C7]"
        >
          <ArrowUpwardIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
