import { useEffect, useState, useContext } from "react";
import type { NextPage } from "next";
import UseAnimation from "react-useanimations";
import { toast } from "react-toastify";

import heart from "react-useanimations/lib/heart";
import share from "react-useanimations/lib/share";
import loading from "react-useanimations/lib/loading3";
import { addFavCat, getFavCats, removeFavCat } from "../../helper/localStorage";

import { FavCatsContext } from "../../context/cats";
import Image from "next/image";

interface ItemState {
  cat: {
    id: string;
    url: string;
    tags: string[];
    createdAt: string;
  };
}

const Item: NextPage<ItemState> = ({
  cat,
}: {
  cat: {
    id: string;
    url: string;
    tags: string[];
    createdAt: string;
  };
}) => {
  const [isLike, setIsLike] = useState(false);
  const { favCats, setFavCats } = useContext(FavCatsContext);

  useEffect(() => {
    //check if the cat is already in fav
    if (favCats && favCats.includes(cat.url)) {
      setIsLike(true);
    }
  }, []);

  const favHandler = () => {
    if (isLike) {
      removeFavCat(cat.url);
      const newFavCats = favCats.filter((fav) => fav !== cat.url);
      setFavCats(newFavCats);
      setIsLike(false);
      toast.error("Removed from fav");
    } else {
      if (favCats && !favCats.includes(cat.url)) {
        setFavCats([cat.url, ...favCats]);
        addFavCat(cat.url);
        setIsLike(true);
        toast.success("Added to fav");
      }
    }
  };

  const cutString = (str, id) => {
    const index = str.indexOf("says");
    return id + "/" + str.substring(index, str.length);
  };

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(
      `https://watchcats.fr/cat/${
        cat.url.includes("says") ? cutString(cat.url, cat.id) : cat.id
      }`
    );
    toast.success("Link copied !");
  };

  return (
    <div className="max-w-[480px] sm:bg-blue-medium sm:rounded-lg sm:mb-20">
      <div
        className={`bg-gradient-to-r from-grey to-white h-96 flex items-center ${
          !cat && "animate-pulse"
        } justify-center`}
      >
        {!cat ? (
          <UseAnimation animation={loading} size={36} strokeColor="grey" />
        ) : (
          <img
            alt="cat"
            src={"https://cataas.com" + cat.url}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex h-14 gap-2 px-4 pt-2 md:items-center md:pt-0">
        <UseAnimation
          reverse={isLike}
          onClick={() => {
            favHandler();
          }}
          animation={heart}
          className="cursor-pointer"
          strokeColor="#FFFFFF"
          fillColor="white"
          size={32}
        />
        <UseAnimation
          animation={share}
          className="cursor-pointer"
          strokeColor="#FFFFFF"
          size={32}
          onClick={() => copyToClipboard()}
          speed={3}
        />
      </div>
    </div>
  );
};

export default Item;
