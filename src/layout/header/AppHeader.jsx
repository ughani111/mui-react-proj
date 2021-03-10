import React from 'react';
import { makeStyles } from '@material-ui/core';
import RightMenu from './RightMenu';
import MainMenu from './MainMenu';

const useStyles = makeStyles((theme) => ({
    logo: {
        backgroundColor: theme.palette.primary.light,
    }
}));

export default function AppHeader({onLanguageChange, selectedLanguage}) {
    const classes = useStyles();

    return (
        <div className="flex-shrink-0 bg-white w-full h-14 flex items-center shadow">
            <div className={ classes.logo + ' font-bold text-white flex-shrink-0 bg w-10 h-10 mx-2 flex justify-center items-center rounded-md uppercase'}>BW</div>

            {/*Center main menu*/}
            <div className="flex-grow tw-flex">
                <MainMenu />
            </div>

            {/*Right Menu*/}
            <div className="flex-shrink-0 tw-flex">
                <RightMenu onLanguageChange={onLanguageChange} selectedLanguage={selectedLanguage} />
            </div>
        </div>
    )
}