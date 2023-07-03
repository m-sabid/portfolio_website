import "./about.css";
import Award from "../../assets/award.png";
import AboutImage from "../../assets/about.png";
import LazyLoad from "react-lazyload";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <LazyLoad offset={100} placeholder={<div>Loading...</div>}>
            <img src={AboutImage} alt="About image" className="a-img" />
          </LazyLoad>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Crafting Engaging Web Experiences with Expertise and Passion
        </p>
        <p className="a-desc">
          I am Hasibul Islam, a dedicated and skilled web developer based in
          Gazipur, Dhaka, Bangladesh. With a strong background in HTML, CSS, and
          JavaScript, along with expertise in React, Tailwind CSS, and
          Bootstrap, I specialize in creating visually appealing and
          user-friendly websites.
        </p>
        <div className="a-award">
          <LazyLoad offset={100} placeholder={<div>Loading...</div>}>
            <img src={Award} alt="" className="a-award-img" />
          </LazyLoad>
          <div className="a-award-texts">
            <h4 className="a-award-title">Best React Developer Awards 2023</h4>
            <h4 className="text-[#555] uppercase bg-gray-100 w-fit px-4 py-1 rounded-full">
              Rizik IT
            </h4>
            <p className="mt-1 text-sm text-dark">
              The Epitome of Excellence as a React Developer, Winner of the Best
              React Developer Award.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
