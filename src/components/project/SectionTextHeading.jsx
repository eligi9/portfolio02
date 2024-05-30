import PropTypes from 'prop-types';
import '/css/components/project/SectionTextHeading.module.scss';

SectionTextHeading.propTypes = {
  title: PropTypes.string,
};

export default function SectionTextHeading( { title } ){

  return (
        <h4 style={{textAlign:"left"}} >{ title }</h4>
  )
}