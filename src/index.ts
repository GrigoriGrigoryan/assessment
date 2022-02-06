import cardinals from "./number/numbers";
import tens from "./helper/tens";
import one from "./helper/one";
import hundreds from "./helper/hundreds";
import thousands from "./helper/thousands";

const splitInput = (input: number) => {
   const arr = String(input).split('');
   const count = arr.length;
   let word =  "";

   if (count <= 1) return one(input, word, arr);

   if (count <= 2) return tens(input, word, arr);

   if (count <= 3) return hundreds(input, word, arr);


   if (count <= 6) {

       if( input === 1000 ) return cardinals.oneIndex[arr[0]]

       if ( input > 1000 ) return thousands(input, word, arr);

       return; // Thousand
   }
   if (count < 7) {
       return; // Million
   }
   if (count < 10) {
       return; // Billion
   }
   if (count < 13) {
       return; // Trillion
   }
}

const num = 909999;


console.log(splitInput(num));

function numConversion (num: number) {
    const arr = String(num).split('');

    if ( num > 100 && num < 1000) {
        console.log(`hundred ic heto ` +  `and`);
    }
    if ( num > 1000 ) {
        console.log(`hundred ic heto ` +  `and`);
    }
}