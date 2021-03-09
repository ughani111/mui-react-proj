import React from 'react';
import ConfigContext from '../config';

export default function useConfig() {
    return React.useContext(ConfigContext);
}