import styles from "/css/components/grid/GridContainer.module.scss";
import PropTypes from 'prop-types';
import { useEffect, useRef, useState, useLayoutEffect, useCallback } from 'react';
import classNames from 'classnames';

GridContainer.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  base: PropTypes.bool,
};

export default function GridContainer({cols, rows, color, children, base}) {
  const container  = useRef();
  const [containerType, setConatinerType] = useState('');

  const initalizeGridContainer = useCallback(() => {
    if (rows === undefined) {
      //console.log("rows is undefined");
      return "gc_" + cols;
    } else {
      return "g_" + cols + rows;
    }
  }, [cols, rows]);

  useLayoutEffect(()=> {
    setConatinerType(initalizeGridContainer());
  },[initalizeGridContainer])

  useEffect(() => {
    //console.log(container.current.classList)
  }, []);


return (
      <>
        <div ref={container} style={{background: color}}
          className={classNames(styles.grid_container, styles[containerType], {[styles.base]:base})}>
            {children}
        </div>
      </>
);
}