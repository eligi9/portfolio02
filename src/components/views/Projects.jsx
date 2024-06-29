import GridContainer from '/grid/GridContainer';

import ProjectSpoiler from '/projectItems/ProjectSpoiler';
import ProjectView from '/components/project/ProjectView'
 

import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from 'uuid';
import { getProject } from '../../state/currentProjectSlice';

Projects.propTypes = {

};


export default function Projects() {
  const allProjects = useSelector((state) => state.allProjects.projects)
  const currentProject = useSelector((state) => state.currentProject.project)
  const dispatch = useDispatch();




  const changeProject = (project) => {
    console.log(project)
    //name to lowercase && and spaces removed
    dispatch(getProject(project.toLowerCase().replace(/ /g, '')))
  }



  //Renders the Projekt Overwiev with spoilers
  const renderProjects = Object.values(allProjects).map((project) => {
    return (
        <ProjectSpoiler onSelect={() => changeProject(project.name)} title={project.name} type={project.type} key={uuidv4()} >
          <p>{project.description}</p>
        </ProjectSpoiler>
    )
  })

  return (
    <>
      {!currentProject && <GridContainer style={{padding: "5vh 0px"}} cols='9' base={true}> {renderProjects} </GridContainer>}
      {currentProject && <ProjectView/>}
    </>
  );
}
