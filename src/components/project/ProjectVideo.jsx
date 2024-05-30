import GridItem from '/components/grid/GridItem';
import PropTypes from 'prop-types';
import { useViewportSize } from '@mantine/hooks';

ProjectVideo.propTypes = {
  video: PropTypes.string
};

export default function ProjectVideo({video}) {
  const { height, width } = useViewportSize();

  return (
    <>
    <GridItem cols="2/9" justify={"center"}>
    <iframe width={16/9*1/2*height} height={1/2*height} src={video} 
    title="YouTube video player"
    allowFullScreen></iframe>
    </GridItem>
    </>
  )
}