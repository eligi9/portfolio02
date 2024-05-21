import "/grid/grid.scss";
import PropTypes from 'prop-types';

GridItem.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  color: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};


export default function GridItem({cols, rows, color, justify, align, children, onClick}) {
  const gridItemStyle = {
    background: color,
    justifySelf: justify,
    alignSelf: align,
    gridColumn: cols,
    gridRow: rows,
    //position: "relative", // Ensures that the text is always on top of everything else
  };
  

  return (
    <div
      style={gridItemStyle}
      className={"grid_item"}
      onClick={onClick}
    >
        {children}
    </div>
  );
}
