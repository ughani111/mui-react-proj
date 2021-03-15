const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/staging',
        createProxyMiddleware({
            target: process.env.REACT_APP_API_BASE_URL,
            changeOrigin: true,
        })
    );
};