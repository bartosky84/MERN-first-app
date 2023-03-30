const asyncHendler = require('express-async-handler')
const getGoals = asyncHendler( async (req,res)=> {
  res.status(200).json({message:'Get goals'})
})

const setGoal = asyncHendler( async (req,res)=>{
 if(!req.body.text){
  res.status(400)
  throw new Error('Please  add text filed')
 }
  res.status(200).json({message: 'Set goal'})
})

const updateGoal = asyncHendler( async (req,res)=>{
  res.status(200).json({message: `Update goal ${req.params.id}`})
})

const deleteGoal = asyncHendler( async (req,res)=>{
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})
module.exports ={
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}