describe("Ticket", function() {
    describe("priceCalcAge()", function() {
        it("returns the ticket price of adult ticket, no time discount", function() {
            var testTicket = Object.create(Ticket);
            testTicket.personAge = "adult";
            expect(testTicket.priceCalcAge()).to.eql(8);
        });
    });

    describe("priceCalcAge()", function() {
        it("returns the ticket price of child discount, no time discount", function() {
            var testTicket = Object.create(Ticket);
            testTicket.personAge = "child";
            expect(testTicket.priceCalcAge()).to.eql(7);
        });
    });

    describe("priceCalcAge()", function() {
        it("returns the ticket price of senior discount, no time discount", function() {
            var testTicket = Object.create(Ticket);
            testTicket.personAge = "senior";
            expect(testTicket.priceCalcAge()).to.eql(6);
        });
    });

    describe("priceCalcTime()", function() {
        it("returns the ticket price  with time discount", function() {
            var testTicket = Object.create(Ticket);
            testTicket.movieTime = "time1";
            expect(testTicket.priceCalcTime()).to.eql(7);
        });
    });
});
