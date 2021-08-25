// key count schema

const mongoose = require('mongoose');
const keyCountSchema = mongoose.Schema({
    totalCount : {
        type: Number
        ,required: true
    }
    ,key : {
        type: String
        ,required: true
    }
},{timestamps:{createdAt:true, updatedAt:false}}
);

const KeyCount = mongoose.model( 'KeyCount', keyCountSchema );
module.exports = KeyCount