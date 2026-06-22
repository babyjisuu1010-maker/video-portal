exports.handler = async () => {

  const apiKey = process.env.DOOD_API_KEY;

  return {
    statusCode: 200,
    body: JSON.stringify({
      key_exists: !!apiKey
    })
  };

};