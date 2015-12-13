const getSignature = require('../signature');
const assert = require('assert');

describe('signature', function() {

    it('should return correct signature', function() {

        // data taken straight from
        // http://docs.aws.amazon.com/AWSECommerceService/latest/DG/rest-signature.html
        const params = {
            Service: 'AWSECommerceService',
            AWSAccessKeyId: 'AKIAIOSFODNN7EXAMPLE',
            AssociateTag: 'mytag-20',
            Operation: 'ItemLookup',
            ItemId: '0679722769',
            ResponseGroup: 'Images,ItemAttributes,Offers,Reviews',
            Version: '2013-08-01',
            Timestamp: '2014-08-18T12:00:00Z'
        };

        assert.equal(
            getSignature(params, '1234567890'),
            'j7bZM0LXZ9eXeZruTqWm2DIvDYVUU3wxPPpp%2BiXxzQc%3D'
        );

    });

});
