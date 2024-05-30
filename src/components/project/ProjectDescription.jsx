import GridItem from '/components/grid/GridItem';
import PropTypes from 'prop-types';
import '/css/components/project/ProjectDescription.module.scss';
import SectionParagraph from './SectionParagraph';

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default function ProjectDescription({title, children}) {

  return (
    <GridItem cols="2/9"> 
      <SectionParagraph title={ "@"+ title }> {children} </SectionParagraph>
    </GridItem>
  )
}