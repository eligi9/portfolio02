//import styles from '/css/components/views/Home.module.scss';
import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';
import styles from '/css/components/about/Skills.module.scss';

import config from '@/json/config.json';

import SkillIconContainer from '/about/skills/SkillIconContainer';
import SkillSection from '/about/skills/SkillSection';
import { useEffect } from 'react';





export default function Skills() {

  useEffect(() => {
    console.log(config.skills.gestaltung)
  }, []);



  return (

      <GridContainer color="#3C3C3C" style={{padding: "5vh 0px", minHeight: "100vh"}} cols='9' base={true}>
        <GridItem cols='2/9' base>
            <h1 className={styles.top_h} style={{width: "100%"}}>
              <span className={styles.light}>MY </span>
              <span className={styles.bold}>SKILLS</span>
            </h1>

            <SkillSection type="informatik"> 
              Für die Umsetzung von Prototypen als Frontend oder Fullstack-Webanwendungen habe ich Erfahrung mit folgenden Tools.
            </SkillSection>

            <SkillSection type="gestaltung">
              Für die Konzeption, Animation und Präsentation verwende ich Regelmäßig diese Tools 
            </SkillSection>
          
        </GridItem>
      </GridContainer>

  );
}