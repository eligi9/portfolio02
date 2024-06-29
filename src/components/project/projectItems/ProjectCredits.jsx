import styles from "/css/components/project/projectItems/ProjectCredits.module.scss";

import GridItem from '/grid/GridItem';
import GridContainer from '/grid/GridContainer';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

ProjectCredits.propTypes = {
  credits: PropTypes.object.isRequired,
};

export default function ProjectCredits({credits}) {


  const renderCredtis = () => {
    return Object.entries(credits).map(([key, value]) => {
      return (
        <>
          <GridItem cols="1/2" justify={"flex-start"}>
            <span className={styles.credit_key} key={ uuidv4() }>{ key } </span>
          </GridItem>
          <GridItem cols="2/4" justify={"flex-start"}>
            <span className={styles.credit_name} key={ uuidv4() }>{ value }</span>
          </GridItem>
        </>
        )
      }
    )}

  return (
      <GridItem cols="2/9" justify={"flex-start"}> 
        <h3 className={styles.container}>Credits:</h3>
        <GridContainer cols="3" base={false}>
            {renderCredtis()}
        </GridContainer>
      </GridItem>
  )
}