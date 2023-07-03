import React, { useContext } from "react";
import LazyLoad from "react-lazyload";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TopNab from "../components/shared/TopNab";
import Toggle from "../components/toggle/Toggle";
import { ThemeContext } from "../context";
import { AiFillCaretRight } from "react-icons/ai";

const ProjectDetails = () => {
  const location = useLocation();
  const data = location.state;
  const sliderImage = location.state.slider_images;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  console.log(data);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
      className="min-h-screen mb-10"
    >
      <TopNab />
      <Toggle />
      <div className="">
        <h1 className="text-center text-3xl font-bold">{data.projectName}</h1>
        <div className="flex justify-center items-center my-5 gap-3">
          <button className="bg-gray-100 p-2 rounded-md text-sm">
            {data.technology.technology_1}
          </button>
          <button className="bg-gray-100 p-2 rounded-md text-sm">
            {data.technology.technology_2}
          </button>
          <button className="bg-gray-100 p-2 rounded-md text-sm">
            {data.technology.technology_3}
          </button>
          <button className="bg-gray-100 p-2 rounded-md text-sm">
            {data.technology.technology_4}
          </button>
          <button className="bg-gray-100 p-2 rounded-md text-sm">
            {data.technology.technology_5}
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full h-[80vh] my-5"
        >
          {sliderImage.map((image, index) => (
            <SwiperSlide key={index} className="border-2">
              <LazyLoad offset={100} placeholder={<div>Loading...</div>}>
                <img
                  src={image}
                  alt={`Slider ${index + 1}`}
                  className="w-full object-cover object-center"
                />
              </LazyLoad>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                <h2 className="text-3xl uppercase">{image?.alt_description}</h2>
                <p className="text-md">{image?.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container mx-auto my-5">
        <h3 className="text-center text-2xl font-bold">{data.projectTitle}</h3>
        <p>{data.projectDescription}</p>
        <ul>
          <li className="flex items-center mx-2">
            <AiFillCaretRight />
            {data.features.feature_1}
          </li>
          <li className="flex items-center mx-2">
            <AiFillCaretRight />
            {data.features.feature_2}
          </li>
          <li className="flex items-center mx-2">
            <AiFillCaretRight />
            {data.features.feature_3}
          </li>
          <li className="flex items-center mx-2">
            <AiFillCaretRight />
            {data.features.feature_4}
          </li>
          <li className="flex items-center mx-2">
            <AiFillCaretRight />
            {data.features.feature_5}
          </li>
        </ul>
      </div>
      <div className="container mx-auto w-full flex justify-center">
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="bg-success px-5 py-2 rounded-md font-bold w-2/5 text-center"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
