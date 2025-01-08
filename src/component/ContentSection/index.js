import React from 'react'
import ContentItem from '../ContentItem'
import './index.css'
import Hero from '../Hero'
import WhyChooseUs from '../WhyChooseUs'
import ExploreMenu from '../ExpolreMenu'
import PaymentSection from '../PaymentSection'

const recipeItem = [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "category": "Pizza",
      "price": 8.99,
      "rating": 4.5,
      "image": "https://cdn.pixabay.com/photo/2024/04/21/18/44/ai-generated-8711272_1280.jpg"
    },
    {
      "id": 2,
      "name": "Pepperoni Pizza",
      "category": "Pizza",
      "price": 10.99,
      "rating": 4.6,
      "image": "https://cdn.pixabay.com/photo/2024/04/23/09/33/ai-generated-8714534_1280.jpg"
    },
    {
      "id": 3,
      "name": "BBQ Chicken Pizza",
      "category": "Pizza",
      "price": 12.99,
      "rating": 4.7,
      "image": "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg"
    },
    {
      "id": 4,
      "name": "Veggie Pizza",
      "category": "Pizza",
      "price": 9.49,
      "rating": 4.4,
      "image": "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg"
    },
    {
      "id": 5,
      "name": "Caesar Salad",
      "category": "Salad",
      "price": 7.99,
      "rating": 4.3,
      "image": "https://cdn.pixabay.com/photo/2015/01/03/18/19/salad-587669_1280.jpg"
    },
    {
      "id": 6,
      "name": "Greek Salad",
      "category": "Salad",
      "price": 8.49,
      "rating": 4.4,
      "image": "https://cdn.pixabay.com/photo/2017/06/22/14/20/salad-2430919_960_720.jpg"
    },
    {
      "id": 7,
      "name": "Fruit Salad",
      "category": "Salad",
      "price": 6.99,
      "rating": 4.5,
      "image": "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_1280.jpg"
    },
    {
      "id": 8,
      "name": "Grilled Chicken Sandwich",
      "category": "Sandwich",
      "price": 9.99,
      "rating": 4.6,
      "image": "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026581_1280.jpg"
    },
    {
      "id": 9,
      "name": "Club Sandwich",
      "category": "Sandwich",
      "price": 8.99,
      "rating": 4.4,
      "image": "https://cdn.pixabay.com/photo/2019/11/19/18/33/sandwich-4638226_960_720.jpg"
    },
    {
      "id": 10,
      "name": "Spaghetti Carbonara",
      "category": "Pasta",
      "price": 11.49,
      "rating": 4.8,
      "image": "https://cdn.pixabay.com/photo/2018/11/10/00/38/pasta-3805772_1280.jpg"
    },
    {
      "id": 11,
      "name": "Penne Alfredo",
      "category": "Pasta",
      "price": 12.49,
      "rating": 4.7,
      "image": "https://cdn.pixabay.com/photo/2020/05/31/13/13/pasta-5242624_1280.jpg"
    },
    {
      "id": 12,
      "name": "Fettuccine Primavera",
      "category": "Pasta",
      "price": 11.99,
      "rating": 4.5,
      "image": "https://cdn.pixabay.com/photo/2022/11/26/07/07/fettuccine-7617382_1280.jpg"
    },
    {
      "id": 13,
      "name": "Fried Chicken Bucket",
      "category": "Chicken",
      "price": 14.99,
      "rating": 4.6,
      "image": "https://cdn.pixabay.com/photo/2021/08/16/15/11/fried-chicken-6550529_1280.jpg"
    },
    {
      "id": 14,
      "name": "Chicken Wings",
      "category": "Chicken",
      "price": 9.99,
      "rating": 4.4,
      "image": "https://cdn.pixabay.com/photo/2016/07/31/17/51/chicken-1559548_1280.jpg"
    },
    {
      "id": 15,
      "name": "Grilled Salmon",
      "category": "Seafood",
      "price": 15.99,
      "rating": 4.7,
      "image": "https://cdn.pixabay.com/photo/2018/12/21/22/01/salmon-3888823_1280.jpg"
    },
    {
      "id": 16,
      "name": "Fish and Chips",
      "category": "Seafood",
      "price": 12.99,
      "rating": 4.6,
      "image": "https://cdn.pixabay.com/photo/2018/09/19/04/18/food-3687804_1280.jpg"
    },
    {
      "id": 17,
      "name": "Shrimp Tacos",
      "category": "Seafood",
      "price": 10.99,
      "rating": 4.5,
      "image": "https://cdn.pixabay.com/photo/2019/09/26/04/01/tacos-pastor-4505032_1280.jpg"
    },
    {
      "id": 18,
      "name": "Beef Burger",
      "category": "Burger",
      "price": 10.49,
      "rating": 4.6,
      "image": "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg"
    },
    {
      "id": 19,
      "name": "Cheeseburger",
      "category": "Burger",
      "price": 9.99,
      "rating": 4.4,
      "image": "https://cdn.pixabay.com/photo/2023/09/23/15/56/ai-generated-8271284_1280.jpg"
    },
    {
      "id": 20,
      "name": "Veggie Burger",
      "category": "Burger",
      "price": 9.49,
      "rating": 4.3,
      "image": "https://cdn.pixabay.com/photo/2022/07/15/18/17/spicy-burger-7323694_960_720.jpg"
    },
    {
      "id": 21,
      "name": "Chocolate Brownie",
      "category": "Dessert",
      "price": 4.99,
      "rating": 4.8,
      "image": "https://cdn.pixabay.com/photo/2017/08/07/12/49/dessert-2603520_1280.jpg"
    },
    {
      "id": 22,
      "name": "Vanilla Ice Cream",
      "category": "Dessert",
      "price": 3.99,
      "rating": 4.7,
      "image": "https://cdn.pixabay.com/photo/2023/11/29/09/39/ice-cream-8419129_1280.jpg"
    },
    {
      "id": 23,
      "name": "Apple Pie",
      "category": "Dessert",
      "price": 5.49,
      "rating": 4.6,
      "image": "https://cdn.pixabay.com/photo/2016/11/02/16/17/cake-1792115_1280.jpg"
    },
    {
      "id": 24,
      "name": "Tacos",
      "category": "Mexican",
      "price": 7.99,
      "rating": 4.5,
      "image": "https://cdn.pixabay.com/photo/2020/02/07/20/10/taco-4828265_1280.jpg"
    },
    {
      "id": 25,
      "name": "Chicken Quesadilla",
      "category": "Mexican",
      "price": 8.99,
      "rating": 4.6,
      "image": "https://cdn.pixabay.com/photo/2020/08/14/10/51/quesadilla-5487578_960_720.jpg"
    },
    {
      "id": 26,
      "name": "Fried Rice",
      "category": "Asian",
      "price": 7.49,
      "rating": 4.4,
      "image": "https://cdn.pixabay.com/photo/2021/05/31/01/10/fried-rice-6297407_1280.jpg"
    },
    {
      "id": 27,
      "name": "Spring Rolls",
      "category": "Asian",
      "price": 5.99,
      "rating": 4.3,
      "image": "https://cdn.pixabay.com/photo/2018/03/15/12/16/food-3228057_1280.jpg"
    },
    {
      "id": 28,
      "name": "Pad Thai",
      "category": "Asian",
      "price": 10.49,
      "rating": 4.7,
      "image": "https://cdn.pixabay.com/photo/2019/03/04/12/59/pad-thai-4034040_1280.jpg"
    }
  ]
 const ContentSection = () => {
  return (
    <>
     <div className='main-section'>
     
       <Hero/>
     

     </div>
 
    <div className='content-section-container'>
    <WhyChooseUs/>
    <ExploreMenu/>
    

        <ul className='list-container'>
            {
              recipeItem.map((item)=> (
                <ContentItem
                key={item.id}
                detailItems={item}
                />

              ))  
               
            }

        </ul>
        <PaymentSection/>
       
      </div>
      </>

   
  )
}

export default ContentSection