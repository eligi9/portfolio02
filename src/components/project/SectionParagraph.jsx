import PropTypes from 'prop-types';
import { Stack } from '@mantine/core';
import SectionText from '/components/project/SectionText';
import SectionTextHeading from '/components/project/SectionTextHeading';
import styles from '/css/components/project/SectionParagraph.module.scss';

import '/css/components/project/SectionParagraph.module.scss';

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