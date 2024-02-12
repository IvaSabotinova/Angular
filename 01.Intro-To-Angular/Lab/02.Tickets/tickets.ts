class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

}

function TicketManager(ticketsInput: string[], sortCriteria: string): Ticket[] {
    let tickets: Ticket[] = [];
    for (const ticketInput of ticketsInput) {
        const [destination, priceInput, status] = ticketInput.split('|');       
        const price = parseFloat(priceInput).toFixed(2);
        tickets.push(new Ticket(destination, parseFloat(price), status))
    }
    
    switch(sortCriteria){
        case 'destination': tickets.sort((a,b)=> a.destination.localeCompare(b.destination)); break;
        case 'price': tickets.sort((a, b)=> a.price - b.price);break;
        case 'status': tickets.sort((a, b) => a.status.localeCompare(b.status));break;
        default: tickets;break;
    }
    return tickets;
}

const result01 = TicketManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
    ],
    'destination'
    );

    const result02 = TicketManager([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
        ],
        'status'
        );
    
    console.log(result01);
    console.log(result02);

