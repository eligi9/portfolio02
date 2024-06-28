
import Skills from '../about/Skills';
import Contact from '../about/Contact';

import styles from '/css/components/about/Contact.module.scss';

import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';





export default function Home() {



  return (
    <>
      <GridContainer style={{minHeight: "100vh"}} cols='9' base={true}>
        <GridItem style={{margin: "20vh 0"}} cols='2/9' base>
            <h1 className={styles.top_h} style={{width: "100%"}}>
              <span className={styles.light}>ICH BIN </span>
              <span className={styles.bold}>ELIAS GINTER </span>
            </h1>
            <p className={styles.text}>Ich studiere Interaktive Medien an der Technischen Hochschule Augsburg, mit dem Schwerpunkt Informatik. 
              Meine Leidenschaft liegt in der Konzeption und Ausarbeitung von Apps und Webanwendungen, die nicht nur funktional, sondern auch ästhetisch ansprechend sind.
              Für mich steht im Mittelpunkt, konsistente und ansprechende Designs zu schaffen, die dem Puls der Zeit entsprechen und den Benutzern ein immersives Erlebnis bieten können. 
            </p>
     
        </GridItem>
      </GridContainer>
     <Skills></Skills>
     <Contact></Contact>
    </>
  );
}
