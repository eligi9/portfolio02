import PropTypes from 'prop-types';
import styles from '/css/components/project/projectItems/ProjectSpoiler.module.scss';
import { useEffect, useRef } from 'react';

import GridItem from '/grid/GridItem';

import ImageGroup from '/components/image/ImageGroup';

import { Spoiler, Stack } from '@mantine/core';

ProjectSpoiler.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  images: PropTypes.array,
  onSelect: PropTypes.func
};

export default function ProjectSpoiler({title, type, children, images, onSelect}) {

  const spoilerButton = useRef(null);

  useEffect(() => {
   console.log(spoilerButton.current)

  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if(onSelect) onSelect({title});
  };


  return (
    <>
      <GridItem cols="2/9" justify="flex-start">
        <Stack m={"lg"}>
          <div className={styles.headerContainer}>
            <h1 className={styles.h1}> {title} </h1>
            <h2 className={styles.h2}> {type} </h2>
          </div>
          <ImageGroup images={images}/>
          <Spoiler onClick={handleClick} showLabel="ReadMore"  hideLabel="ReadMore" controlRef={spoilerButton} title={ "@"+ title } > 
            {children} 
          </Spoiler>
        </Stack>
      </GridItem>
    </>
  )
}