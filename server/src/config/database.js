import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://patataaa:patataaa@cluster0.h33ggl7.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('✅ Successfully connected to the database'))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`))