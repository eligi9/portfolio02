
import PropTypes from 'prop-types';

import Burger from "/components/navigation/Burger.jsx";

import GridContainer from '/grid/GridContainer';

Header.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.bool
};




export default function Header({onClick, state}) {

  return (
    <>
      <GridContainer cols="9" color={"black"} base={true}>
          <Burger onClick={onClick} state={state}></Burger>
      </GridContainer>
    </>
  )}