const getSignature = require('./signature');
const http = require('http');

const defaults = {
    Service: 'AWSECommerceService',
    Version: '2013-08-01'
};

var AmazonProducts = Object.create({

    addCommonParams(params) {
        params.Service = this.Service;
        params.AssociateTag = this.Tag;
        params.AWSAccessKeyId = this.AccessKey;
        params.Version = this.Version;
        params.Timestamp = (new Date).toISOString().replace(/\.\d{3}/, '');
        return params;
    },

    operation(name, params) {

        return new Promise((resolve, reject) => {

            params = params || {};
            params = this.addCommonParams(params);
            params.Signature = getSignature(params, this.SecretKey);

            const uri = Object.keys(params).map(function(key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(params[key]);
            }).join('&');

            console.log(uri);

        });

    }

});

module.exports = function(options) {

    options = options || {};

    if(!options.AccessKey) throw 'The AccessKey is required';
    if(!options.SecretKey) throw 'The SecretKey is required';
    if(!options.Tag)       throw 'The Tag is required';

    options = Object.assign(defaults, options);

    return Object.assign(Object.create(AmazonProducts), options);
};
