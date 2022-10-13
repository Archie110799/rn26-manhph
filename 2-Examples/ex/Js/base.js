const NUMBER = 4;

bt4();

function bt1() {
  if (NUMBER % 2 === 0) {
    console.log("chan");
  } else {
    console.log("le");
  }
}

function bt2() {
  let arrayRes = [0, 1];
  let numberPrint;
  if (NUMBER > 1) {
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
  for (let index = 1; index <= NUMBER + 1; index++) {
    let star = "";
    for (let indexStar = 1; indexStar <= index; indexStar++) {
      star += "*";
    }
    console.log(star);
  }
}

function bt4() {
  for (let index = 1; index <= NUMBER + 1; index++) {
    let space = "";
    for (let indexSpace = 0; indexSpace <= NUMBER - index; indexSpace++) {
      space += " ";
    }
    let star = "";
    for (let indexStar = 1; indexStar <= 2 * index - 1; indexStar++) {
      star += "*";
    }
    console.log(space + star);
  }
}
