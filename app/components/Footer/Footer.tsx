import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="
        bg-slate-700
        text-slate-200
        text-sm 
        mt-16
        "
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#"> Phone</Link>
            <Link href="#"> Leptop</Link>
            <Link href="#"> Destop</Link>
            <Link href="#"> Tv</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Coustomer Serves</h3>
            <Link href="#"> Contact us</Link>
            <Link href="#"> About Us</Link>
            <Link href="#"> Shopping Polech</Link>
            <Link href="#"> FAQ</Link>
          </FooterList>
          <div className="w-full md:w-1/3 md:mb-0 md-6">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p>
              Al our e-Shop is an online store.a website that allows customers
              to shop online from anywhere.
            </p>
            <p>&copy;{new Date().getFullYear()} E-Shop</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow US</h3>
            <div className="flex gap-2">
              <Link href="#">
                {" "}
                <FaFacebook size={24} />
              </Link>

              <Link href="#">
                {" "}
                <FaGithub size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
