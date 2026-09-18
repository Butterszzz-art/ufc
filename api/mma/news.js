module.exports = async function handler(req, res) {
  const sportsDataKey = process.env.SPORTSDATA_MMA_API_KEY || "b1a82a4a12644d1782adc25d4e423fe8";
  
  try {
    const response = await fetch("https://api.sportsdata.io/v3/mma/scores/json/News", {
      headers: { "Ocp-Apim-Subscription-Key": sportsDataKey }
    });
    const data = await response.json();
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({ fetchedAt: new Date().toISOString(), news: Array.isArray(data) ? data : [] });
  } catch (err) {
    res.status(502).json({ error: "Could not reach SportsData API.", details: err.message });
  }
}
