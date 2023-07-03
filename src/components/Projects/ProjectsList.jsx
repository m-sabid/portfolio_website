import "./projectList.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { products } from "../../../public/data";

const ProjectsList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="text-2xl">
          || My Web Development Journey || <br />{" "}
          <span className="text-4xl font-bold">Explore My Projects</span>
        </h1>
        <p className="pl-desc">
          Igniting the Boundless Potential of Web Development: Immerse Yourself
          in My Captivating Portfolio Journey
        </p>
      </div>
      <div className="pl-list">
        {products.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
