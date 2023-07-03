import "./projectCard.css";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
  console.log(project)
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <LazyLoad offset={100} placeholder={<div>Loading...</div>}>
        <img src={project.img} alt="" className="p-img" />
      </LazyLoad>
      <div className="btnContainer">
        <Link
          to={`/projects/${project.id}`}
          state={project}
          className="p-btn bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded"
        >
          Show Details 
        </Link>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="p-btn bg-success"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
