//1
function countToTen(){
  for(let i=0; i <=10; i++) {
      console.log(i);
  }
}

//2
function countFromOne(number){
  for(let i=1; i <= number; i++) {
      console.log(i);
  }
}

//3
function countEveryEven(number){
  for(let i = 0; i <= number; i++) {
      if (i % 2 === 0) {
          console.log(i);
      }
  }
}

//4
function countEveryOdd(number){
   for(let i = 0; i <= number; i++) {
      if (i % 2 !== 0) {
          console.log(i);
      }
  }
}

//5 
function countEvens(numbers){
    
}

// Call
countToTen();
countFromOne(20);
countEveryEven(18);
countEveryOdd(35);
