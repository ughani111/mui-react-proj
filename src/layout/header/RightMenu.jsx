import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import { themeColors } from '../../theme';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    menuItem: {
        color: themeColors.gray.dark1,
        marginRight: theme.spacing(2),
        textTransform: 'none'
    },
    selected: {
        color: theme.palette.primary.main
    }
}));

export default function RightMenu({selectedLanguage, onLanguageChange}) {
    const {t, i18n} = useTranslation(['common']);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const lang = selectedLanguage === undefined ? 'en-US' : selectedLanguage;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (language) => {
        onLanguageChange(language);
        handleClose();
    }

    return (
        <>
            <Button className={classes.menuItem} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {t('common:labels.language')}
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleLanguageChange('en-US')}><span className={lang === 'en-US' ? classes.selected : undefined}>English</span></MenuItem>
                <MenuItem onClick={() => handleLanguageChange('de-DE')}><span className={lang === 'de-DE' ? classes.selected : undefined}>Deutsch</span></MenuItem>
            </Menu>
        </>
    )
}