import React from "react";

interface TagsContextInterface {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export const TagsContext = React.createContext({
  tags: [],
  setTags: () => {
    return;
  },
} as TagsContextInterface);
