//stampare numeri da 1 a 100 (ciclo for)

//-i numeri multipli di 3 devono essere stampati con una stringa
//-i multipli di 5 devono essere stampati con una stinga
//-i multipli sia di 3 che di 5 devono essere stampati tramite una stringa
// va mandato a scermo

//elementi del dom
const gridEl = document.getElementById("grid");

//stampare i numeri
for (let i = 1; i <= 100; i++) {
  console.log(i);

  let number = i;
  if (number % 3 == 0 && number % 5 == 0) {
    number = "FizzBuzz";
  } else if (number % 3 == 0) {
    number = "Fizz";
  } else if (number % 5 == 0) {
    number = "Buzz";
  }
  console.log(number);

  const card = document.createElement("div");
  card.append(number);
  gridEl.append(card);
}
