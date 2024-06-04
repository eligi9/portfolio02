
import { useState} from 'react';
import GridContainer from '/grid/GridContainer';

import ProjectSpoiler from '/projectItems/ProjectSpoiler';
import ProjectView from '/components/project/ProjectView'
 

import { useSelector, useDispatch } from "react-redux";
import { getProject } from '/state/currentProjectSlice'

import { v4 as uuidv4 } from 'uuid';


import img1 from '/assets/images/easyjam/easyjam_1.png'
import img2 from '/assets/images/easyjam/easyjam_2.png'
import img3 from '/assets/images/easyjam/easyjam_3.png'

Projects.propTypes = {

};


export default function Projects() {
  const allProjects = useSelector((state) => state.allProjects.projects)
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const changeProject = (project) => {
    console.log(project)
    dispatch(getProject(project.toLowerCase().replace(/ /g, '')))
    setSelected(true)
  }


  const renderProjects = Object.values(allProjects).map((project) => {
    return (
        <ProjectSpoiler onSelect={() => changeProject(project.name)} title={project.name} type={project.type} key={uuidv4()} images={[img1, img2, img3]}>
          <p>{project.description}</p>
        </ProjectSpoiler>
    )
  })

  return (
    <>
      {!selected && <GridContainer cols='9' base={true}> {renderProjects} </GridContainer>}
      {selected && <ProjectView/>}

    </>
  );
}
