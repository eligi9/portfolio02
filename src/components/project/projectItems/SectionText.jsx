import { Text } from '@mantine/core';
import PropTypes from 'prop-types';
import styles from '/css/components/project/projectItems/SectionText.module.scss';

SectionText.propTypes = {
  children: PropTypes.node,
};

export default function SectionText({ children}) {

  return (
        <Text size="sm" className={styles.text}>{children}</Text>
  )
}