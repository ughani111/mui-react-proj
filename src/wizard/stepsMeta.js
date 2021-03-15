import WelcomeStep from './steps/WelcomeStep';
import PersonalInformationStep from './steps/PersonalInformationStep';
import VisitsStep from './steps/Visits';
import HealthStep from './steps/Health';
import ClosingStep from './steps/Closing';
import SucessStep from './steps/Success';

const steps = [
  {
    label: 'Wilkommen',
    i18nLabel: 'common:headings.welcome',
    comp: WelcomeStep
  },
  {
    label: 'Persönliche Information',
    i18nLabel: 'common:headings.personalInformation',
    comp: PersonalInformationStep
  },
  {
    label: 'Aufenthalt',
    i18nLabel: 'common:headings.visits',
    comp: VisitsStep
  },
  {
    label: 'Gesundheit',
    i18nLabel: 'common:headings.health',
    comp: HealthStep
  },
  {
    label: 'Abschluss',
    i18nLabel: 'common:headings.closing',
    comp: ClosingStep
  },
  {
    label: 'Success',
    i18nLabel: 'common:headings.success',
    comp: SucessStep
  }
];

export default steps;