import styles from"/css/components/grid/GridItem.module.scss";
import PropTypes from 'prop-types';

import { useEffect, useState } from "react";

import classNames from "classnames";


GridItem.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string,
  color: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  base: PropTypes.bool,
  style: PropTypes.object
};


export default function GridItem({cols, rows, children, onClick, justify, align, color, base, style}) {
  const
  [itemStyles, setItemStyles]  = useState({}),
  gridItemStyle = {
    gridColumn: cols,
    gridRow: rows,
    background: color,
    alignSelf: align,
    justifySelf: justify,
    //position: "relative", // Ensures that the text is always on top of everything else
  }


  useEffect(() => {
    setItemStyles({...gridItemStyle, ...style, background: color});
  }, []);
  

  return (
    <div
      style={{...itemStyles}}
      className={classNames(styles.grid_item, {[styles.baseItem]:cols === "2/9" || base})}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
