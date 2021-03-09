import React from 'react';

const publicUrl = process.env.PUBLIC_URL;

const config = {
    publicUrl,
    imagesUrl: `${publicUrl}/assets/images/wizard/`
}

const ConfigContext = React.createContext(config);

export default ConfigContext;