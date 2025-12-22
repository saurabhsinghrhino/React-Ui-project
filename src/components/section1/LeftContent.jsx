import Arrow from "./Arrow";
import Herotext from "./Herotext";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <Herotext />
      <Arrow />
    </div>
  );
};

export default LeftContent;
