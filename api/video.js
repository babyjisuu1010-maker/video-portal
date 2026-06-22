export default async function handler(req, res) {
  try {

    const apiKey = process.env.DOOD_API_KEY;

    const page = req.query.page || 1;

    const response = await fetch(
      `https://doodapi.co/api/file/list?key=${apiKey}&page=${page}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
}
