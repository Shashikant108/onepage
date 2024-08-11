const ftype = require('../model/schema');

const created = async (req, res) => {
  try {
    const { description, timer, link, show } = req.body;
    await ftype.updateOne({}, { description, timer, link, show }, { upsert: true });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error updating banner' });
  }
};

module.exports=created;
