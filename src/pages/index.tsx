import { useEffect, useState, useContext } from "react";
import axios from "axios";
import type { NextPage } from "next";
import Item from "../components/Item";

type Cat = {
  id: string;
  url: string;
  tags: string[];
  createdAt: string;
};

const Home: NextPage = ({ cats }: { cats: Cat[] }) => {
  const [catsList, setCatsList] = useState(cats);

  const handleScroll = async (e) => {
    const bottom =
      e.target.scrollHeight - Math.round(e.target.scrollTop) ===
      e.target.clientHeight;
    if (bottom) {
      const temp = catsList;
      for (let i = 0; i < 5; i++) {
        const {
          data,
        }: {
          data: Cat;
        } = await axios.get(
          `https://cataas.com/cat?width=384&json=true&type=sq`
        );
        //check if the cat is already in the list
        if (temp.find((cat) => cat.id === data.id)) {
          i--;
          continue;
        }
        temp.push(data);
      }
      setCatsList([...temp]);
    }
  };

  return (
    <div
      className="overflow-scroll overflow-x-hidden h-screen pt-16 pb-12 w-full max-w-[480px]"
      onScroll={(e) => handleScroll(e)}
    >
      {catsList.map((item, index) => (
        <Item key={item.id + index} cat={item} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const cats = [];
    for (let i = 0; i < 5; i++) {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/cat?width=384&json=true&type=sq`
      );
      cats.push(data);
    }
    return {
      props: {
        cats,
      },
    };
  } catch (error) {
    console.error(error);
  }
}

export default Home;
