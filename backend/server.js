const express= require('express')
const app = express()
const PORT = process.env.PORT || 3500

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(PORT,()=>{
    console.log('listening on port',PORT)
})