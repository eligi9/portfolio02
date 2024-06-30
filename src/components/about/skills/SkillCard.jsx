//import styles from '/css/components/views/Home.module.scss';
import styles from '/css/components/about/skills/SkillCard.module.scss';
import PropTypes from 'prop-types';

import config from '@/json/config.json';
import { useEffect } from 'react';

import GridContainer from '/grid/GridContainer';
import GridItem from '/grid/GridItem';

import SkillScale from '/about/skills/SkillScale';
import SkillIcon from '/about/skills/SkillIcon';

import skills from '@/json/skills.json';

import { useMouse } from '@mantine/hooks';

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  pos: PropTypes.object,
};

export default function SkillCard({skill, pos}) {
  useEffect(() => {
    console.log(skills)
    console.log(skills["aftereffects"])
  }, []);
  return (
    <GridContainer style={{position: "absolute", left:pos.x, width: "40vw", padding: "20px", minHeight: "10vh", borderRadius: "20px"}}  color="white" cols='4'>
        <GridItem cols='1/2'>
          <SkillIcon src={skill} black still></SkillIcon>
        </GridItem>
        <GridItem cols='2/5'>
          <h3> {skill} </h3>
          <p>{skills[skill].beschreibung}</p>
       </GridItem>
       <GridItem cols='1/5'>
        <SkillScale value={skills[skill].niveau}></SkillScale>
       </GridItem>
    </GridContainer>
  );
}