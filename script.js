"use strict";

// 1. 
let fun = function (...number) {
    let sumofnumbers=0;
    for (let item of number) {
        sumofnumbers+=item;
    }
return sumofnumbers;
}

let resultsumofnumbers = fun (10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultsumofnumbers);

let func = (...numbers)=> {
    let sumofitems = 0 ;
    for (let item of numbers) {
        sumofitems+=item;
    }
   
      return sumofitems;
    }

    let resultsumofitems = func (10, 50, 6, 7, 8, 11, 6, 3, 9)
    console.log(resultsumofitems);

    
// 2.    

let user = {
firstname: 'giorgi',
lastname: 'saakadze',
age: 32,
isloggedin: true
}

console.log(user.firstname +" " + user.lastname);
console.log(`${user.firstname} ${user.lastname}` );

      if (user.isloggedin == true) {
        console.log('true');
      }
      else {
        console.log('false');
      }

// 3.

  function getMax(...numbers) {
  let maxValue = 0;

  for (let i of numbers) {
    if (i > maxValue) {
      maxValue = i;
    }
  }

  return maxValue;
}

let resultMAxVAlue = getMax(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultMAxVAlue);




// 4. 

function fn (x) {
    if ( x % 2 === 0) {
        return 'this number is even'
    }
    return 'this number is odd'
}

let resultfn = fn (5)
console.log(resultfn);



// 5. 

let array = [1,2,3,4,10]; 

for (let y = array.length - 1; y >= 0; y--) {
  console.log(array[y]);
}



      
6. 

function fnc(yearnow, birthYear) {
        
    let user_age = yearnow - birthYear
    return user_age;       
}
let resultfnc = fnc (2024,1988);
console.log(resultfnc);




let person_Age = (x) => x >= 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი';

let PersonStatus = person_Age(13);
console.log(PersonStatus);

function ageFun (m) {
    if (m >=18) {
        return 'სრულწლოვანი'
        }
        return 'არასრულწლოვანი'
    }

let pstatus = ageFun (30)   
console.log(pstatus);


    
let ageFun1 =function (n) {
    if (n >=18) {
        return 'სრულწლოვანი'
        }
        return 'არასრულწლოვანი'
    }

let p_status = ageFun1 (12)   
console.log(p_status);
    














