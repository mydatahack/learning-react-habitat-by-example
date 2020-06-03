import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const InformationComponent = ({ formData }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.updateHabitat();
    console.log('component updated for InformationComponent with formData: ', formData);
  });

  return (
    <>
      <p>Information</p>
      <p>{formData.firstName}</p>
      <p>{formData.lastName}</p>
      <p>{formData.email}</p>
      <p>{formData.mobile}</p>
      <p>{formData.favouriteFramework}</p>
    </>
  );
};

InformationComponent.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    favouriteFramework: PropTypes.string,
  }),
};

InformationComponent.defaultProps = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    favouriteFramework: '',
  },
};

export default InformationComponent;
