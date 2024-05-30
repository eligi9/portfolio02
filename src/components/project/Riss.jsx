import ProjectHeading from '/components/project/ProjectHeading';
import '/css/components/project/ProjectView.module.scss';
import GridContainer from "../grid/GridContainer";


//import { useSelector } from "react-redux";
import ProjectDescription from './ProjectDescription';
import PropTypes from 'prop-types';

import img1 from '/assets/images/riss/riss_1.png'
import img2 from '/assets/images/riss/riss_2.png'
import img3 from '/assets/images/riss/riss_3.png'
import img4 from '/assets/images/riss/riss_4.png'
import img5 from '/assets/images/riss/riss_5.png'
import img6 from '/assets/images/riss/riss_6.png'
import img7 from '/assets/images/riss/riss_7.png'
import img8 from '/assets/images/riss/riss_8.png'
import img9 from '/assets/images/riss/riss_9.png'
import img10 from '/assets/images/riss/riss_10.png'
import img11 from '/assets/images/riss/riss_11.png'
import img12 from '/assets/images/riss/riss_12.png'


import ProjectVideo from './ProjectVideo';
import ProjectSection from './ProjectSection';
import ImageGroup from '/components/image/ImageGroup';

Riss.propTypes = {
  currentProject: PropTypes.object.isRequired
};

export default function Riss({currentProject}) {
  
  //const currentProjectX = useSelector((state) => state.project.project)


  return (
    <>
     { currentProject.name === "Riss" && 
        <GridContainer cols='9'>
          <ProjectHeading project={currentProject.name} type={currentProject.type}></ProjectHeading>
          <ProjectVideo video={currentProject.video}/>
          <ProjectDescription title={currentProject.name} > { currentProject.description } </ProjectDescription>
          <ProjectSection currentSection={currentProject.content.Konzept}></ProjectSection>
          <ImageGroup images={[img1, img2]}></ImageGroup>
          <ImageGroup images={[ img3, img5, img4]}></ImageGroup>
          <ProjectSection currentSection={currentProject.content.Musik}></ProjectSection>
          <ProjectSection currentSection={currentProject.content.Visuelle_Effekte}></ProjectSection>
          <ImageGroup images={[ img6, img7]}></ImageGroup>
          <ImageGroup images={[ img8, img9]}></ImageGroup>
          <ProjectSection currentSection={currentProject.content.Dimension}></ProjectSection>
          <ProjectSection currentSection={currentProject.content.Videografie}></ProjectSection>
          <ImageGroup images={[ img10]}></ImageGroup>
          <ProjectSection currentSection={currentProject.content.Greenscreening}></ProjectSection>
          <ImageGroup images={[ img11, img12]}></ImageGroup>
        </GridContainer>
     }
    </>
  );
}
