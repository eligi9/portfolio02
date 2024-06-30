import { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';

GridNew.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  base: PropTypes.bool,
  style: PropTypes.object
};

const GridNew = forwardRef(({cols, rows, color, children, base, style}, ref) => {

  console.log(style, base, children, color, rows, cols)
  return(<input ref={ref} />);
});

GridNew.displayName = 'GridNew';

export default GridNew;