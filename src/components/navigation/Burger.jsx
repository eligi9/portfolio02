
import styles from"/css/components/navigation/Burger.module.scss";
import PropTypes from 'prop-types';

import burger from "/icons/burger.svg";
import close from "/icons/close.svg";
import GridItem from '/grid/GridItem';

import {useDisclosure} from '@mantine/hooks';
import { useEffect } from "react";

Burger.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.bool
};


export default function Burger({onClick, state}) {

  const [open, handlers] = useDisclosure(state);
  
  const handleClick = (event) => {
    if (onClick) {
      handlers.toggle();
      onClick(event);
    }
  };

  useEffect(() => {
    state ? handlers.open() : handlers.close();
  }, [state]);
 

  useEffect(() => { 
    console.log(burger)
  }, []);
  

  return (
    <GridItem cols="8/10" justify="center">
      <div className={styles.burger}>
        { open && <img  src={burger} onClick={handleClick} /> }
        { !open && <img src={close} onClick={handleClick}/> }
      </div>
    </GridItem>
  );
}
