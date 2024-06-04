import GridItem from '/grid/GridItem';
import PropTypes from 'prop-types';
import styles from '/css/components/project/projectItems/ProjectVideo.module.scss';
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
      <Skeleton className={styles.video} visible={loading}>
        <iframe 
          src={video} 
          title="YouTube video player"
          allowFullScreen
          className={styles.video}
          onLoad={() => setLoading(false)} 
        ></iframe>
      </Skeleton>
    </GridItem>
    </>
  )
}