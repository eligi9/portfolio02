//import styles from '/css/components/project/ProjectView.module.scss';
import GridItem from '/grid/GridItem'
import PropTypes from 'prop-types';
import { Group } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import {getImages} from '/service/getData.js'
import styles from '/css/components/image/ImageGroup.module.scss';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';


ImageGroup.propTypes = {
  images: PropTypes.array.isRequired
};


export default function ImageGroup({images}) {

  const [imageList, setImageList] = useState([{}]);
  const square = useRef(false)
  

  async function loadImages(p_urls){
    try {
      const imgList = await getImages(p_urls);
      imgList.forEach(element => {
        if(!element.isPortrait){
          square.current = true;
        } 
      });
  
      setImageList(imgList);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  useEffect(() => {
    loadImages(images);
  }, [images]);


  const renderImages = imageList.map(img => {
    console.log(img.isPortrait);
    return(
      <img loading="lazy" key={uuidv4()} src={img.src} className={
        classNames({
          [styles.portrait]: img.isPortrait && !square.current,
          [styles.landscape]: !img.isPortrait || square.current, 
        })} 
      /> 
    )
  });
  


  return (
    <GridItem cols="2/9"> 
        <Group width={"100%"} grow>
          {renderImages}
        </Group>
    </GridItem>
  );
}