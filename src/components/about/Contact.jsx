//import styles from '/css/components/views/Home.module.scss';
import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';
import styles from '/css/components/about/Contact.module.scss';

import {Group} from '@mantine/core';  
import config from '@/json/config.json';

import SkillIconContainer from './SkillIconContainer';
import SkillIcon from './SkillIcon';
import { useEffect } from 'react';





export default function Contact() {

  useEffect(() => {
    console.log(config.skills.gestaltung)
  }, []);



  return (
      <GridContainer style={{ minHeight: "100vh"}} cols='9' base={true}>
        <GridItem style={{margin: "20vh 0"}} cols='2/9' base>
            <h1 className={styles.top_h} style={{width: "100%"}}>
              <span className={styles.light}>GET </span>
              <span className={styles.bold}>IN </span>
              <span className={styles.bold}>TOUCH </span>
            </h1>
            <p className={styles.text}>I&apos;LL BE HAPPY TO WORK WITH YOU ON ANY CREATIVE PROJECT</p>
            <p className={styles.text}>Elias Ginter</p>
            <Group h={"40px"}>
              <SkillIcon url={"mail"} black></SkillIcon>
              <p className={styles.text}>eligi9@gmx.de</p>
            </Group>
            <SkillIconContainer black icons={config.contact}/>
        </GridItem>
      </GridContainer>

  );
}