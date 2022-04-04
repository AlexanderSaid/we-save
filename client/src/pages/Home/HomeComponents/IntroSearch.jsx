import React from "react";
import SearchBar from "../../../components/Search-Bar/SearchBar";
const IntroSearch = () => {
  // const [location, setLocation] = useState("");

  // const handleLocation = (e) => {
  //   setLocation(e.target.value);
  // };

  return (
    <section
      className="flex items-center justify-center bg-darkBg block"
      style={{ height: "500px" }}
    >
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
          TIME TO SAVE YOUR FOOD
        </h2>
        <div className="flex justify-center mt-8">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default IntroSearch;
