// Calculator Specs:
describe("Calculator", function() {
    describe("Addition function", function() {
        it("should take two arguments and return the sum.", function() {
            expect(addition(2, 2)).toBe(4);
        });
        
        it("should not return 4 if the arguments given don't produce a sum of 4.", function() {
            expect(addition(7, 19)).toBe(26);
        });
        
        it("should have called the alert function if either number is undefined.", function() {
            spyOn(window, "alert");
            addition("hello");
            expect(window.alert).toHaveBeenCalledWith("Both arguments must be numbers")
        });
    });
});

// New Calculator Specs:
describe("New Calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator();
    });
    
    describe("Add method", function() {
        it("should take two arguments and return the sum.", function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        
        it("should not return 4 if the arguments given don't produce a sum of 4.", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        
        it("should have called the alert function if either number is undefined.", function() {
            spyOn(window, "alert");
            calc.add("Hello");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});