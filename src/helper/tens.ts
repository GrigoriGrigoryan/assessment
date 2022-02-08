import cardinals from "../number/numbers";
import one from "./one";

export default function tens (input: number, word: string, arr: string[]) {

    if( String(Number(`${input}`)).split('').length <= 1) {
        input = Number(`${input}`);
        arr = String(input).split('');
        return   one(input, word, arr);
    }

    if (input <= 19) return  cardinals.tens[input];

    if ( arr.reduce((a, b) => String(Number(a) + Number(b))) === arr[0]) return cardinals.twd[arr[0]];

    if (input <= 99) return cardinals.twd[arr[0]] + '-' + cardinals.one[arr[1]];

    return word;
}

