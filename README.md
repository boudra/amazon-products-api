[![Build Status](https://travis-ci.org/boudra/amazon-products-api.svg?branch=master)](https://travis-ci.org/boudra/amazon-products-api)

# Installation

Install it in your project using NPM:

```bash
npm install --save amazon-products-api
```

# Example

```js
const amazonProducts = require('amazon-products-api')({
    AccessKey: '1337',
    SecretKey: '42',
    Tag: 'whatevs-20'
});

amazonProducts.operation('ItemLookup', {
    ItemId: '0679722769',
    ResponseGroup: 'Images,ItemAttributes,Offers,Reviews'
}).then(function(response) {
    console.log(response);
}).catch(function(response) {
    // whoops
});
```

# License

Copyright (c) 2015 Mohamed Boudra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
