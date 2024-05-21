import { useEffect } from "react";
import PropTypes from 'prop-types';
import ProjectHeading from '/components/project/ProjectHeading';
//import styles from '/css/components/project/ProjectView.module.scss';
import GridContainer from "../grid/GridContainer";
import ProjectSection from "./ProjectSection";
import { useSelector } from "react-redux";
import { render } from "react-dom";

Project.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


export default function Project({type, name}) {

  const currentProject = useSelector((state) => state.project.project)

  const renderSections = () => {
    if(currentProject.content === undefined) return null;
    return Object.values(currentProject.content).map((value, index) => {
      console.log(value);
      return <ProjectSection key={index} title={value.title} text={value.text}></ProjectSection>
    })}
  

  useEffect(()=> {
    console.log(type);
  })

  return (
    <>
     <GridContainer cols='9'>
       <ProjectHeading project={name} type={type}></ProjectHeading>
       <ProjectSection title={`@ ${name}`} text={currentProject.description}></ProjectSection>
        {renderSections()}
     </GridContainer>
    </>
  );
}
