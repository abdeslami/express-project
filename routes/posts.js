

const express=require('express')
const router =express.Router()

router.get('/',(requestes,responses)=>{
    responses.send('post List')
})
router.get('/new',(requestes,responses)=>{
    responses.send('posts New Form')
})
module.exports=router