
//import styles from '/css/components/project/ProjectView.module.scss';
import { useSelector } from "react-redux";
import { useEffect } from 'react';

import EasyJam from '/components/project/EasyJam'
import Riss from '/components/project/Riss'
import LonisWR from '/components/project/LonisWR'


export default function ProjectView() {

  const currentProject = useSelector((state) => state.currentProject.project)

  const resetScrollPos = () => window.scrollTo(0, 0)

  useEffect(() => {
    resetScrollPos();
  }, [currentProject])

  return (
    <>
      { currentProject.name === "Easy Jam" && <EasyJam currentProject={currentProject}></EasyJam> }
      { currentProject.name === "Riss" && <Riss currentProject={currentProject}></Riss> }
      { currentProject.name === "Lonis Weltraumreise" && <LonisWR currentProject={currentProject}/>}
    </>
  );
}
