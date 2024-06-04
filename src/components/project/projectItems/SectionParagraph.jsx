import PropTypes from 'prop-types';
import { Stack } from '@mantine/core';
import styles from '/css/components/project/projectItems/SectionParagraph.module.scss';

import SectionText from '/projectItems/SectionText';
import SectionTextHeading from '/projectItems/SectionTextHeading';


SectionParagraph.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default function SectionParagraph({children, title}) {

  return (
    <Stack gap={'xs'} align='flex-start' justify='space-between' className={styles.paragraph}>
      {title !== "" && <SectionTextHeading title={ title }/>}
      <SectionText> { children } </SectionText>
    </Stack>
 
  )
}