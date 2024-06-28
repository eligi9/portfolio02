
import {Overlay} from '@mantine/core';
import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';
import PropTypes from 'prop-types';
import MenueItem from '/components/navigation/MenueItem.jsx';

import styles from"/css/components/navigation/Menue.module.scss";

import {useDispatch} from 'react-redux';
import { updateSection } from '/state/currentSectionSlice';
import { resetProject } from '/state/currentProjectSlice';


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
    if (p_destination === "project") {
      dispatch(resetProject(null));
    }
    dispatch(updateSection(p_destination));
    closeMenue();
  };


  return (
      <Overlay color="#000" 
                 backgroundOpacity={0.85} blur={10} pos="fixed" style={{zIndex: 3000}}>
        <GridContainer cols="9" base={true}>
            <GridItem cols="2/9">
                <nav className={styles.navigation}>
                  <MenueItem onClick={() => changeSection("home")}>Home</MenueItem>
                  <MenueItem onClick={() => changeSection("project")}>Projects</MenueItem>
                  <MenueItem onClick={() => changeSection("about")}>About</MenueItem>
                </nav>
            </GridItem>
        </GridContainer>       
      </Overlay>
  );
}
