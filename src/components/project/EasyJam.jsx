import ProjectHeading from '/components/project/ProjectHeading';
import '/css/components/project/ProjectView.module.scss';
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";


import ProjectDescription from './ProjectDescription';
import PropTypes from 'prop-types';

import img1 from '/assets/images/easyjam/easyjam_1.png'
import img2 from '/assets/images/easyjam/easyjam_2.png'
import img3 from '/assets/images/easyjam/easyjam_3.png'
import img_bpm from '/assets/images/easyjam/bpm.png'
import img_tone from '/assets/images/easyjam/tone.png'
import img_jam from '/assets/images/easyjam/jam.png'
import img_quin1 from '/assets/images/easyjam/quinten1.png'
import img_quin2 from '/assets/images/easyjam/quinten2.png'

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
          <GridItem cols="3/9">
            <OrderedList 
              listItems={[
                "Die Festlegung des Tempos in dem man mit dem Finger auf den Bildschirm tappt.",
                "Die Festlegung des Grundtons durch einsingen.",
                "Das Zusammenstellen einer Chordprogression."
              ]}></OrderedList>
          </GridItem>
          <ProjectSection currentSection={currentProject.content.Gestaltung}></ProjectSection>
          <ImageGroup images={[img_bpm, img_tone, img_jam]}></ImageGroup>
          <ProjectSection currentSection={currentProject.content.FestlegungTempo}></ProjectSection>
          <ProjectSection currentSection={currentProject.content.FestlegungGrundton}></ProjectSection>
          <ImageGroup images={[img_quin1, img_quin2]}></ImageGroup>
        </GridContainer>

  );
}
