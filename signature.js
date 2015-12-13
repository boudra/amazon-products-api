const crypto = require('crypto');

module.exports = function(params, secret) {
    const hmac = crypto.createHmac('sha256', secret);
    // params.Timestamp = (new Date).toISOString().replace(/\.\d{3}/, '');
    const stringToSign = [
        'GET', 'webservices.amazon.com', '/onca/xml',
        Object.keys(params).map(function(key) {
            return key + '=' + encodeURIComponent(params[key]);
        }).sort().join('&')
    ].join('\n');

    return encodeURIComponent(hmac.update(stringToSign).digest('base64'));
};
