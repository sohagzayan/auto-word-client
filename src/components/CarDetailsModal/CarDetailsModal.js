import React from "react";
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

const CarDetailsModal = ({ size, handleOpen, carInfo }) => {
  const { car_name, image, mile_range, location, engine, transmission, price } =
    carInfo;

  return (
    <>
      <Fragment>
        <Dialog
          className="overflow-y-auto"
          open={size === "xxl"}
          size={size || "md"}
          handler={handleOpen}
        >
          <DialogHeader className="text-lg md:text-xl flex justify-center items-center w-full text-softBlack relative">
            More Details About Your Dream Car
          </DialogHeader>
          <span
            onClick={() => handleOpen(null)}
            className="absolute top-3 right-5 p-2 bg-secondary text-primary rounded-full cursor-pointer"
          >
            <AiOutlineClose className="text-xl" />
          </span>
          <DialogBody className="grid grid-cols-1 md:grid-cols-2" divider>
            <div className="p-3">
              <img
                className="rounded w-full h-auto md:h-[350px]"
                src={image}
                alt=""
              />
            </div>
            <div className="p-3 leading-10">
              <div>
                <h3 className="font-bold">
                  Posted: <span className="text-gray mx-3">Today</span>
                  12:34
                </h3>
                <h3 className="font-bold">
                  Car Name <span className="text-gray ml-3">{car_name}</span>
                </h3>
                <h3 className="font-bold">
                  Mileage: <span className="text-gray ml-3">{mile_range}</span>
                </h3>
                <h3 className="font-bold">
                  Location: <span className="text-gray ml-3">{location}</span>
                </h3>
                <h3 className="font-bold">
                  Engine: <span className="text-gray ml-3">{engine}</span>
                </h3>
                <h3 className="font-bold">
                  Transmission:{" "}
                  <span className="text-gray ml-3">{transmission}</span>
                </h3>
                <h3 className="font-bold">
                  Price: $<span className="text-gray ml-3">{price}</span>
                </h3>
              </div>
              <Button
                className="my-5 bg-secondary text-primary font-bold text-lg capitalize flex justify-center items-center"
                fullWidth
              >
                Make Purchase <FaLocationArrow className="ml-2" />{" "}
              </Button>
            </div>
          </DialogBody>
        </Dialog>
      </Fragment>
    </>
  );
};

export default CarDetailsModal;
