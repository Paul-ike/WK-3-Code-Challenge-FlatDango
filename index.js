document.addEventListener('DOMContentLoaded', () => {

    const movieTitle = document.getElementById('films');
    movieTitle.style.cursor = 'pointer';
    const btn = document.getElementById("buy-ticket");

    let soldBtn = document.createElement("div");
    soldBtn.innerHTML = `<button class= "sold-out">Sold Out</button>`;

    
        fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            
            let img = document.getElementById('poster');
                img.src = `${data[0].poster}`;

            let title = document.getElementById('title');
                title.innerText = `${data[0].title}`;

            let runtime = document.getElementById('runtime');
                runtime.innerText = `${data[0].runtime} minutes`;

            let description = document.getElementById('film-info');
                description.innerText = `${data[0].description}`;

            let showtime = document.getElementById('showtime');
            showtime.innerText = `${data[0].showtime}`;

            let ticket = document.getElementById('ticket-num');
                let capacity = `${data[0].capacity}` 
                let ticketsSold = `${data[0].tickets_sold}`
                let remainingTickets = +capacity - +ticketsSold;
                ticket.innerText = remainingTickets;


            
    })

});