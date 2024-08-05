//Given an array of products where each product has a nested array of reviews,
//write a function to filter products based on a minimum average rating
// and return a new array with the product name and average rating.


const products = [
    {
      name: 'Product 1',
      reviews: [
        { rating: 4, comment: 'Good' },
        { rating: 5, comment: 'Excellent' }
      ]
    },
    {
      name: 'Product 2',
      reviews: [
        { rating: 2, comment: 'Bad' },
        { rating: 3, comment: 'Average' }
      ]
    }
  ];
  const minRating = 4;

  //output
const output =   [
    { name: 'Product 1', averageRating: 4.5 }
  ]


function filterProducts(products){
    let result = []
  for(let product of products){
   

    let filteredReviews = product.reviews.filter(item => item.rating >= 4)
    
    if(filteredReviews && filteredReviews.length > 0){
        let productName = product.name
        let averageRating = filteredReviews.reduce((acc, item) => acc+= item.rating, 0)
        let averageRatingNum = parseInt(averageRating) / 2
        result.push({name: productName, averageRating: averageRatingNum})
    }
  }

  console.log('result', result)
  return result
}


let response = filterProducts(products)

console.log('response', response)


  