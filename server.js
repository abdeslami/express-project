// npm run devStart
//npm i --save-dev nodemon
//npm i ejs
const express=require('express')
const app =express()
// app.get()
// app.post()
// app.put()
// app.delete()
app.set('view engine','ejs')
app.use(logger)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.get('/',logger,(requeste,responsee,nextfunction)=>{
    console.log('here')
    // responsee.sendStatus(500)
    // responsee.status(500).send('Hi')
    // responsee.status(500).json({message:"Error"})
    // responsee.json({message:"Error"})
    // responsee.download('server.js')
    responsee.render('index',{text:"world"})


    // responsee.send('hi')
})
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')

app.use('/users',userRoute)
app.use('/posts',postRoute)

function logger(req,res,next){
    console.log(req.originalUrl)
    next()

}
app.listen(3000)