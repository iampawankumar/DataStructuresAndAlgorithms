const users = [
    {
      name: 'Alice',
      friends: [
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 30 }
      ]
    },
    {
      name: 'David',
      friends: [
        { name: 'Eve', age: 22 },
        { name: 'Frank', age: 27 }
      ]
    }
  ];

  
  //output
  [
    { name: 'Alice', friends: ['Bob', 'Charlie'] },
    { name: 'David', friends: ['Eve', 'Frank'] }
  ]

  
  function dataTransform(arr){

    let result

    result = arr.reduce((acc, item, i, arr) => {
        acc.push({name: item.name, friends: transformKey(item.friends)})
        return acc
    }, [])
  }

  function transformKey(arr){
    let result = []

    for (const key of arr){
      if(key === 'name'){
        result.push(arr[key])
      }
    }
    return result
  }