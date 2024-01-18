const mongoose = require('mongoose')

const connection = async()=> {

    try{
        const isConnected  = await mongoose.connect('mongodb+srv://sandeshdahal022:qfkemLO6WDmJDSFL@cluster0.i9vsjal.mongodb.net/');
        if(isConnected){
            console.log("Connected to mongodb")
        }
    } catch(err) {
        console.log(err)
        
    }

}

module.exports = connection