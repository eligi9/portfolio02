import GridItem from '/grid/GridItem';
import PropTypes from 'prop-types';
import style from '/css/components/project/projectItems/ProjectHeading.module.scss';

ProjectHeading.propTypes = {
  project: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default function ProjectHeading({project, type}) {

  return (
    <>
    <GridItem cols="2/9" justify={"flex-start"} align={"baseline"}> 
        <h1 className={style.h1} >{project}</h1>
        <h2 className={style.h2} >{type}</h2>
    </GridItem>
    </>
  )
}