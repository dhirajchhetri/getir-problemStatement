
require('dotenv').config()

const express = require("express");
const app = express();
const {connectToMongo } = require('./connection');
const KeyCount = require('./models/keyCount.model');
const {messageCode, messageText} = require('./dictionary/constants');

         

app.use(express.json());
app.get('/', async (req, res)=>{
  res.status(200).send('getir test application running')
})
app.get('/ping', async (req, res)=>{
  res.status(200).send('pong')
})
app.post('/keyCounts', async (req, res) => {
  const {startDate, endDate, minCount, maxCount} = req.body;
  try {
    const result=  await KeyCount.find({
      createdAt : { $gt:new Date(startDate),
      $lt:new Date (endDate)},
      totalCount:{
        $gt:minCount , $lt:maxCount
      }
    
    }).lean().exec();
    const resultObj={
      code:messageCode.Success,
      msg:messageText.Success, 
      data: [...result]
    }
    res.status(200).json(resultObj);

} catch (error) {
    throw new Error(error)
}
})





//connect to mongodb
connectToMongo()
  .then(console.log(`connected to the mongodb database`))
  .catch(err=> console.log(err))
  

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

module.exports ={app};