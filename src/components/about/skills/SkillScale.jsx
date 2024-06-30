//import styles from '/css/components/views/Home.module.scss';
import styles from '/css/components/about/skills/SkillScale.module.scss';
import PropTypes from 'prop-types';


SkillScale.propTypes = {
  value: PropTypes.number,
};


export default function SkillScale({value}) {

  return (
     <div className={styles.outer}>
      <div className={styles.inner} style={{width: value + "%"}}></div>
     </div>
  );
}