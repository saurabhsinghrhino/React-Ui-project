import React from "react";

import Rightcardcontent from "./Rightcardcontent";
const RightCard = (props) => {
  return (
    <div className="h-full w-1/3 overflow-hidden shrink-0 relative shadow-2xl bg-black rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="img" />
      <Rightcardcontent tag={props.tag} id={props.idx} />
    </div>
  );
};

export default RightCard;
