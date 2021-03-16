import WizardTitleHeader from './WizardTitleHeader';
import StepContainer from './steps/StepContainer';
// import useConfig from '../hooks';
import steps from './stepsMeta';

const { apiBaseUrl } = require('../config/index');



function WizardContainer() {

    const handleOnDone = async (formData) => {       
        // const endPointUrl = "https://rwnlyvkak7.execute-api.eu-central-1.amazonaws.com/staging/";
        const endPointUrl = apiBaseUrl;
        return fetch(endPointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        
    }

    return (
        <div className="w-screen flex flex-col">
            <WizardTitleHeader />
            <StepContainer steps={steps} onDone={handleOnDone} />
        </div>
    );
}

export default WizardContainer;
