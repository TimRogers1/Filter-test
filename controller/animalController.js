const asyncHandler = require('express-async-Handler');

const Goal = require('../model/goalModel');

// @desc Get animal data 
// @route GET /animalData
// @access Private
const getAnimal = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
});

// @desc Add animal data 
// @route POST /animalData
// @access Private
const addAnimal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    const goal = await Goal.create({
      text: req.body.text,
    })
  
    res.status(200).json(goal)
  })

// @desc Update animal data 
// @route PUT /animalData/:id
// @access Private
const updateAnimal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
});

// @desc Delete animal data 
// @route DELETE /animalData
// @access Private
const deleteAnimal = asyncHandler(async (req, res, next) => {
    res.status(200).json({message: 'Get goals'})
});

module.exports = {
    getAnimal,
    addAnimal,
    updateAnimal,
    deleteAnimal
}