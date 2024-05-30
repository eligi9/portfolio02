//import styles from '/css/components/project/ProjectView.module.scss';
import GridContainer from "/grid/GridContainer";
import GridItem from '/grid/GridItem'
import GridImage from '/grid/GridImage';
import PropTypes from 'prop-types';

ImageGrid3.propTypes = {
  img: PropTypes.array
};


export default function ImageGrid3({img}) {
  return (
    <GridItem cols="2/9"> 
     <GridContainer cols='18' rows='2'>
         <GridImage cols="1/12" rows='1/3' isKey img={img[0]}/>
         <GridImage cols="12/19" rows='1/2'img={img[1]}/>
         <GridImage cols="12/19" rows='2/3'img={img[2]}/>
     </GridContainer>
    </GridItem>
  );
}