import type { NextPage } from "next";
import Image from "next/image";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 h-screen pt-16 pb-12 w-full max-w-[480px] px-10">
      <h1 className="font-bold text-3xl">404 - Page Not Found</h1>
      <img
        alt="404-random-cat"
        src="https://cataas.com/cat?type=sq"
        className="max-h-[480px] rounded-full"
      />
    </div>
  );
};

export default NotFound;
