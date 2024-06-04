
import PropTypes from 'prop-types';

import Burger from "/components/navigation/Burger.jsx";

import GridContainer from '/grid/GridContainer';

Header.propTypes = {
  onClick: PropTypes.func,
};




export default function Header({onClick}) {

  return (
    <>
      <GridContainer cols="9" color={"black"} base={true}>
          <Burger onClick={onClick} state={true}></Burger>
      </GridContainer>
    </>
  )}