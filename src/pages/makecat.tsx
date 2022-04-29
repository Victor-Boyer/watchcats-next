import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import UseAnimations from "react-useanimations";
import { toast } from "react-toastify";

import arrow from "react-useanimations/lib/arrowRightCircle";
import loader from "react-useanimations/lib/loading";

const Makecat: NextPage = ({ cat }: { cat }) => {
  const [message, setMessage] = useState("");
  const [actualCat, setActualCat] = useState(cat);
  const [firstClick, setFirstClick] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCats = async () => {
    const { data } = await axios.get(
      `https://cataas.com/cat?width=384&json=true&type=sq`
    );
    setActualCat(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const getCat = async () => {
    if (message.length < 1) {
      toast("Please enter a message");
      return;
    }
    setLoading(true);
    const { data } = await axios.get(
      `https://cataas.com/cat/says/${message}?width=384&json=true&type=sq`
    );
    setActualCat(data);
    setLoading(false);
    setFirstClick(true);
  };

  return (
    <div className="flex flex-col justify-evenly h-screen pt-16 pb-12 w-full max-w-[480px]">
      <div className="px-10 sm:px-0">
        <h1 className="font-bold text-lg mb-5">
          Here you can <br /> generate a cat with your custom text
        </h1>
        <div className="flex gap-3 mb-2">
          <input
            placeholder="Enter your message..."
            className="px-6 py-3 rounded-lg bg-blue-medium text-blue-light focus:outline-none focus:shadow-outline-blue border-2 border-blue-medium focus:border-blue-light transition-all w-2/3"
            onChange={(e) => {
              setMessage(e.target.value);
              e.target.value != message && setFirstClick(false);
            }}
          />
          <button
            className="bg-blue-light text-blue-dark px-2 w-[100px] py-3 rounded-lg font-bold text-center flex items-center justify-center"
            onClick={() => getCat()}
          >
            {loading ? (
              <UseAnimations animation={loader} />
            ) : firstClick ? (
              <UseAnimations animation={arrow} size={28} speed={3} />
            ) : (
              "Create"
            )}
          </button>
        </div>
      </div>
      {actualCat && <Item cat={actualCat} />}
    </div>
  );
};

export default Makecat;
