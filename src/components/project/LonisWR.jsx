import ProjectHeading from '/components/project/ProjectHeading';
import '/css/components/project/ProjectView.module.scss';
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";


import ProjectDescription from './ProjectDescription';
import PropTypes from 'prop-types';

import img1 from '/assets/images/lonisweltraumreise/loni_1.png'
import img2 from '/assets/images/lonisweltraumreise/loni_2.png'
import img3 from '/assets/images/lonisweltraumreise/loni_3.png'
import img_interaktion1 from '/assets/images/lonisweltraumreise/interaktion_1.png'
import img_interaktion2 from '/assets/images/lonisweltraumreise/interaktion_2.png'
import img_interaktion3 from '/assets/images/lonisweltraumreise/interaktion_3.png'
import img_individualisierung from '/assets/images/lonisweltraumreise/individualisierung.png'


import OrderedList from './OrderedList';
import ProjectVideo from './ProjectVideo';
import ProjectSection from './ProjectSection';
import ImageGroup from '/components/image/ImageGroup';

EasyJam.propTypes = {
  currentProject: PropTypes.object.isRequired
};

export default function EasyJam({currentProject}) {

  return (
        <GridContainer cols='9'>
          <ProjectHeading project={currentProject.name} type={currentProject.type}></ProjectHeading>
          <ProjectVideo video={currentProject.video}/>
          <ProjectDescription title={currentProject.name} > { currentProject.description } </ProjectDescription>
          <ImageGroup images={[img1, img2, img3]}></ImageGroup>
          <ProjectSection currentSection={currentProject.content.Konzept}></ProjectSection>
          <ProjectSection currentSection={currentProject.content.Exploration_und_Interaktion}></ProjectSection>
          <ProjectSection currentSection={currentProject.content.Abgrenzung_der_Erklärebene}></ProjectSection>
          <ImageGroup images={[img_interaktion1, img_interaktion2, img_interaktion3]}></ImageGroup>
          <ProjectSection currentSection={currentProject.content.Individualisierbarkeit}></ProjectSection>
          <ImageGroup images={[img_individualisierung]}></ImageGroup>
          <ProjectSection currentSection={currentProject.content.Technologien}></ProjectSection>
        </GridContainer>

  );
}
