import capitalize from "./index.js";


test(`returns the first letter capitalized`, () => {
    const result = capitalize("hello");
    
    expect(result[0] === result[0].toUpperCase()).toBe(true)
})