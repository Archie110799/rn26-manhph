const NUMBER = 15;
const NUMBER_2 = 20;

u();

function bt1() {
  if (NUMBER % 2 === 0) {
    console.log("chan");
  } else {
    console.log("le");
  }
}

function bt2() {
  let arrayRes = [0, 1, 1, 2, 3];
  let numberPrint;
  if (NUMBER > 8) {
    for (let index = 2; index < NUMBER; index++) {
      let newFib = arrayRes[index - 2] + arrayRes[index - 1];
      if (newFib <= NUMBER) arrayRes.push(newFib);
    }
    numberPrint = arrayRes.length;
  } else {
    numberPrint = NUMBER;
  }
  for (let index = 0; index < numberPrint; index++) {
    console.log(arrayRes[index]);
  }

}

function bt3() {
  // index = 1 
  // index ++ -> index = 2 , 3,4 
  // index >= 5: out FOr
  for (let index = 1; index < NUMBER + 1; index++) {
    let star = "";
    for (let indexStar = 1; indexStar <= index; indexStar++) {
      star += "*";
    }
    console.log(star);
  }
}

function bt4() {
  for (let index = 1; index <= NUMBER; index++) {
    let space = "";
    for (let indexSpace = 1; indexSpace <= NUMBER - index; indexSpace++) {
      space += " ";
    }
    let star = "";
    for (let indexStar = 1; indexStar <= 2 * index - 1; indexStar++) {
      star += "*";
    }
    console.log(space + star);
  }
}

// h = 4;  * = 2*index - 1;space = h - index 
//    *            index 1; * = 1; space = 3            
//   ***           index 2; * = 3; space = 2
//  *****          index 3; * = 5; space = 1
// *******         index 4; * = 7; space = 0

function o() {
   let a = 3
   let b = 5
   let c = 2
   let d = 1

   let min = a // 3
   if(b < min) min = b // min = 3
   if(c < min) min = c // min = 2
   if(d < min) min = d 

   // let n = (n-1)/2  = 4.5 float 

   // n =24 : chuc =s parseInt(n/10)
   //  dvi = n % 10

   // n = 5 nt -> 1, 5
   // isNT = true
   // for (i = 2->4) -> 5 % i === 0 -> isNt = false
   // log(isNT)
}

function u() {
  let startTime = performance.now()
  let u = 1 
  
  for (let index = 1; (index <= NUMBER_2 && index <= NUMBER) ; index++) {
    if (!(NUMBER % index) && !(NUMBER_2 % index)) {
      u = index
    }
  }
  
  let endTime = performance.now()
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

  console.log(u)
}