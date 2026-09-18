const { BigBallSportsClient } = require('@bigballsdata/sdk');

module.exports = async function handler(req, res) {
  const bbsKey = process.env.BBS_API_KEY || "bbs_live_00000ejI0F2A9c0IkKpcqEk9ciyGGxJ60tTed6hxFEQHrUNk";
  
  if (!bbsKey) {
    return res.status(500).json({ error: "BBS API key missing." });
  }

  try {
    const client = new BigBallSportsClient(bbsKey);
    const { data: cards } = await client.combat.cards('mma');
    
    // Map BBS fight-cards to our event format
    const events = cards.map(card => {
      const bouts = Array.isArray(card.bouts) ? card.bouts : [];
      const fight_card = bouts.map(b => {
        const home = b.fighters?.home?.name || "TBD";
        const away = b.fighters?.away?.name || "TBD";
        return `${home} vs ${away}`;
      }).join("\n");

      return {
        id: `bbs-${card.id || Math.random()}`,
        title: card.name || `UFC Event (${card.event_date})`,
        shortTitle: card.name || `UFC ${card.event_date}`,
        eventDate: card.kickoff_utc || card.event_date || null,
        venue: "TBA",
        city: "",
        isCompleted: card.status === "finished",
        isLive: card.status === "in_progress",
        viewerCount: 0,
        status: card.status === "finished" ? "Completed" : (card.status === "scheduled" ? "Upcoming" : card.status),
        theme: "",
        fight_card: fight_card,
        rawStatus: card.status || "",
        season: new Date(card.event_date).getFullYear()
      };
    });

    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({ fetchedAt: new Date().toISOString(), events });
  } catch (err) {
    res.status(502).json({ error: "Could not reach BBS API.", details: err.message });
  }
}
