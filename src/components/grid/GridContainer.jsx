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
  style: PropTypes.object
};

export default function GridContainer({cols, rows, color, children, base, style}) {
  const container  = useRef();
  const containerStyles  = useRef({});

  const [containerType, setConatinerType] = useState('');

  const setStyle = (() => {
    containerStyles.current = {...style, background: color};
  
  })

  const initalizeGridContainer = useCallback(() => {
    if (rows === undefined) {
      console.log("rows is undefined");
      return "gc_" + cols;
    } else {
      return "g_" + cols + rows;
    }
  }, [cols, rows]);


  useLayoutEffect(()=> {
    setConatinerType(initalizeGridContainer());
  },[initalizeGridContainer])

  useEffect(() => {
    console.log(container.current.classList)
  }, [containerType])

  useEffect(() => {
    setStyle();
    //console.log(container.current.classList)
  }, []);


return (
      <>
        <div ref={container} style={{...containerStyles.current}} className={classNames(styles.grid_container, styles[containerType], {[styles.base]:base})}>
            {children}
        </div>
      </>
);
}