import GridItem from '/components/grid/GridItem';
import { Stack, Text } from '@mantine/core';
import PropTypes from 'prop-types';
import '/css/components/project/ProjectSection.module.scss';

ProjectSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function ProjectSection({title, text}) {

  return (
    <>
    <GridItem cols="2/9"> 
      <Stack gap={0} align='stretch' justify='flex-start'>  
        <h4 style={{textAlign:"left"}} >{title}</h4>
        <Text size="sm">{text}</Text>
      </Stack>
    </GridItem>
    </>
  )
}