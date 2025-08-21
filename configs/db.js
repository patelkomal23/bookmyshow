const { default: mongoose } = require("mongoose")

const db = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://p6579113:12345@cluster0.zlavh0m.mongodb.net/movies')
        console.log("Database Connected ...")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = db