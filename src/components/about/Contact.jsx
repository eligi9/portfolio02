//import styles from '/css/components/views/Home.module.scss';
import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';
import styles from '/css/components/about/Contact.module.scss';

import {Group} from '@mantine/core';  
import config from '@/json/config.json';

import SkillIcon from '/about/skills/SkillIcon';
import { useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';





export default function Contact() {

  const 
  renderLinks = () => {
    console.log("renderLinks")
    return Object.entries(config.contact).map(([key, skill]) => {
      return( <SkillIcon key={uuidv4()} src={key} url={skill} black/>)
    })
  }
   

  useEffect(() => {
    console.log(config.skills.gestaltung)
  }, []);



  return (
      <GridContainer style={{padding: "5vh 0px", minHeight: "100vh"}} cols='9' base={true}>
        <GridItem cols='2/9' base>
            <h1 className={styles.top_h} style={{width: "100%"}}>
              <span className={styles.light}>GET </span>
              <span className={styles.bold}>IN </span>
              <span className={styles.bold}>TOUCH </span>
            </h1>
            <p className={styles.text}>I&apos;LL BE HAPPY TO WORK WITH YOU ON ANY CREATIVE PROJECT</p>
            <p className={styles.text}>Elias Ginter</p>
            <Group h={"40px"}>
              <SkillIcon src={"mail"} black still></SkillIcon>
              <p className={styles.text}>eligi9@gmx.de</p>
            </Group>
            <div className={styles.contact_icons}>
              {renderLinks()}
            </div>
            
        </GridItem>
      </GridContainer>

  );
}