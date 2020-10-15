module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger API function processed a request.');

  const name = req.query.name || (req.body && req.body.name);
  const defaultMsg =
    'MCSS Azure cloud function executed successfully. Pass a name in the query string (?name<your name>) or in the request body. V4';
  const message = name
    ? `Hello, ${name}. MCSS Azure cloud function executed successfully.`
    : defaultMsg;

  context.res = {
    status: 200,
    body: { message },
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
