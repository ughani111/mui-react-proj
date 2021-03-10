import AppHeader from './header/AppHeader';
import { useTranslation } from 'react-i18next';

export default function AppHeaderContainer() {
    const { i18n } = useTranslation();
    const lng = i18n.language;

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng).catch();
    }

    return (
        <AppHeader onLanguageChange={handleLanguageChange} selectedLanguage={lng} />
    )
}