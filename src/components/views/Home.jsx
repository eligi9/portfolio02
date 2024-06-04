import styles from '/css/components/views/Home.module.scss';
import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';
import { Stack } from '@mantine/core';




export default function Home() {

  return (
    <>
      <GridContainer cols='9' base={true}>
        <GridItem cols='2/7'>
          <Stack w="100%" h="1000px" align="flex-start" justify="center" gap={"0px"}>
            <span className={styles.small}>hi i&#39;m Elias Ginter</span>
            <span className={styles.letters}>CREATOR OF </span>
            <span className={styles.letters}>INTERACTIVE </span>
            <span className={styles.letters}>EXPERIENCE </span>
          </Stack>
        </GridItem>
      </GridContainer>
    </>
  );
}
