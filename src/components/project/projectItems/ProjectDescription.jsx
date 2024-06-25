import PropTypes from 'prop-types';
import '/css/components/project/projectItems/ProjectDescription.module.scss';

import {Text} from "@mantine/core";

import GridItem from '/grid/GridItem';

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default function ProjectDescription({title, children}) {

  return (
    <GridItem cols="2/9" justify="flex-start"> 
      <h3 style={{textAlign:"left"}} >{ "@"+ title }</h3>
      <p>{children}</p>
    </GridItem>
  )
}