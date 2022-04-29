import "../styles/globals.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { getFavCats, getTags } from "../helper/localStorage";
import { TagsContext } from "../context/tags";
import { FavCatsContext } from "../context/cats";

function MyApp({ Component, pageProps }: AppProps) {
  const [favCats, setFavCats] = useState([]);
  useEffect(() => {
    if (!getFavCats()) {
      localStorage.setItem("favCats", JSON.stringify([]));
    } else {
      setFavCats(getFavCats());
    }
  }, []);

  return (
    <main>
      <title>WatchCats</title>
      <FavCatsContext.Provider value={{ favCats, setFavCats }}>
        <>
          <NavBar />
          <section className="bg-blue-dark sm:bg-gradient-to-l sm:from-blue-medium sm:to-blue-dark text-white flex flex-col justify-center items-center sm:gap-12">
            <Component {...pageProps} />
          </section>
          <ToastContainer />
          <Footer />
        </>
      </FavCatsContext.Provider>
    </main>
  );
}

export default MyApp;
