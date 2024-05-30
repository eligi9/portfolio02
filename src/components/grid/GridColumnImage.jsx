//import styles from"/css/components/grid/GridItem.module.scss";
import PropTypes from 'prop-types';
import GridItem from "/components/grid/GridItem";

GridColumnImage.propTypes = {
  cols: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  //justify: PropTypes.string,
  //align: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};


export default function GridColumnImage({cols, img}) {
  
  return (
   <GridItem cols={cols}>
    <img src={img}/>
   </GridItem>
  );
}
