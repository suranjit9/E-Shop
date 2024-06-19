"use client";
import React, { useCallback, useState } from "react";
import Avata from "../Avata";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";

const UserNemu = () => {
  const [isOpen, setisOpen] = useState(false);
  const toogleOpen = useCallback(() => {
    setisOpen((prev) => !prev);
  }, []);
  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toogleOpen}
          className="p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-sm transition text-slate-700"
        >
          <Avata />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className="absolute rounded-md shadow-md w-[170px] bg-white
                overflow-hidden right-0 top-12 text-12 text-sm flex flex-col cursor-pointer
                "
          >
            <div>
              <Link href={"/orders"}>
                <MenuItem onClick={toogleOpen}>your order</MenuItem>
              </Link>
              <Link href={"/admin"}>
                <MenuItem onClick={toogleOpen}>Admin DeshBord</MenuItem>
              </Link>
              <Link href={"/admin"}>
                <MenuItem
                  onClick={() => {
                    toogleOpen();
                    signOut;
                  }}
                >
                  Sign Out
                </MenuItem>
              </Link>
            </div>
            <div>
              <Link href={"/login"}>
                <MenuItem onClick={toogleOpen}>Login</MenuItem>
              </Link>
              <Link href={"/signup"}>
                <MenuItem onClick={toogleOpen}>Sign Up</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* {isOpen ? <BackDrop onClick={toogleOpen} /> : ""} */}
    </>
  );
};

export default UserNemu;
