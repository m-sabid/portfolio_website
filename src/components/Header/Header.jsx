import "./header.css";
import Me from "../../assets/me.png";
import { FaDownload } from "react-icons/fa";
import LazyLoad from "react-lazyload";

const Header = () => {
  const handleDownload = () => {
    const resumeURL =
      "https://drive.google.com/file/d/1pjaXHxY3wmLA5F_IG8if_FHnCZ7FN6kD/view?usp=sharing";
    const fileID = resumeURL.split("/")[5];
    const downloadURL = `https://drive.google.com/uc?export=download&id=${fileID}`;

    window.open(downloadURL);
  };
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Hasibul Islam</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Node Js Developer</div>
              <div className="i-title-item">MERN Developer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop stylish websites, web services for customers of
            all sizes, providing customized solutions that cater to their unique
            needs.
          </p>
          <button
            onClick={handleDownload}
            className="i-scroll bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center"
          >
            <FaDownload className="text-xl mr-2" />
            Download Resume
          </button>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <LazyLoad offset={100} placeholder={<div>Loading...</div>}>
          <img src={Me} alt="" className="i-img" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Header;
