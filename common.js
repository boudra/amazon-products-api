module.exports = {

    defaults: {
        host: 'ecs.amazonaws.com',
        path: '/onca/xml',
    },

    getUri(params) {
        return Object.keys(params).map((key) => {
            return this.encode(key) + '=' +
                   this.encode(params[key]);
        }).sort().join('&');
    },

    // http://phpjs.org/functions/rawurlencode/
    encode(input) {
        return encodeURIComponent(input)
                .replace(/!/g, '%21')
                .replace(/'/g, '%27')
                .replace(/\(/g, '%28')
                .replace(/\)/g, '%29')
                .replace(/\*/g, '%2A');
    }

};
