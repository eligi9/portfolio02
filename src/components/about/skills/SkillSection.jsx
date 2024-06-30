import Proptypes from 'prop-types';
import GridItem from '/grid/GridItem';
import styles from '/css/components/about/skills/SkillSection.module.scss';
import config from '@/json/config.json';

import SkillIconContainer from '/about/skills/SkillIconContainer';


const SkillSection = ({type, children}) => {
  return (
    <GridItem style={{padding: "20px 0"}}cols="2/9">
      <h2 className={styles.sec_h}> {type.toUpperCase()} </h2>
      <p className={styles.text}>
          {children}
      </p>
      <SkillIconContainer icons={config.skills[type]}/>
    </GridItem>
  )
}

SkillSection.propTypes = {
  type: Proptypes.string.isRequired,
  children: Proptypes.node,
}

export default SkillSection;