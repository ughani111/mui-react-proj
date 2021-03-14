import WizardTitleHeader from './WizardTitleHeader';
import StepContainer from './steps/StepContainer';

import steps from './stepsMeta';



function WizardContainer() {

    const handleOnDone = formData => {
        console.log(formData)
    }

    return (
        <div className="w-screen flex flex-col">
            <WizardTitleHeader />
            <StepContainer steps={steps} onDone={handleOnDone} />
        </div>
    );
}

export default WizardContainer;
