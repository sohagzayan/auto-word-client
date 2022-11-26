import { Button, Tooltip } from "@material-tailwind/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const FoundCars = () => {
  return (
    <div>
      <div className="px-5">
        <h5 className="text-softBlack mb-2">
          Found cars: <span className="font-bold">12 324</span>
        </h5>
        <div className="flex items-center gap-4 ">
          <Tooltip content="show">
            <Button className="w-full bg-primary">Show</Button>
          </Tooltip>
          <span className="bg-secondary shadow-sm cursor-pointer inline-block text-primary p-3 rounded-md">
            <AiOutlineClose className="text-[20px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoundCars;
