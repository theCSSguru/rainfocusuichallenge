import { Card } from '@/components/Card/Card';
import { RegistrationIcon } from '@/components/Icons/RegistrationIcon';

export const StepThree = () => {
  return (
    <div className="settings-step-three">
      <h4 className="clr-gray-text">
        <strong>Step 3:</strong> Design attendee experiences.
      </h4>
      <div className="settings-step-three-wrap">
        <div className="settings-step-three-col">
          <button className="settings-step-three-button">
            <Card>
              <div className="settings-steps-card-heading">
                <div className="settings-steps-card-heading-icon clr-marketing-primary-grape">
                  <RegistrationIcon />
                </div>
                <h5 className="settings-steps-card-heading-title">
                  Attendee Portal
                </h5>
              </div>
              <p className="small">
                Manage the portal that attendees will see after they’ve register
                for your event.
              </p>
            </Card>
          </button>
        </div>
      </div>
    </div>
  );
};
