import type { NextPage } from "next";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import Menu from "../../molecules/menu";

const flexNav: string = "flex items-center justify-between";

const itemDiv =
  "hidden md:flex align-center gap-2 font-medium cursor-pointer flex-col group";
const itemSpan = "flex items-center gap-2";
const NavBar: NextPage = () => {
  const unUsedColor = "currentColor";
  return (
    <nav
      className={`fixed w-screen bg-gradient-to-l from-blue-medium to-blue-dark text-blue-light h-16 px-6 ${flexNav}`}
      style={{ zIndex: "1" }}
    >
      <div>
        <h1 className="font-bold tracking-tighter text-2xl">
          <Link href="/">
            <a>
              WatchCats <span className="font-light tracking-normal">.fr</span>
            </a>
          </Link>
        </h1>
      </div>
      <div className="md:flex md:items-center md:justify-between md:min-w-[500px] md:w-1/3">
        {/* <div className="md:hidden">
          <UseAnimations
            animation={heart}
            strokeColor="#7AA5D2"
            fillColor="#374b6b"
            size={36}
          />
        </div> */}
        <div className="hidden md:block w-full">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
