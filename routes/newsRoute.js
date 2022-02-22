const express=require('express')
const router=express.Router();
const axios=require('axios')

const params = {
    //symbols: 'AAPL', // example source
    sources : 'cnn',
    access_key: 'fb755857e924ead2a6cdbd7a8700e478'
  }

router.get('/', async (req,res)=>{
    const newsAPI= await axios.get('http://api.mediastack.com/v1/news', {params});
    const data=newsAPI.data
    console.log(data)
    res.render('news',{data})
    

})

module.exports=router