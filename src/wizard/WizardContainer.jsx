import WizardTitleHeader from './WizardTitleHeader';
import StepContainer from './steps/StepContainer';

function WizardContainer() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <WizardTitleHeader />
            <StepContainer  />
        </div>
    );
}

export default WizardContainer;
