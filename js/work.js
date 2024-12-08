for (let g = 1; g < 11; g += 1) {
  console.log(g);
}

for (let i = 2; i <= 20; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log("парне число: ", i);
  console.log(i);
}

let c = 7;
for (let a = 0; a <= 10; a += 1) {
  const b = c * a;
  console.log(`${c} x ${a} = ${b}`);
}

for (let g = 1; g < 6; g += 1) {
  console.log(g);
}

let n = Number(prompt("введіть будь ласка число яке буде менше або дорівнювати 8"));
let num = [1, 2, 3, 4, 5, 6, 7, 8];
for (let h = 0; h < num.length; h += 1) {
  if (num[h] >= n) {
     alert("цикл закінчений, оскільки число більше");
     break;
   }
   console.log(num[h]);
 }

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}