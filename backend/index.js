import express from 'express'
import { router } from './routes/route.js'


let port = process.env.PORT || 5001
const app = express()


app.use('/sanrio',router)


app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})
