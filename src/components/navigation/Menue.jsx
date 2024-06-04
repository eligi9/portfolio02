
import {Overlay, Stack} from '@mantine/core';
import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';
import PropTypes from 'prop-types';
import Burger from '/components/navigation/Burger.jsx';
import MenueItem from '/components/navigation/MenueItem.jsx';

import {useDispatch} from 'react-redux';
import {updateSection} from '/state/currentSectionSlice';


Menue.propTypes = {
  onClick: PropTypes.func,
  //open: PropTypes.bool.isRequired,
};


export default function Menue({onClick}) {
  const dispatch = useDispatch();


  const closeMenue= (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  const changeSection = (p_destination) => {
    dispatch(updateSection(p_destination));
    closeMenue();
  };


  return (
      <Overlay color="#000" 
                 backgroundOpacity={0.85} blur={10} pos="fixed" style={{zIndex: 3000}}>
        <GridContainer cols="9" base={true}>
          <GridItem cols="3/8">
            <Stack h={"100vh"} w={"100%"} justify="center" align='center'>
              <MenueItem onClick={() => changeSection("home")}>Home</MenueItem>
              <MenueItem onClick={() => changeSection("project")}>Projects</MenueItem>
              <MenueItem onClick={() => changeSection("about")}>About</MenueItem>
            </Stack>
          </GridItem>
         <Burger state={false} onClick={closeMenue}/>
        </GridContainer>       
      </Overlay>
  );
}
