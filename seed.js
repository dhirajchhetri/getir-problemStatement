const KeyCount= require('./src/models/keyCount.model');
require('dotenv').config();
const Crypto = require('crypto')
const RandomEntries =10001;

function randomString(size = 12) {  
  return Crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size)
}

const {connectToMongo, disconnectMongo } = require('./src/connection');

(
    async ()=>{
        try {
            const  randomDate= (start, end, startHour, endHour)=> {
                var date = new Date(+start + Math.random() * (end - start));
                var hour = startHour + Math.random() * (endHour - startHour) | 0;
                date.setHours(hour);
                return date.toISOString()
                }
            
            const db = await connectToMongo();
            await KeyCount.collection.drop();
            // loop to insert random entries
            for (let i=1;i< RandomEntries;i++){
        
                await KeyCount.create({
                    "key":randomString(),
                    "totalCount":i ,
                    "createdAt":randomDate(new Date(2020, 0, 1), new Date(), 0,24)
        
                })
            }
              console.log(`${RandomEntries-1} records created`)
               await disconnectMongo(db)
            
        } catch (error) {
            throw new Error(error)
        }
   

}
)();