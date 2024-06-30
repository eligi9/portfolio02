//import styles from '/css/components/views/Home.module.scss';
import styles from '/css/components/about/skills/SkillIcon.module.scss';
import PropTypes from 'prop-types';
import config    from '@/json/config.json'
import { useEffect } from 'react';
import { useHover, useMouse} from '@mantine/hooks';

import SkillCard from '/about/skills/SkillCard';



SkillIcon.propTypes = {
  src: PropTypes.string.isRequired,
  black: PropTypes.bool,
  type: PropTypes.string,
  still: PropTypes.bool,
  url: PropTypes.string,

};


export default function SkillIcon({url, black, still, src}) {

  const
    basePath    = black ? config.iconsPathBlack : config.iconsPath,
    require     = (v_url)     => (import.meta.url == null ? v_url : new URL(v_url, import.meta.url).href),
    imgPath     = basePath.replace('$1', src.toLowerCase()),
    buttonImage = require(imgPath),
   { hovered, ref } = useHover(),
   { x, y } = useMouse();
    

  useEffect(() => {
    console.log(buttonImage)
  }, []);

  return (
    <>
    { still != null && 
      <img className={styles.icon_image} src={buttonImage}></img>
    }

    { !still &&
       <a ref={ref} href={url}>
         <img className={styles.icon_image} src={buttonImage}></img>
         {(hovered && !url) && <SkillCard skill={src} pos={{x,y}}></SkillCard>}
      </a>
    }
    </>
  );
}