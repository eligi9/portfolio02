//import styles from '/css/components/project/ProjectView.module.scss';
import GridContainer from "/grid/GridContainer";
import GridItem from '/grid/GridItem'
import GridImage from '/grid/GridImage';

import img1 from '/images/riss/riss_1.png';
import img2 from '/images/riss/riss_2.png';
import img3 from '/images/riss/riss_3.png';
import img4 from '/images/riss/riss_4.png';
import img5 from '/images/riss/riss_5.png';


export default function ImageGrid() {
  return (
    <GridItem cols="2/9"> 
     <GridContainer cols='18'>
         <GridImage cols="1/8" img={img1}/>
         <GridItem cols="8/12">
          <GridContainer cols='4'>
            <GridImage cols="1/5" img={img2}/>
            <GridImage cols="2/5" img={img4}/>
          </GridContainer>
         </GridItem>
         <GridItem cols="12/19">
          <GridContainer cols='4'>
            <GridImage cols="1/5" img={img3}/>
            <GridImage cols="1/4" img={img5}/>
          </GridContainer>
         </GridItem>
     </GridContainer>
    </GridItem>
  );
}
