// informazioni
const fizz = "Fizz";
const buzz = "Buzz";
const fizzbuzz = "FizzBuzz";

// esecuzione stabiliamo il ciclo e creiamo i multipli per cui far comparire

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(fizzbuzz);
  } else if (i % 3 === 0) {
    console.log(fizz);
  } else if (i % 5 === 0) {
    console.log(buzz);
  }
}
