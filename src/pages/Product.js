import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import CarDetailsModal from "../components/CarDetailsModal/CarDetailsModal";

const Product = ({ data }) => {
  const [size, setSize] = useState(null);
  const [carInfo, setCarInfo] = useState({});

  const handleOpen = (value) => setSize(value);

  const {
    car_name,
    image,
    mile_range,
    location,
    engine,
    transmission,
    price,
    _id,
  } = data;

  const handleDetails = async (id) => {
    console.log(id);
    handleOpen("xxl");
    axios
      .get(`https://auto-word-api-production.up.railway.app/api/product/${id}`)
      .then((res) => setCarInfo(res.data.data));
  };

  return (
    <div className="my-card p-5 bg-white rounded">
      <div className="car-name flex justify-between">
        <div className="car-info">
          <p className="text-softBlack">
            {/* {createdDay}, <span className="text-gray">{createdTime}</span> */}
          </p>
          <h4 className="font-bold text-softBlack">{car_name}</h4>
        </div>
        <div className="flex justify-center items-center rounded bg-secondary text-primary px-4">
          <AiOutlineStar className="" />
        </div>
      </div>
      {/* car image  */}
      <div className="car-image my-3">
        <img className="h-auto md:h-[155px] w-full" src={image} alt="" />
      </div>
      {/* more info  */}
      <div className="flex justify-between text-[12px]">
        <div>
          <p className="mb-2 text-[14px] lg:text-[11px] text-gray">
            Mileage:{" "}
            <span className="font-bold text-softBlack">{mile_range}</span>{" "}
          </p>
          <p className="mb-2 text-[14px] lg:text-[11px] text-gray">
            Engine: <span className="font-bold text-softBlack">{engine}</span>{" "}
          </p>
        </div>
        <div>
          <p className="mb-2 text-[14px] lg:text-[11px] text-gray">
            Location:{" "}
            <span className="font-bold text-softBlack">{location}</span>{" "}
          </p>
          <p className="mb-2 text-[14px] lg:text-[11px] text-gray">
            Transmission:{" "}
            <span className="font-bold text-softBlack">{transmission}</span>{" "}
          </p>
        </div>
      </div>
      {/* price  */}
      <div className="flex justify-between items-center mt-2">
        <h2 className="font-extrabold text-softBlack">{price}$</h2>
        <Button onClick={() => handleDetails(_id)} className="bg-primary">
          More Details
        </Button>
        <CarDetailsModal
          size={size}
          handleOpen={handleOpen}
          carInfo={carInfo}
        />
      </div>
    </div>
  );
};

export default Product;
