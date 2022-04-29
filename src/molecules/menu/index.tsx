import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Filter from "../../components/Filter";

const Menu: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const unUsedColor = "currentColor";
  const router = useRouter();

  const checkActive = (path: string) => {
    if (router.pathname === path) {
      return "text-white flex items-center gap-2 font-medium";
    } else {
      return "text-[#979797] flex items-center gap-2 ";
    }
  };

  return (
    <div className={`flex justify-around w-full`}>
      {/* Home */}
      <Link href="/">
        <a className={checkActive("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--clarity"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 36"
          >
            <path
              fill="currentColor"
              d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19Z"
              className="clr-i-solid clr-i-solid-path-1"
            ></path>
            <path
              fill="currentColor"
              d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z"
              className="clr-i-solid clr-i-solid-path-2"
            ></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
          <span className="hidden sm:block">Home</span>
        </a>
      </Link>

      {/* Fav */}
      <Link href="/fav">
        <a className={checkActive("/fav")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--ic"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29c2.64-1.8 5.9-.96 7.66 1.1c1.76-2.06 5.02-2.91 7.66-1.1c1.41.96 2.28 2.59 2.34 4.29c.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"
            ></path>
          </svg>
          <span className="hidden sm:block">Favorite</span>
        </a>
      </Link>

      {/* Create cat */}
      <Link href="/makecat">
        <a className={checkActive("/makecat")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--ic"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill={`${unUsedColor}`}
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"
            ></path>
          </svg>
          <span className="hidden sm:block">Make a cat</span>
        </a>
      </Link>

      {/* Filter */}
      {/* <div
        className={checkActive("/filters") + " cursor-pointer"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ic"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill={`${unUsedColor}`}
            d="M4 3h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm10 0h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zM4 13h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm13 0c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1z"
          ></path>
        </svg>
      </div> */}
      {/* Help */}
      <Link href="/info">
        <a className={checkActive("/info")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--ic"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill={`${unUsedColor}`}
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69c-.08.32-.13.68-.13 1.14h-2v-.5a3.997 3.997 0 0 1 1.17-2.83l1.24-1.26c.46-.44.68-1.1.55-1.8a1.99 1.99 0 0 0-1.39-1.53c-1.11-.31-2.14.32-2.47 1.27c-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88a4.008 4.008 0 0 1 3.23-2.83c1.52-.24 2.97.55 3.87 1.8c1.18 1.63.83 3.38-.19 4.4z"
            ></path>
          </svg>
          <span className="hidden sm:block">Infos</span>
        </a>
      </Link>
      {/* <div className={`${isOpen ? "absolute" : "hidden"}  -top-[200px]`}>
        <Filter />
      </div> */}
    </div>
  );
};

export default Menu;
