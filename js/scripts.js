var Ticket = {
    priceCalc: function() {
        return 10 - (this.time * 3) - (this.age * 2)
    }
};

// var Ticket = {
//                 priceCalc: function() {
//                   if ()
//                 }
// };

$(document).ready(function() {
    $("form#ticket").submit(function(event) {
        event.preventDefault();

        var time = parseInt($('#movie_time').val());
        var age = parseInt($('#person_age').val());

        var newTicket = Object.create(Ticket);

        newTicket.age = age;
        newTicket.time = time;

        var ticketPrice = newTicket.priceCalc();

        $(".result").text("$ " + ticketPrice + ".00");
    });
});
