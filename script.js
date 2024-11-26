let ticket1Votes = 0;
let ticket2Votes = 0;

function vote(ticket) {
    if (ticket === 'ticket1') {
        ticket1Votes++;
        document.getElementById('ticket1Votes').textContent = `${ticket1Votes} votes`;
    } else if (ticket === 'ticket2') {
        ticket2Votes++;
        document.getElementById('ticket2Votes').textContent = `${ticket2Votes} votes`;
    }
}
