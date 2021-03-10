import WizardTitleHeader from './WizardTitleHeader';
import StepContainer from './steps/StepContainer';

import steps from './stepsMeta';

function WizardContainer() {
    return (
        <div className="w-screen flex flex-col">
            <WizardTitleHeader />
            <StepContainer steps={steps} />
        </div>
    );
}

export default WizardContainer;
