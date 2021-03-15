import React from 'react';

const publicUrl = process.env.PUBLIC_URL;

const config = {
    publicUrl,
    imagesUrl: `${publicUrl}/assets/images/wizard/`,
    apiUrl: "https://rwnlyvkak7.execute-api.eu-central-1.amazonaws.com/staging/"
}

const ConfigContext = React.createContext(config);

export default ConfigContext;