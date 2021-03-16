// export const config = {
//     apiBaseUrl: process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_PROXY_URL : process.env.REACT_APP_API_BASE_URL
// };

module.exports = {
    apiBaseUrl: process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_PROXY_URL : process.env.REACT_APP_API_BASE_URL
}