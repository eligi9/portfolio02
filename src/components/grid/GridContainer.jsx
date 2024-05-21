import "/grid/grid.scss";
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

GridContainer.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default function GridContainer({cols, rows, color, children}) {
  //const [age, setAge] = useState(28);
  const container  = useRef();
  const containerType = "g_" + cols + rows;

  useEffect(() => {
    console.log(color);
    console.log(container.current.classList)
  }, []);


return (
      <div ref={container} style={{background: color}} className={`grid_container ${containerType}`}>
          {children}
      </div>
);
}