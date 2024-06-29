//import styles from '/css/components/views/Home.module.scss';
import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';
import styles from '/css/components/about/Info.module.scss';

import img1 from '/images/home/me.png';

import config from '@/json/config.json';

import { useEffect } from 'react';
import { useMouse } from '@mantine/hooks';





export default function Info() {

  const { x, y } = useMouse();

  useEffect(() => {
    console.log(config.skills.gestaltung)
  }, []);



  return (
    <GridContainer style={{padding: "5vh 0px", minHeight: "100vh"}} cols='9' base={true}>
        <GridItem cols='2/9' base>
            <img src={img1} style={{top:y-100, left:x-100}} className={styles.info_image}></img>
            <h1 className={`${styles.top_h} ${styles.top_t}`} style={{width: "100%"}}>
              <span className={styles.light}>ICH BIN </span>
              <span className={styles.bold}>ELIAS GINTER </span>
            </h1>
            <p className={styles.text}>Ich studiere Interaktive Medien an der Technischen Hochschule Augsburg, mit dem Schwerpunkt Informatik. 
              Meine Leidenschaft liegt in der Konzeption und Ausarbeitung von Apps und Webanwendungen, die nicht nur funktional, sondern auch ästhetisch ansprechend sind.
              Für mich steht im Mittelpunkt, konsistente und ansprechende Designs zu schaffen, die dem Puls der Zeit entsprechen und den Benutzern ein immersives Erlebnis bieten können. 
            </p>
     
        </GridItem>
      </GridContainer>
  );
}