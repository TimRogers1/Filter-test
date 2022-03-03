
const express = require('express')
const router = express.Router()
const {
    getAnimal,
    addAnimal,
    updateAnimal,
    deleteAnimal,
} = require('../controller/animalController')

// const { protect } = require('../middleware/errorMiddleware')

router.route('/').get(getAnimal).post(addAnimal)
router.route('/:id').delete(updateAnimal).put(deleteAnimal)

module.exports = router