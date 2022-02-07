import {splitInput} from "../../src";

describe(' Checking conversion British English', () => {
    test('From 1000 to 2000', () => {
        expect(splitInput(1001)).toBe("ten o-one")
        expect(splitInput(1222)).toBe("twelve hundred and twenty-two")
        expect(splitInput(1300)).toBe("thirteen hundreds")
        expect(splitInput(1444)).toBe("fourteen hundred and forty-four")
        expect(splitInput(1501)).toBe("fifteen o-one")
        expect(splitInput(1808)).toBe("eighteen o-eight")
        expect(splitInput(1900)).toBe("nineteen hundreds")
        expect(splitInput(1901)).toBe("nineteen o-one")
        expect(splitInput(1999)).toBe("nineteen hundred and ninety-nine")
    })
})