import PropTypes from 'prop-types';
import '/css/components/project/projectItems/ProjectDescription.module.scss';

import GridItem from '/grid/GridItem';
import SectionParagraph from '/projectItems/SectionParagraph';

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default function ProjectDescription({title, children}) {

  return (
    <GridItem cols="2/9" justify="flex-start"> 
      <SectionParagraph title={ "@"+ title }> {children} </SectionParagraph>
    </GridItem>
  )
}