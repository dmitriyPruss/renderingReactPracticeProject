import React, { Component } from 'react';
import DataColumn from './../DataColumn';
import registrationFormRender from './registrationFormRender';

function RegistrationFormFooter () {
  return (
    <DataColumn
      fileName='/registrationFooterData.json'
      render={registrationFormRender}
    />
  );
}

export default RegistrationFormFooter;
