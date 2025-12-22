import { ArrowRight } from "lucide-react";

const Rightcardcontent = (props) => {
  return (
    <div className="h-full w-full top-0 left-0 absolute  p-6 flex flex-col justify-between">
      <h1 className="bg-gray-600 text-white rounded-full h-10 w-10 text-center py-1 text-2xl font-semibold">
        {props.id + 1}
      </h1>
      <div>
        <p className="text-white font-semibold text-lg leading-normal mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, unde.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
          quam.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white font-semibold py-3 px-7 rounded-full text-lg">
            {props.tag}
          </button>
          <button className="bg-blue-500 text-white font-semibold py-3 px-4 text-lg rounded-full ">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightcardcontent;
