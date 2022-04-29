export const addFavCat = (cat) => {
  const favs = getFavCats();
  const isFav = favs.find((fav) => fav === cat);
  if (isFav) {
    return;
  }
  const cats = JSON.parse(localStorage.getItem("favCats"));
  localStorage.setItem("favCats", JSON.stringify([cat, ...cats]));
};

export const removeFavCat = (cat) => {
  const cats = JSON.parse(localStorage.getItem("favCats"));
  localStorage.setItem(
    "favCats",
    JSON.stringify(cats.filter((c) => c !== cat))
  );
};

export const getFavCats = () => {
  const cats = JSON.parse(localStorage.getItem("favCats"));
  return cats;
};

// Tags
export const addTag = (tag) => {
  const tags = getTags();
  if (!tags) return localStorage.setItem("tags", JSON.stringify([tag]));
  const isTag = tags.find((t) => t === tag);
  if (isTag) {
    return;
  }
  const Ntags = JSON.parse(localStorage.getItem("tags"));
  localStorage.setItem("tags", JSON.stringify([tag, ...Ntags]));
};

export const removeTag = (tag) => {
  const tags = JSON.parse(localStorage.getItem("tags"));
  localStorage.setItem("tags", JSON.stringify(tags.filter((t) => t !== tag)));
};

export const getTags = () => {
  const tags = JSON.parse(localStorage.getItem("tags"));
  return tags;
};
