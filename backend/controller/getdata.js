const ftype=require('../model/schema');

const geted=async(req,res)=>{
    try {
        const banner = await ftype.findOne({});
        res.json(banner);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching banner data' });
      }
}

module.exports=geted;