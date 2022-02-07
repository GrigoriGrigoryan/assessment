import {splitInput} from "../../src";

describe(' Checking conversion British English', () => {
    test('testing number words', () => {
        expect(splitInput(7)).toBe("seven")
        expect(splitInput(42)).toBe("forty-two")
        expect(splitInput(2001)).toBe("two thousand and one")
        expect(splitInput(1999)).toBe("nineteen hundred and ninety-nine")
        expect(splitInput(17999)).toBe("seventeen thousand nine hundred and ninety-nine")
        expect(splitInput(342251)).toBe("three hundred and forty-two thousand two hundred and fifty-one")
        expect(splitInput(1300420)).toBe("one million three hundred thousand four hundred and twenty")
    })

})