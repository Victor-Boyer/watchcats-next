import type { NextPage } from "next";
import UseAnimations from "react-useanimations";
import check from "react-useanimations/lib/radioButton";
import List from "./liItem";

const AllTags = [
  "funny",
  "kitten",
  "cute",
  "scary",
  "angry",
  "silly",
  "sweet",
  "flirty",
];

const Filter: NextPage = () => {
  return (
    <ul className="bg-blue-medium rounded-t-lg w-screen h-[200px] flex flex-col justify-center gap-2 px-4 overflow-scroll overflow-x-hidden pt-2">
      {AllTags.map((tag, index) => (
        <List title={tag} key={index + tag} />
      ))}
    </ul>
  );
};

export default Filter;
