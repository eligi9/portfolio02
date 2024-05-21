import "/css/components/grid/GridContainer.scss";
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

GridContainer.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default function GridContainer({cols, rows, color, children}) {
  //const [age, setAge] = useState(28);
  const container  = useRef();
  const containerType = useRef("g_" + cols + rows);

  const initalizeGridContainer = () => {
    if (rows === undefined) {
      console.log("rows is undefined");
      containerType.current = "gc_" + cols;
    } else {
      containerType.current = "g_" + cols + rows;
    }
  }

  useEffect(() => {
    initalizeGridContainer();
    console.log(container.current.classList)
  }, []);


return (
      <div ref={container} style={{background: color}} className={`grid_container ${containerType.current}`}>
          {children}
      </div>
);
}