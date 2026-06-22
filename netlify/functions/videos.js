exports.handler = async () => {

  try {

    const apiKey = process.env.DOOD_API_KEY;

    const response = await fetch(
      `https://doodapi.com/api/account/info?key=${apiKey}`
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch(error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };

  }

};
