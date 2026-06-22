export default async function handler(req, res) {
  try {
    const apiKey = process.env.DOOD_API_KEY;

    const response = await fetch(
      `https://doodapi.co/api/file/list?key=${apiKey}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
