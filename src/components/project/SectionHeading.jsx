import PropTypes from 'prop-types';
import '/css/components/project/SectionHeading.module.scss';

SectionHeading.propTypes = {
  title: PropTypes.string,
};

export default function SectionHeading({ title }) {

  return (
    <>
        <h3 style={{textAlign:"left"}} >{ title }</h3>
    </>
  )
}