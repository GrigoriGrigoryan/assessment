import cardinals from "../number/numbers";

export default function one (input: number, word: string, arr: string[]) {
    let num: string  = arr[0];
    if ( cardinals.one.hasOwnProperty(num) ) {
        word = cardinals.one[num];
    }
    return word;
}