const fs = require('fs');
const path = require('path');

module.exports = function (context, req) {
  context.log('JavaScript HTTP trigger UI function processed a request.');

  var res = {
    body: '',
    headers: {
      'Content-Type': 'text/html',
    },
  };

  // Read an HTML file in the directory and return the contents
  fs.readFile(path.resolve(__dirname, 'index.html'), 'UTF-8', (err, htmlContent) => {
    res.body = htmlContent;
    context.done(null, res);
  });
};
