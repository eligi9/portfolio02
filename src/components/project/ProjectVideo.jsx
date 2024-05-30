import GridItem from '/components/grid/GridItem';
import PropTypes from 'prop-types';
import styles from '/css/components/project/ProjectVideo.module.scss';
import {Skeleton} from '@mantine/core';
import { useState } from 'react';


ProjectVideo.propTypes = {
  video: PropTypes.string
};

export default function ProjectVideo({video}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
    <GridItem cols="2/9" justify={"center"}>
      {loading && <Skeleton className={styles.video} radius="xl" />}
      <iframe 
        src={video} 
        title="YouTube video player"
        allowFullScreen
        className={styles.video}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block'}}
        
      ></iframe>
    </GridItem>
    </>
  )
}