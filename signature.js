const crypto = require('crypto');
const common = require('./common');

module.exports = function(params, secret) {
    const hmac = crypto.createHmac('sha256', secret);
    const stringToSign = [
        'GET', common.defaults.host, common.defaults.path,
        common.getUri(params)
    ].join('\n');
    return hmac.update(stringToSign).digest('base64');
};
