module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger Items API function processed a request.');
  let status = 200;
  const items = [
    {
      id: 1,
      name: 'My item 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Book',
      price: 23,
    },
    {
      id: 3,
      name: 'Headset',
      price: 45,
    },
  ];

  if (req.method === 'POST') {
    status = 201;
    const newItem = {
      id: Math.floor(Math.random() * 100000) + 1,
      name: req.body.name,
      price: req.body.price,
    };

    items.push(newItem);
  }

  return {
    status,
    body: items,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
