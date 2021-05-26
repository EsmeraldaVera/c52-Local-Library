// Write your tests here!
const expect = require("chai").expect
const caesarModule = require('../src/caesar')

describe("This is why we all stabbed caesar.", () => {
    

    it ("Should correctly decode passed message", () =>{
        const expected = 'thinkful'
        const actual = caesarModule.caesar("wklqnixo", 3, false)
        expect(actual).to.eql(expected)
    })


    it ("Should correctly encode passed message with right shift", () => {
        const expected = 'wklqnixo'
        const actual = caesarModule.caesar("thinkful", 3)
        expect(actual).to.eql(expected)
    })

    it ("Should correctly encode passed message with left shirt", () =>{
        const expected ='qefkhcri'
        const actual = caesarModule.caesar("thinkful", -3)
        expect(actual).to.eql(expected)
    })


    it ("Should return false if the shift value is 0", () => {
        const actual = caesarModule.caesar("thinkful", 0)
        expect(actual).to.be.false
    })

    it ("Should return false if the shift value is above 25", () =>{
        const actual = caesarModule.caesar("thinkful", 99)
        expect(actual).to.be.false
    })

    it ("Should return false if the shift value is below -25", () => {
        const actual = caesarModule.caesar("thinkful", -26)
        expect(actual).to.be.false
    })

    it ("Should wrap around alphabet, e.g. 'z' becomes 'c'", () => {
        const expected = 'c'
        const actual = caesarModule.caesar("z", 3)
        expect(actual).to.eql(expected)
    })

    it ("Should ignore capital letters, and maintain spaces and other non-alphabet symbols", () => {
        const expected = 'this is a secret message!'
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        expect(actual).to.eql(expected)
    })
})