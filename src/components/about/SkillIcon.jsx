//import styles from '/css/components/views/Home.module.scss';
import styles from '/css/components/about/Skills.module.scss';
import PropTypes from 'prop-types';
import config    from '@/json/config.json'
import { useEffect } from 'react';


SkillIcon.propTypes = {
  url: PropTypes.string,
  black: PropTypes.bool,
};


export default function SkillIcon({url, black}) {

  const
    basePath    = black ? config.iconsPathBlack : config.iconsPath,
    require     = (v_url)     => (import.meta.url == null ? v_url : new URL(v_url, import.meta.url).href),
    imgPath     = basePath.replace('$1', url.toLowerCase()),
    buttonImage = require(imgPath)

  useEffect(() => {
    console.log(buttonImage)
  }, []);

  return (
      <img src={buttonImage}></img>
  );
}