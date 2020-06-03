/* eslint-disable react/no-this-in-sfc */
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import Button from './components/Button';
import { fwOptions } from './constants';


const FormComponent = (props) => {
  const { formTitle, formData } = props;
  const [firstName, setFirstname] = useState(formData.firstName);
  const [lastName, setLastname] = useState(formData.lastName);
  const [email, setEmail] = useState(formData.email);
  const [mobile, setMobile] = useState(formData.mobile);
  const [favouriteFramework, setFavouriteFramework] = useState(formData.favouriteFramework);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.updateHabitat();
    console.log('component mounted or updated for FormComponent');
    console.log('check global form data: ', formData);
  });

  return (
    <form>
      <p className="form-title">{formTitle}</p>
      <TextInput
        inputFor="firstName"
        inputLabel="First Name"
        onChangeHandler={(e) => {
          setFirstname(e.target.value);
          // eslint-disable-next-line no-param-reassign
          props.proxy.firstName = e.target.value;
        }}
        value={firstName}
      />
      <TextInput
        inputFor="lastName"
        inputLabel="Last Name"
        onChangeHandler={(e) => setLastname(e.target.value)}
        value={lastName}
      />
      <TextInput
        inputFor="email"
        inputLabel="Email"
        onChangeHandler={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextInput
        inputFor="mobile"
        inputLabel="Mobile"
        onChangeHandler={(e) => setMobile(e.target.value)}
        value={mobile}
      />
      <SelectInput
        inputFor="fw"
        inputLabel="Favourite Framework"
        onChangeHandler={(e) => setFavouriteFramework(e.target.value)}
        optionArray={fwOptions}
        value={favouriteFramework}
      />
      <Button
        btnClass="btn btn-danger"
        btnLabel="Submit"
        onClickHandler={(e) => {
          console.log('clicked');
          e.preventDefault();
          // eslint-disable-next-line no-param-reassign
          props.proxy.formTitle = 'clicked';
          // eslint-disable-next-line no-param-reassign
          props.proxy.formData = {
            firstName,
            lastName,
            email,
            mobile,
            favouriteFramework,
          };
          global.window.formData = {
            firstName,
            lastName,
            email,
            mobile,
            favouriteFramework,
          };
          // eslint-disable-next-line no-undef
          window.updateHabitat();
          console.log(props.proxy.formData);
          console.log(global.window.formData);
        }}
      />
    </form>
  );
};

FormComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  proxy: PropTypes.object,
  formTitle: PropTypes.string,
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    favouriteFramework: PropTypes.string,
  }),
};

FormComponent.defaultProps = {
  proxy: {},
  formTitle: '',
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    favouriteFramework: '',
  },
};

export default FormComponent;
