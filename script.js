const secTion = document.querySelector(".percentage");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const friendShip = document.querySelector(".friendship");

const submitButton = document.querySelector(".submit");

friendShip.textContent ="Friendship";
const friendShip1 = friendShip.textContent;

submitButton.addEventListener("click", update);

let newWords;

function update() {
  let firstName = fname.value.trim();
  let lastName = lname.value.trim();
  newWords =`${firstName}${friendShip1}${lastName}`;
  //console.log(newWords);
  


   // main code started
   let arrs = newWords.split(""); 
   arrs= arrs.map(item => item.toLowerCase());
   let b = [];
   //let count = 0;
   let k = 0;

   for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] !== "2") {
      let count = 1;
      for (let j = i + 1; j < arrs.length; j++) {
        if (arrs[i] === arrs[j] ) {
          count++;
          arrs[j] = "2";
        }
      }
      arrs[i] = "2";
      b[k] = count;
      k += 1;
    }
  }

console.log(arrs); // Updated array with repeated alphabets replaced by "2"
console.log(b);    // Array b with counts of repeated alphabets

// main code 2 for addition


//let n = b.length;
//let d = n - 1;
//let newArrs = [];



function funcal(b) {
  let newArrs = [];

  while (b.length > 2) {
    let a = 0;
    let d = b.length - 1;

    let updatedArrs = [];
    while (a <= d) {
      if (a === d) {
        updatedArrs.push(b[d]);
      } else {
        let sum = b[a] + b[d];
         if(sum >= 10 && sum <= 99){
          let newupdateArrays = Array.from(String(sum), Number);
          //updatedArrs.push(...newupdateArrays); console.log(newupdateArrays);
          updatedArrs= updatedArrs.concat(newupdateArrays);   
          console.log(newupdateArrays);
         }else{
             updatedArrs.push(sum);}
      }
      a++;
      d--;
    }

    newArrs = updatedArrs;
    b = updatedArrs;
  }

  return newArrs;
}

let value1 = funcal(b);
console.log(value1);

let stringArray = value1.join('');
console.log(stringArray);

secTion.textContent = `Percentage: ${stringArray}%` ;

firstName = " ";console.log(firstName);
lastName = " ";

}
