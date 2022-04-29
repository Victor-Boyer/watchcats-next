import type { NextPage } from "next";
import { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import check from "react-useanimations/lib/radioButton";
import { getTags, removeTag, addTag } from "../../helper/localStorage";

interface ItemState {
  title: string;
}

const List: NextPage<ItemState> = ({ title }: { title: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checkTag = getTags();
    if (checkTag && checkTag.includes(title)) {
      setIsChecked(true);
    }
  }, []);

  return (
    <li
      className="flex items-center gap-2 font-medium text-grey"
      onClick={(e) => {
        e.preventDefault();
        if (isChecked) {
          removeTag(title);
          setIsChecked(false);
        } else {
          addTag(title);
          setIsChecked(true);
        }
      }}
    >
      <UseAnimations
        reverse={isChecked}
        animation={check}
        strokeColor="white"
        size={32}
      />
      <p>{title}</p>
    </li>
  );
};

export default List;
