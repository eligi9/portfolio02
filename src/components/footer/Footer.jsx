import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';

import { useDispatch } from 'react-redux';
import { updateSection } from '/state/currentSectionSlice';

Footer.propTypes = {
};




export default function Footer() {

  const dispatch = useDispatch();

  const changeSection = (p_destination) => {
    dispatch(updateSection(p_destination));
  };

  return (
    <>
      <GridContainer cols="9" color={"black"} base={true}>
        <GridItem cols={"1/10"}>
          <div style={{ width: "100%", height:"10vh", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <button style={{border: "none", padding: "10px", color: "black", background: "white" }} onClick={() => changeSection("imprint")}>Impressum</button>
            <button style={{border: "none", padding: "10px", color: "black", background: "white"}} onClick={() => changeSection("privatpolicy")}>Datenschutzerklärung</button>
          </div>
        </GridItem>
      </GridContainer>
    </>
  )}