function countSheeps(arrayOfSheep) {
  let result = 0
  arrayOfSheep.join('')
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]==true) 
      result=result+1;
  }
   return result
}


// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
