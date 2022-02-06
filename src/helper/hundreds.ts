import cardinals from "../number/numbers";
import lastWord from "../utils/lastWord";

export default function hundreds (input: number, word: string, arr: string[]) {
    if ( input === 100 ) return cardinals.twd[10];

    if ( arr.reduce((a, b) => String(Number(a) + Number(b))) === arr[0] ) {
        word = cardinals.one[arr[0]] + ' ' + cardinals.twd[10];
        return word;
    }

    if ( input > 100 && input < 1000) {
        word = cardinals.one[arr[0]] + ' ' + cardinals.twd[10] + ' and ' + `${lastWord(word, arr)}`;
        return word
    }
}