import cardinals from "../number/numbers";
import tens from "./tens";
import one from "./one";

export default function hundreds (input: number, word: string, arr: string[]) {
    if ( input === 100 ) return cardinals.twd[10];

    if ( arr.reduce((a, b) => String(Number(a) + Number(b))) === arr[0] ) {
        word = cardinals.one[arr[0]] + ' ' + cardinals.twd[10];
        return word;
    }

    if ( input > 100 && input < 1000) {
        let lastWord: string;
        if (+arr[1] === 0) {
          lastWord = one(+arr.slice(2).join(''), word, arr.slice(2));
        } else {
          lastWord = tens(+arr.slice(1).join(''), word, arr.slice(1));
        }
        word = cardinals.one[arr[0]] + ' ' + cardinals.twd[10] + ' and ' + `${lastWord}`;
        return word
    }
}