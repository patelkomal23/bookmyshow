const { default: mongoose } = require("mongoose")

const db = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://patelkomal2332:12345@cluster0.wg4ajfg.mongodb.net/movies')
        console.log("Database Connected ...")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = db