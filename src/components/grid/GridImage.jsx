import styles from"/css/components/grid/GridImage.module.scss";
import PropTypes from 'prop-types';
import classNames from 'classnames';

GridImage.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string.isRequired,
  isKey: PropTypes.bool
};


export default function GridImage({cols, rows, img, isKey, onClick}) {
  const gridItemStyle = {
    gridColumn: cols,
    gridRow: rows,
    //background: color,
    //justifySelf: justify,
    //alignSelf: align, 
    //position: "relative", // Ensures that the text is always on top of everything else
  };

  const imageClass = classNames(styles.grid_item, 
    //{[styles.keyimg]: isKey,}
  );
  

  return (
    <img
      style={gridItemStyle}
      className={imageClass}
      onClick={onClick}
      src={img}
    />
  )
}
