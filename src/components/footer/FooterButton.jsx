import PropTypes from 'prop-types';

import styles from "/css/components/footer/FooterButton.module.scss";

FooterButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};




export default function FooterButton({label, onClick}) {

  const emitClick = (event) => {
    console.log("emitClick");
    onClick(event);
  }

  return (
    <button className={styles.footerButton} onClick={emitClick}>{label}</button>
  )}