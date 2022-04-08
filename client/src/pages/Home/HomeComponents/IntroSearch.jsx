import React from "react";
import SearchBar from "../../../components/Search-Bar/SearchBar";
const IntroSearch = () => {
  // const [location, setLocation] = useState("");

  // const handleLocation = (e) => {
  //   setLocation(e.target.value);
  // };

  return (
    <section className="flex items-center justify-center bg-darkBg block w-full h-[450px]">
      <div className="text-center flex flex-col w-full max-w-[500px] mx-4">
        <h3 className="my-12 sm:text-3xl font-title font-extrabold text-lightFont tracking-wider">
          TIME TO SAVE <br className="sm:hidden" />
          YOUR FOOD
        </h3>
        <SearchBar />
      </div>
    </section>
  );
};

export default IntroSearch;
