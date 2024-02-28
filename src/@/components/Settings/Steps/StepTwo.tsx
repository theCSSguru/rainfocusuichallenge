import { Card } from '@/components/Card/Card';
import { PlusCircleIcon } from '@/components/Icons/PlusCircleIcon';
import { RegistrationIcon } from '@/components/Icons/RegistrationIcon';

export const StepTwo = () => {
  return (
    <div className="settings-step-two">
      <h4 className="clr-gray-text">
        <strong>Step 2:</strong> Build registration workflows.
      </h4>
      <div className="settings-step-two-wrap">
        <div className="settings-step-two-col">
          <button className="settings-step-two-button">
            <Card>
              <div className="settings-steps-card-heading">
                <div className="settings-steps-card-heading-icon clr-marketing-primary-grape">
                  <RegistrationIcon />
                </div>
                <h5 className="settings-steps-card-heading-title">
                  Attendee Registration
                </h5>
              </div>
              <p className="small">
                Start by creating a general registration workflow
              </p>
            </Card>
          </button>
        </div>
        <div className="settings-step-two-col">
          <button className="settings-step-two-button">
            <Card>
              <div className="settings-steps-card-heading">
                <div className="settings-steps-card-heading-icon clr-marketing-primary-grape">
                  <RegistrationIcon />
                </div>
                <h5 className="settings-steps-card-heading-title">
                  Attendee Registration
                </h5>
              </div>
              <p className="small">
                Start by creating a general registration workflow
              </p>
            </Card>
          </button>
        </div>
        <div className="settings-step-two-col">
          <button className="settings-step-two-button">
            <Card>
              <div className="settings-steps-card-heading">
                <div className="settings-steps-card-heading-icon clr-marketing-primary-grape">
                  <RegistrationIcon />
                </div>
                <h5 className="settings-steps-card-heading-title">
                  Attendee Registration
                </h5>
              </div>
              <p className="small">
                Start by creating a general registration workflow
              </p>
            </Card>
          </button>
        </div>
        <div className="settings-step-two-col">
          <button className="settings-step-two-button">
            <Card centered>
              <div className="settings-steps-card-heading">
                <div className="settings-steps-card-heading-icon clr-marketing-primary-grape">
                  <PlusCircleIcon />
                </div>
              </div>
              <p className="small">Add Registration Workflow</p>
            </Card>
          </button>
        </div>
      </div>
    </div>
  );
};
