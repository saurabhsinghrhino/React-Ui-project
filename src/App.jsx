import React from "react";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";

const App = () => {
  const users = [
    {
      img: "https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://i.pinimg.com/736x/35/9e/d1/359ed1955fa477fa211a7b60bed897d6.jpg",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://i.pinimg.com/1200x/55/18/87/551887f865fe94c481ea9c43daf5e47e.jpg",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://i.pinimg.com/736x/4a/f8/3b/4af83bafa8965278b997a2f2c72a1e39.jpg",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://i.pinimg.com/736x/4f/9e/c8/4f9ec80bb97954340bf85b97be5900bc.jpg",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://i.pinimg.com/736x/e7/14/d3/e714d385eac4878dd1b5af4716335009.jpg",
      intro: "",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
