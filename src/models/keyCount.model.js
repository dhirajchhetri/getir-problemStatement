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

const KeyCount = mongoose.model( 'keycount', keyCountSchema );
module.exports = KeyCount