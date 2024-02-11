var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function TicketManager(ticketsInput, sortCriteria) {
    var tickets = [];
    for (var _i = 0, ticketsInput_1 = ticketsInput; _i < ticketsInput_1.length; _i++) {
        var ticketInput = ticketsInput_1[_i];
        var _a = ticketInput.split('|'), destination = _a[0], priceInput = _a[1], status_1 = _a[2];
        var price = parseFloat(priceInput).toFixed(2);
        tickets.push(new Ticket(destination, parseFloat(price), status_1));
    }
    switch (sortCriteria) {
        case 'destination':
            tickets.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            tickets.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'status':
            tickets.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
        default:
            tickets;
            break;
    }
    return tickets;
}
var result01 = TicketManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
var result02 = TicketManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
console.log(result01);
console.log(result02);
