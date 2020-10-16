module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger Items API function processed a request.');

  const items = [
    {
      id: 1,
      name: 'My item 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Book',
      price: 25,
    },
    {
      id: 3,
      name: 'Headset',
      price: 42,
    },
  ];

  return {
    status: 200,
    body: items,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
