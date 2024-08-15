

const express=require('express')
const router =express.Router()

router.get('/',(requestes,responses)=>{
    console.log(requestes.query.name)
    responses.send('User List')
})
router.get('/new',(requestes,responses)=>{
    // responses.send('User New Form')
    responses.render('users/new',{firstname:"test"})
})

router.route('router/:idd').get((req,res)=>{
    // req.params.idd
    res.send(`Get User With idd : ${ req.params.idd}`)
}).put((req,res)=>{
    // req.params.idd
    res.send(`Put User With idd : ${ req.params.idd}`)
}).post((req,res)=>{
    // req.params.idd
    res.send(`post User With idd : ${ req.params.idd}`)
}).delete((req,res)=>{
    // req.params.idd
    res.send(`Delete User With idd : ${ req.params.idd}`)
})
const users=[{name:"kyle"},{name:"Sally"}]
 
router.param('id',(req,res,next,id)=>{
    req.user=users[id]
    next()

})
router.post('/',(req,responses)=>{
    const isValid=false
    if(isValid){
        users.push({firstname:req.body.firstname})
        responses.redirect(`users/${users.length-1}`)
    }else{
        console.log("error")
        responses.render('users/new',{firstname:req.body.firstname})
    }
    console.log(req.body.firstname)
    responses.send('Create User')
})
router.get('/:id',(req,res)=>{
    // req.params.id
    console.log(req.user)

    res.send(`Get User With ID : ${ req.params.id}`)
})
router.put('/:id',(req,res)=>{
    res.send(`Put User With ID : ${ req.params.id}`)
})
router.delete('/:id',(req,res)=>{
    res.send(`Delete User With ID : ${ req.params.id}`)
})
module.exports=router