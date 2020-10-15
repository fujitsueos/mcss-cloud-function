const fs = require('fs');
const path = require('path');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger UI function processed a request.');

  const htmlFilePath = path.resolve(__dirname, 'index.html');
  const htmlBody = fs.readFileSync(htmlFilePath, { encoding: 'utf8', flag: 'r' });

  context.res = {
    status: 200,
    body: htmlBody,
    headers: {
      'Content-Type': 'text/html',
    },
  };
};
