import mongoose from 'mongoose'
import connectDB from './connectDB.js'
import Basket from '../models/Basket.js'
mongoose.connect(
  'mongodb+srv://c34candc:GfzMj4ZFqnkxGeR8@cluster0.pmphz.mongodb.net/devDatabase?retryWrites=true&w=majority'
)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Database connected')
})

const seedDb = async () => {
  await Basket.deleteMany({})
  for (let i = 0; i < 10; i++) {
    await Basket.create({
      name: 'Breakfast basket',
      price: {
        original: 12,
        discount: 5,
      },
      categories: ['Groceries', 'Vegetarian'],
      quantity: 2,
      description: 'the are jslkfj a; aflk jad ',
      pickup: {
        from: new Date(),
        to: new Date(),
      },
      image: 'https:images.unsplash.com/photo-1605784303386-f135539a0532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      // shop_id: ObjectId('80980988dafdfdsd'),
    })
  }
}

seedDb().then(() => {
  mongoose.connection.close()
})
