import React from 'react';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { Divider } from '../Divider/Divider';
import { StepOne } from './Steps/StepOne';
import { StepTwo } from './Steps/StepTwo';
import { StepThree } from './Steps/StepThree';
import { StepFour } from './Steps/StepFour';

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-setup">
        <h2>Event setup guide</h2>
        <p>
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </div>
      <Divider marginTop={35} marginBottom={24} />
      <div className="settings-heading">
        <div className="settings-heading-icon">
          <SettingsIcon />
        </div>
        <h3 className="settings-heading-title">Org Settings</h3>
      </div>
      <div className="settings-steps">
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </div>
    </div>
  );
};
