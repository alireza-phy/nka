import React from "react";
import { HeaderLinks } from "@/components/DefaultLayout/components/Header/desktopMenu/links";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";

const DesktopMenu = () => {
  return (
    <div
      className={
        "shadow-lg py-4 w-full items-center justify-evenly gap-8 w-full px-60 relative hidden md:flex h-24"
      }
    >
      <div className={`absolute z-10 text-white right-4`}>
        <Image src={logo} width={120} alt="logo" />
      </div>
      {HeaderLinks?.map((item, index) => (
        <div
          key={`headerMobileRight${index}`}
          className={`flex items-center justify-center gap-1`}
        >
          <Link
            href={item?.link}
            className={"whitespace-nowrap text-white font-bold text-lg"}
          >
            {item?.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;
