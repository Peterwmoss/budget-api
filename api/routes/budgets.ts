
import express from 'express'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get budgets'
    })
})

router.post('/', (req, res, next) => {
    const budget = {
        date: new Date(),
        categories: req.body.categories,
        values: req.body.values
    }
    res.status(201).json({
        message: 'Post budgets',
        budget: budget
    })
})

router.get('/:budgetId', (req, res, next) => {
    const id = req.params.userId
    res.status(200).json({
        message: 'Passed id: ' + id
    })
})

router.patch('/:budgetId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated budget'
    })
})

router.delete('/:budgetId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted budget'
    })
})

export default router