import { useEffect, useState } from "react";
import axios from "axios";
import type { NextPage } from "next";
import Item from "../components/Item";

const p1 = "font-bold text-xl my-4";

const Info: NextPage = () => {
  return (
    <div className="flex flex-col justify-evenly h-screen pt-16 pb-12 w-full max-w-[480px] px-10">
      <div>
        <h1 className={p1}>Privacy</h1>
        <p className="mb-2">WatchCats does not collect any user data. </p>
        <p>
          We only use your browser's local storage to save your favorites cats.
        </p>
        <p>
          We use CloudFlare as hosting and it analytic tool. <br />
          <a
            href="https://blog.cloudflare.com/privacy-first-web-analytics/"
            target="_blank"
            className="font-medium"
          >
            Click here {""}
          </a>
          for more information on their data policy
        </p>
      </div>
      <div>
        <h1 className={p1}>Cat</h1>
        <p>
          All cats come from{" "}
          <a href="https://cataas.com" target="_blank" className="font-medium">
            cataas
          </a>
          .
        </p>
      </div>
      <div>
        <h1 className={p1}>Development</h1>
        <p>
          This application is still in development. <br />
          We are (for the moment) a one person team working on it. So please be
          patient. <br />
          If you have any ideas or lovely message to tell, contact us at
          <span className="font-medium">cat@watchcats.fr</span>
        </p>
      </div>
      <div className="w-full">
        <span className="flex items-center justify-center w-full font-bold text-2xl gap-2">
          To the catfinity
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
              fill="#7AA5D2"
              d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57c-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12A2.996 2.996 0 0 1 9 18zm4-9c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Info;
