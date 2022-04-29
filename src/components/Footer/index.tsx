import type { NextPage } from "next";
import { useState } from "react";
import Menu from "../../molecules/menu";

const Footer: NextPage = () => {
  const unUsedColor = "#979797";

  return (
    <footer
      className={`fixed bottom-0 w-screen bg-blue-medium text-white h-12 px-4 flex items-center justify-center md:hidden`}
    >
      <Menu />
    </footer>
  );
};

export default Footer;
