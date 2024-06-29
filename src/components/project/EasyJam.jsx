import PropTypes from 'prop-types';

import img1 from '/assets/images/easyjam/front1.png'
import img2 from '/assets/images/easyjam/front2.png'
import img3 from '/assets/images/easyjam/front3.png'
import img_bpm from '/assets/images/easyjam/bpm.png'
import img_tone from '/assets/images/easyjam/tone.png'
import img_jam from '/assets/images/easyjam/jam.png'
import img_quin1 from '/assets/images/easyjam/quinten1.png'
import img_quin2 from '/assets/images/easyjam/quinten2.png'

import GridContainer from "/grid/GridContainer";
import GridItem from "/grid/GridItem";

import OrderedList from '/projectItems/OrderedList';
import ProjectVideo from '/projectItems/ProjectVideo';
import ProjectSection from '/projectItems/ProjectSection';
import ProjectDescription from '/projectItems/ProjectDescription';
import ProjectHeading from '/projectItems/ProjectHeading';
import ProjectCredits from '/projectItems/ProjectCredits';

import SkillIconContainer from '/about/SkillIconContainer';

import ImageGroup from '/components/image/ImageGroup';

EasyJam.propTypes = {
  currentProject: PropTypes.object.isRequired
};

export default function EasyJam({currentProject}) {

  return (
        <GridContainer style={{padding: "5vh 0px"}} cols="9" base={true}>
          <ProjectHeading project={currentProject.name} type={currentProject.type}></ProjectHeading>
          <ProjectVideo video={currentProject.video}/>
          <ProjectDescription title={currentProject.name} > { currentProject.description } </ProjectDescription>
          <ImageGroup images={[img1, img2, img3]}></ImageGroup>
          <ProjectSection currentSection={currentProject.content.Konzept}></ProjectSection>
          <GridItem cols="3/9" justify={"flex-start"}>
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
          <GridItem cols='2/9' base>
           <SkillIconContainer black icons={currentProject.skills}/>
          </GridItem>
          <ProjectCredits credits={currentProject.credits}></ProjectCredits>
        </GridContainer>
  );
}
