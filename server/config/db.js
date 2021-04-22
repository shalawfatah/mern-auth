import mongoose from 'mongoose'

export const dbconnection =  () => {
     mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(()=> {
        console.log('DB is running')
    }).catch((error)=> {
        console.log(error)
    })
}