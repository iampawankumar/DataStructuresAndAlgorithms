const data = {
    a: 1,
    b: { c: 2, d: { e: 3 } },
    f: 4
  };
  


  //output as value of key e is 3 otherwise undefined
  const output= 3 



  function searchKey(obj, keyToSearch){
    for (const key in obj) {
        if (key === keyToSearch) {
          return obj[key];
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          const result = searchKey(obj[key], keyToSearch);
          if (result !== undefined) {
            return result;
          }
        }
      }
      return undefined;
  }


  const keyToSearch = 'e';
  let response = searchKey(data, keyToSearch)
  console.log('response', response)