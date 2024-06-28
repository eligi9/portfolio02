import GridContainer from '/grid/GridContainer';
import GridItem      from '/grid/GridItem';

import styles from "/css/components/footer/Imprint.module.scss";

function Imprint() {


  return (
    <GridContainer cols="9" base={true} style={{height: "90vh", padding:"4em 0"}}>
      <GridItem cols="2/9">
      <div className={styles.footer}>
        <h1>Impressum</h1>
            <p>Elias Ginter</p> 
            <p>Maximilianstra&szlig;e 63 </p>+
            <p>86150 Augsburg</p>
          <h2>Kontakt</h2>
          <p>E-Mail: eligi9@gmx.de</p>
      </div>
      </GridItem>
    </GridContainer>
  )
}

export default Imprint;
