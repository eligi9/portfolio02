import PropTypes from 'prop-types';
//import styles from '/css/components/project/ProjectView.module.scss';


import { useSelector } from "react-redux";

import EasyJam from '/components/project/EasyJam'
import Riss from '/components/project/Riss'


Project.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


export default function Project({type, name}) {

  const currentProject = useSelector((state) => state.project.project)

  return (
    <>
      { currentProject.name === "Easy Jam" && <EasyJam currentProject={currentProject}></EasyJam> }
      { currentProject.name === "Riss" && <Riss currentProject={currentProject}></Riss> }
      { currentProject.name === "Lonis Weltraumreise" && <Riss currentProject={currentProject}></Riss> }

    </>
  );
}
