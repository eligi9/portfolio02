import PropTypes from 'prop-types';
import styles from '/css/components/project/projectItems/ProjectSpoiler.module.scss';
import { useEffect, useRef, useState } from 'react';

import GridItem from '/grid/GridItem';

import ImageGroup from '/components/image/ImageGroup';

import { Spoiler, Stack } from '@mantine/core';

ProjectSpoiler.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  onSelect: PropTypes.func
};

export default function ProjectSpoiler({title, type, children, onSelect}) {

  const spoilerButton = useRef(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
   console.log(spoilerButton.current)
   requireImages(title)
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if(onSelect) onSelect({title});
  };

  async function requireImages (p_projectName){
    let imageList= [];
    let imagepath = p_projectName.toLowerCase().replace(" ","");
  
    for (let i = 1; i < 4; i++){
      let a = await import(`../../../assets/images/${imagepath}/front${i}.png`)
      console.log(typeof(a.default))
      imageList.push(a.default)
    }

    if(Array.isArray(images)){
     setImages(imageList)
  }
}



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