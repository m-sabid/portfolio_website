import { useContext } from "react";
import { ThemeContext } from "../context";
import Toggle from "../components/toggle/Toggle";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import ProjectsList from "../components/Projects/ProjectsList";
import Contact from "../components/Contact/Contact";
import TopNab from "../components/shared/TopNab";
//

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <TopNab />
        <Toggle />
        <Header />
        <About />
        <ProjectsList />
        <Contact />
      </div>
    </>
  );
};

export default Home;
