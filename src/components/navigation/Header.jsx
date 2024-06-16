
import PropTypes from 'prop-types';
import styles from "/css/components/navigation/Header.module.scss";

import Burger from "/components/navigation/Burger.jsx";

import GridContainer from '/grid/GridContainer';

Header.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.bool
};




export default function Header({onClick, state}) {

  return (
    <>
      <GridContainer cols="9" base={true}>
          <Burger onClick={onClick} state={state}></Burger>
      </GridContainer>
    </>
  )}