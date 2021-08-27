const mongoose = require('mongoose');
require('dotenv').config()
/**
 * 
 * @returns the mongoose connection object
 * with the mongodb database
 */
exports.connectToMongo = async () => {
    try {
        const connection=  await mongoose.connect(process.env.MONGODB_URL,{dbName: process.env.DBNAME,useUnifiedTopology: true , useNewUrlParser: true });
      
         console.log('Mongodb database connected')
         return connection
         
    } catch (error) {
        console.log(`Error Connecting to database`, error)
    }
  };
  /**
   * @description This method is to disconnect the mongoose connection with the mongodb database
   * @param {*} mongoConnection 
   * 
   */
exports.disconnectMongo= async (mongoConnection)=>{
    try {
            if(mongoConnection){
                await mongoConnection.disconnect();
               

            }else{
                await mongoose.connection.close();

            }
            console.log('Mongodb database disconnected');
            return
        
    } catch (error) {
        console.log(`Error disconnection of database`, error)
    }
}