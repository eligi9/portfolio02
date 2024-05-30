import GridItem from '/components/grid/GridItem';
import { Stack } from '@mantine/core';
import PropTypes from 'prop-types';
import styles from '/css/components/project/ProjectSection.module.scss';
import { v4 as uuidv4 } from 'uuid';
import SectionParagraph from './SectionParagraph';
import SectionHeading from '/components/project/SectionHeading';

ProjectSection.propTypes = {
  currentSection: PropTypes.object,
};

export default function ProjectSection({currentSection}) {

  const renderTextSections = () => {
    if( currentSection === undefined ) {
      console.log("No content");
      console.log(currentSection);
      return null;
    }

    return Object.values(currentSection).map((value) => {
      if(value.title !== undefined) {
      return (
        <SectionParagraph key={ uuidv4() } title={ value.title }>{ value.text }</SectionParagraph>
        )
      }
    })}


  return (
    <>
        <GridItem cols="2/9">
          {console.log(currentSection)}
            <Stack gap={"sm"} align='flex-start' justify='space-between'  className={styles.section}>
              {currentSection.title !== "" && <SectionHeading title={currentSection.title}/>}
                { renderTextSections() }
            </Stack>
        </GridItem>
    </>
  )
}