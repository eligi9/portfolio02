import styles from "/css/components/grid/GridContainer.module.scss";
import PropTypes from 'prop-types';
import { useEffect, useRef, useState, useLayoutEffect, useCallback, forwardRef } from 'react';
import classNames from 'classnames';

const GridContainer = forwardRef(({cols, rows, color, children, base, style}, ref) => {
  const 
    containerStyles  = useRef({}),
    [containerType, setConatinerType] = useState(''),
    setStyle = (() => {
    containerStyles.current = {...style, background: color}}),
    
    initalizeGridContainer = useCallback(() => {
    if (rows === undefined) {
      console.log("rows is undefined")
      return "gc_" + cols;
    } else {
      return "g_" + cols + rows;
    }
  }, [cols, rows])


  useLayoutEffect(()=> {
    setConatinerType(initalizeGridContainer());
  },[initalizeGridContainer])


  useEffect(() => {
    console.log(style)
    setStyle();
  }, []);


  return (
        <>
          <div ref={ref} style={{...containerStyles.current}} className={classNames(styles.grid_container, styles[containerType], {[styles.base]:base})}>
              {children}
          </div>
        </>
  )
});

GridContainer.propTypes = {
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  base: PropTypes.bool,
  style: PropTypes.object
};

GridContainer.displayName = 'GridNew';

export default GridContainer;