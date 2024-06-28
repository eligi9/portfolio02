import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';

import styles from "/css/components/footer/Footer.module.scss";

import { useDispatch } from 'react-redux';
import { updateSection } from '/state/currentSectionSlice';
import FooterButton from './FooterButton';

Footer.propTypes = {


};




export default function Footer() {

  const dispatch = useDispatch();

  const changeSection = (p_destination) => {
    dispatch(updateSection(p_destination));
  };

  return (
    <footer>
      <GridContainer cols="9" color={"black"} base={true}>
        <GridItem cols={"1/10"}>
          <div className={styles.flex_row_container}>
            <FooterButton label="Impressum" onClick={() => changeSection("imprint")}/>
            <span style={{ color: "white"}}>|</span>
            <FooterButton label="Datenschutzerklärung" onClick={() => changeSection("privatpolicy")}/> 
          </div>
        </GridItem>
      </GridContainer>
    </footer>
  )}
