module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const name = req.query.name || (req.body && req.body.name);
  const defaultMsg =
    'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.';
  const message = name
    ? `Hello, ${name}. This HTTP triggered function executed successfully.`
    : defaultMsg;

  context.res = {
    status: 200,
    body: { message },
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
