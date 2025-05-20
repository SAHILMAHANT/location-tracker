export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, latitude, longitude, accuracy } = req.body;
    console.log('Received location:', { id, latitude, longitude, accuracy });
    return res.status(200).json({
      message: 'Location received!',
      data: { id, latitude, longitude, accuracy },
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
