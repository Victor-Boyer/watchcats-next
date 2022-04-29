import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../components/Item";

const ShowCat: NextPage = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const tm = window.location.href;
    tm.includes("says") ? setUrl(cutString(tm, id[0])) : setUrl(id[0]);
  }, [id]);

  const cutString = (str, id) => {
    const index = str.indexOf("says");
    return "/cat/" + id + "/" + str.substring(index, str.length);
  };

  return (
    <div className="overflow-scroll overflow-x-hidden h-screen pt-16 pb-12 w-full max-w-[480px] flex flex-col justify-center">
      <div className="px-10 sm:px-0">
        <h1 className="font-bold text-lg mb-12">
          Someone sent you a cat !<br /> Take care of it
        </h1>
      </div>
      <Item
        cat={{
          id: "",
          url,
          tags: [],
          createdAt: "",
        }}
      />
      <div className="flex gap-3 mb-2 w-full justify-center sm:justify-start">
        <Link href="/">
          <a className="bg-blue-light text-blue-dark px-2 w-[200px] py-3 rounded-lg font-bold text-center flex items-center justify-center">
            More cats
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ShowCat;
