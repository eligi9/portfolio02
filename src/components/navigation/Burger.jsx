
import styles from"/css/components/navigation/Burger.module.scss";
import PropTypes from 'prop-types';

import burger from "/icons/burger.svg";
import close from "/icons/close.svg";
import GridItem from '/grid/GridItem';

Burger.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.bool.isRequired
};


export default function Burger({onClick, state}) {
  
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  

  return (
    <GridItem cols="8/10" justify="center">
      <div className={styles.burger}>
        { !state && <img className={styles.Burger} src={close} onClick={handleClick} /> }
        { state && <img className={styles.Burger} src={burger} onClick={handleClick}/> }
      </div>
    </GridItem>
  );
}
