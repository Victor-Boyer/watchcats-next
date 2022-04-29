import axios from "axios";

export const getCats = async () => {
  try {
    const cats = [];
    for (let i = 0; i < 5; i++) {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/cat?json=true&type=sq`
      );
      cats.push(data);
    }
    return cats;
  } catch (error) {
    console.error(error);
  }
};

export const getMessageCat = async (message) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/cat/says/${message}?json=true&type=sq`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
