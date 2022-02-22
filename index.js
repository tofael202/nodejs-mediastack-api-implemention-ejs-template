const express=require('express')
const app=express()
const morgan=require('morgan')
const PORT=process.env.PORT || 3900;
const newsRoute=require('./routes/newsRoute')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('tiny'))
app.set('view engine','ejs')
app.use('/',newsRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server is runnging on ${PORT}`)
})

