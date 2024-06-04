import styles from"/css/components/navigation/MenueItem.module.scss";
import PropTypes from 'prop-types';



Burger.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
 
};


export default function Burger({onClick, children}) {
  
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  

  return (
    <button className={styles.menueItem} onClick={handleClick}>{children}</button>
  );
}
