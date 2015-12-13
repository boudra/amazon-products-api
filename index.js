const getSignature = require('./signature');

var AmazonProducts = Object.create({

    addCommonParams(params) {
        params.Service = 'AWSECommerceService';
        params.AssociateTag = this.Tag;
        params.AWSAccessKeyId = this.AccessKey;
        return params;
    },

    operation(name, params) {
        params = params || {};
        params = this.addCommonParams(params);
        params.Signature = getSignature(params, this.SecretKey);
    }

});

module.exports = function(options) {

    options = options || {};

    if(!options.AccessKey) throw 'The AccessKey is required';
    if(!options.SecretKey) throw 'The SecretKey is required';
    if(!options.Tag)       throw 'The Tag is required';

    return Object.assign(Object.create(AmazonProducts), options);
};
