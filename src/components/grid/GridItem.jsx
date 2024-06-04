import styles from"/css/components/grid/GridItem.module.scss";
import PropTypes from 'prop-types';

import {Group} from "@mantine/core"

GridItem.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string,
  color: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};


export default function GridItem({cols, rows, children, onClick, justify, align, color}) {
  const gridItemStyle = {
    gridColumn: cols,
    gridRow: rows,
    background: color,
    //position: "relative", // Ensures that the text is always on top of everything else
  };
  

  return (
    <div
      style={gridItemStyle}
      className={styles.grid_item}
      onClick={onClick}
    >
      <Group w={"100%"} style={{gridItemStyle}} justify={justify? justify: "center"} align={align} className={styles.grid_item}>
        {children}
      </Group>
    </div>
  );
}
