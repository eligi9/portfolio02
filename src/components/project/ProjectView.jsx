import { useEffect } from "react";
import PropTypes from 'prop-types';
import ProjectHeading from '/components/project/ProjectHeading';
import '/css/components/project/ProjectView.module.scss';
import GridContainer from "../grid/GridContainer";
import ProjectSection from "./ProjectSection";

Project.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


export default function Project({type, name}) {

  useEffect(()=> {
    console.log(type);
  })

  return (
    <>
     <GridContainer cols='9'>
       <ProjectHeading project={name} type={type}></ProjectHeading>
       <ProjectSection title="Overview" text="This is a project that I have been working on for a while."></ProjectSection>
     </GridContainer>
    </>
  );
}
