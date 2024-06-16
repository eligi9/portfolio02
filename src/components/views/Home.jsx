import styles from '/css/components/views/Home.module.scss';
import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';
import { Stack } from '@mantine/core';

import img1 from '/images/home/me.png';
import { useEffect, useRef } from 'react';
import { useMouse } from '@mantine/hooks';




export default function Home() {
   const myImg = useRef(null);
   const imgBB = useRef(null);
   const { ref, x, y } = useMouse();

   useEffect(() => {
    imgBB.current = myImg.current.getBoundingClientRect();
   },[])



  return (
    <>
      <GridContainer style={{height: "90vh"}} cols='9' base={true}>
          <img style={{top:y-100, left:x-100}}ref={myImg} className={styles.frontImage} src={img1}></img>
        <GridItem cols='2/9' base>
          <Stack w="100%" h="100%" align="flex-start" justify="center" gap={"0px"}>
            <span className={styles.small}>hi i&#39;m Elias Ginter</span>
            <span className={styles.letters}>CREATOR OF </span>
            <span className={styles.letters}>INTERACTIVE </span>
            <span className={styles.letters}>EXPERIENCE </span>
          </Stack>
        </GridItem>
      </GridContainer>
    </>
  );
}
