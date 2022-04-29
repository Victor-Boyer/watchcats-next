import { useContext, useEffect, useState } from "react";
import type { NextPage } from "next";
import Item from "../components/Item";
import { getFavCats } from "../helper/localStorage";
import { FavCatsContext } from "../context/cats";

const Info: NextPage = () => {
  const { favCats } = useContext(FavCatsContext);

  const cutString = (str) => {
    const index = str.indexOf("?");
    return str.slice(0, index).substring(5, str.length);
  };

  return (
    <div className="overflow-scroll overflow-x-hidden h-screen pt-16 pb-12 w-full max-w-[480px]">
      {favCats && favCats.length > 0 ? (
        favCats.map((cat, index) => (
          <Item
            key={index + cat}
            cat={{
              id: cutString(cat),
              tags: [],
              url: cat,
              createdAt: "",
            }}
          />
        ))
      ) : (
        <div className="text-center font-bold text-3xl">No Favs found...</div>
      )}
    </div>
  );
};

export default Info;
