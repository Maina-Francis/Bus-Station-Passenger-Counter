let count = 0;
// grab the count-el element and store it in a countEl variable
let countEl = document.getElementById("count-el");
// console.log(countEl);

function increment() {
  count = count + 1;
  //   set countEl's innerText or innerHTML to the count
  countEl.innerText = count;
  //   console.log(count);
}
