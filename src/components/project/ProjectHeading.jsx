import GridItem from '/components/grid/GridItem';
import { Stack } from '@mantine/core';
import PropTypes from 'prop-types';
import '/css/components/project/ProjectHeading.module.scss';

ProjectHeading.propTypes = {
  project: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default function ProjectHeading({project, type}) {

  return (
    <>
    <GridItem cols="2/9" color="red"> 
      <Stack gap={0} align='stretch' justify='flex-start'>  
        <h1 style={{textAlign:"left"}} >{project}</h1>
        <h2 style={{textAlign:"left"}} >{type}</h2>
      </Stack>
    </GridItem>
    </>
  )
}