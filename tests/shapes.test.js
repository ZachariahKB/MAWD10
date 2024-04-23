const { describe } = require("yargs");
const {Square, Triangle, Circle} = require("../lib/shapes");
const { default: test } = require("node:test");



describe("Square", () => {
    test( "will render svg for a green circle", () => {
        const expectedSVG= `<circle cx="150" cy="100" r="80" fill="brown" />`;
        const circle = new Circle();
        circle.setColor("brown")
        const actualSVG = circle.render
        exppect(actualSVG).toEqual(expectedSVG);
    })
})
describe("Triangle", () => {
    test("should render a red triangle", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="red" />`;
    })
})


test("should show a fillColor", () => {
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="purple" />`;
    const circle = new Circle()
    

    circle.setColor ("purple")
    const actualSVG =circle.render();
    expect(actualSVG).toEqual (expectedSVG)



    })
