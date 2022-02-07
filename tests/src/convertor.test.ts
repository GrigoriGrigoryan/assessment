import {splitInput} from "../../src";

describe('Checking number conversion to word (words)', () => {
    test('Under 100', () => {
        expect(splitInput(0)).toBe("zero")
        expect(splitInput(8)).toBe("eight")
        expect(splitInput(12)).toBe("twelve")
        expect(splitInput(20)).toBe("twenty")
        expect(splitInput(34)).toBe("thirty-four")
        expect(splitInput(40)).toBe("forty")
        expect(splitInput(55)).toBe("fifty-five")
        expect(splitInput(69)).toBe("sixty-nine")
        expect(splitInput(73)).toBe("seventy-three")
        expect(splitInput(99)).toBe("ninety-nine")
    })

    test('Under 1000', () => {
        expect(splitInput(100)).toBe("hundred")
        expect(splitInput(201)).toBe("two hundred and one")
        expect(splitInput(322)).toBe("three hundred and twenty-two")
        expect(splitInput(402)).toBe("four hundred and two")
        expect(splitInput(500)).toBe("five hundred")
        expect(splitInput(666)).toBe("six hundred and sixty-six")
        expect(splitInput(730)).toBe("seven hundred and thirty")
        expect(splitInput(812)).toBe("eight hundred and twelve")
        expect(splitInput(909)).toBe("nine hundred and nine")
        expect(splitInput(999)).toBe("nine hundred and ninety-nine")
    })

})