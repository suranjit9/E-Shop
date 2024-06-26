import React from "react";
import Container from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserNemu from "./UserNemu";
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });
const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 shadow-sm z-30">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              className={`${redressed.className} font-bold text-2xl`}
              href="/"
            >
              E-Shop
            </Link>
            <div className="hidden md:block">Search Bar</div>
            <div className="flex items-center gap-2 md:gap-12">
              <CartCount />
              <UserNemu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
