// const mongoose =require('mongoose')
// const mongoURI='mongodb+srv://heskutturuachary:<password>@cluster0.8xdgl2k.mongodb.net/?retryWrites=true&w=majority'
// const mongoDB=async()=>{
//     await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
//     if(err)crossOriginIsolated.log("---",err)
//     else{
//     console.log("connected");}
// });
// }
// module.exports=mongoDB;
// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://admin:achary123@cluster0.8xdgl2k.mongodb.net/gofood?retryWrites=true&w=majority'

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//     const fetched_data=await mongoose.connection.db.collection("food_items");
//     fetched_data.find({}).toArray(function(err,data){
//         if(err)
//         console.log(err);
//         else
//         console.log(data);
    
//     })
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// module.exports = mongoDB;
const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/myfirst';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

//   const fetchedData = await mongoose.connection.db.collection("food_items")
// fetchedData.find({}).toArray({
//   const foodCategory = await mongoose.connection.db.collection("food_category")
//    foodCategory.find({}).toArray(function(err,catData)
//    {
// if(err)
// {
//   console.log(err);
// }
// else{
//   global.food_items=fetchedData;
//   global.foodCategory=catData;
// }
//    })
// })
  //global.food_items=fetchedData;
  //console.log(global.food_items);
  
  
  // } catch (error) {
  //   console.error('Error connecting to MongoDB:', error);
//   // }
// };

const foodItemsCollection = mongoose.connection.db.collection("food_items");
const foodCategoryCollection = mongoose.connection.db.collection("food_category");

const fetchedFoodItems = await foodItemsCollection.find({}).toArray();
const fetchedFoodCategories = await foodCategoryCollection.find({}).toArray();

global.food_items = fetchedFoodItems;
global.foodCategory = fetchedFoodCategories;

console.log(global.food_items);
console.log(global.foodCategory);
} catch (error) {
console.error('Error connecting to MongoDB:', error);
}
};

module.exports = mongoDB;
