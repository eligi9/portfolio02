import { useEffect } from "react";
import PropTypes from 'prop-types';
import ProjectHeading from '/components/project/ProjectHeading';

Project.propTypes = {
  type: PropTypes.string.isRequired,
};


export default function Project({type}) {

  useEffect(()=> {
    console.log(type);
  })

  return (
    <>
    <ProjectHeading>{type}</ProjectHeading>
    </>
  );
}
