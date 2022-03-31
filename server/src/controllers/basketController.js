import asyncHandler from 'express-async-handler'
import Basket from '../models/Basket.js'

const getAllBasket = asyncHandler(async (req, res) => {
  const allBaskets = await Basket.find({})
  if (!allBaskets) {
    res.status(401).json({ msg: 'there are no baskets' })
  }
  res.status(201).json(allBaskets)
})

const getByCategoryBasket = asyncHandler(async (req, res) => {
  const { category } = req.params
  const allBaskets = await Basket.find({})
  if (!allBaskets) {
    res.status(401).json({ msg: 'there are no baskets' })
  }
  const basketCategory = allBaskets.filter((basket) =>
    basket.categories.includes(category)
  )
  if (!basketCategory || basketCategory.length === 0) {
    res
      .status(401)
      .json({
        msg: 'there is no basket available this moment with this category',
      })
  }
  res.status(201).json(basketCategory)
})
export { getAllBasket, getByCategoryBasket }
