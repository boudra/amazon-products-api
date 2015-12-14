const getSignature = require('./signature');
const http = require('http');
const common = require('./common');
const parseXML = require('xml2js').parseString;

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
            params.Operation = name;
            params.Signature = getSignature(params, this.SecretKey);

            const uri = common.getUri(params);

            // console.log(common.defaults.host + common.defaults.path + '?' + uri);

            const request = http.get({
                hostname: common.defaults.host,
                path: common.defaults.path + '?' + uri,
                agent: false,
            }, function(res) {
                res.setEncoding('utf8');
                var data = '';
                res.on('data', function(chunk) {
                    data += chunk;
                });
                res.on('end', function() {
                    parseXML(data, function(error, result) {
                        resolve(result);
                    });
                })
            });

            request.on('error', reject);

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
