//import styles from '/css/components/views/Home.module.scss';
import styles from '/css/components/about/skills/SkillIconContainer.module.scss'
import PropTypes from 'prop-types'

import SkillIcon from '/about/skills/SkillIcon';
import { v4 as uuidv4 } from 'uuid';


SkillIconContainer.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  black: PropTypes.bool,
};


export default function SkillIconContainer({icons, black}) {

    const renderIcons = icons.map((url) => (
      <SkillIcon black={black} key={uuidv4()} src={url} />
    ));

  return (
    <>
      <div className={styles.skillIconContainer}>
          {renderIcons}
      </div>
    </>
  );
}