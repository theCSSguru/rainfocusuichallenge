import { Card } from '@/components/Card/Card';

export const StepOne = () => {
  return (
    <div className="settings-step-one">
      <h4 className="clr-gray-text">
        <strong>Step 1:</strong> Base settings.
      </h4>
      <Card>
        <div className="settings-step-one-wrap">
          <div className="settings-step-one-col">
            <button className="settings-step-one-btn" title="Edit">
              <h5>General</h5>
              <p className="small">Define Attendee types & attributes</p>
            </button>
          </div>
          <div className="settings-step-one-col">
            <button className="settings-step-one-btn" title="Edit">
              <h5>Title</h5>
              <p className="small">
                Description that explains the value goes here. Description that
                explains the value goes here.
              </p>
            </button>
          </div>
          <div className="settings-step-one-col">
            <button className="settings-step-one-btn" title="Edit">
              <h5>Title</h5>
              <p className="small">
                Description that explains the value goes here. Description that
                explains the value goes here.
              </p>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
