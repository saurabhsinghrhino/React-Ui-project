import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props);
  return (
    <div className="h-full p-10 overflow-x-auto flex gap-10 flex-nowrap w-2/3 rounded-4xl">
      {props.user.map(function (elem, idx) {
        return <RightCard img={elem.img} tag={elem.tag} idx={idx} />;
      })}
    </div>
  );
};

export default RightContent;
