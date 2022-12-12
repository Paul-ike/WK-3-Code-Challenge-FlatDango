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


            btn.addEventListener('click', () => {
                if (remainingTickets > 0) {
                    remainingTickets -= 1;
                    ticket.innerText = remainingTickets;
                } else {
                    btn.replaceWith(soldBtn);
                }      
                    
            })

            data.forEach(data =>{
                movieTitle.insertAdjacentHTML('beforeend', `<li class="film item">${data.title}</li>`);
                
            });


                
            
            let titleElement = document.getElementsByClassName('film');
            for (let index = 0; index < titleElement.length; index++) {
                let element = titleElement[index];         
                
                element.addEventListener('click', () =>{
                    
                    img.src = `${data[index].poster}`;
                    title.innerText = `${data[index].title}`;
                    runtime.innerText = `${data[index].runtime} minutes`;
                    description.innerText = `${data[index].description}`;
                    showtime.innerText = `${data[index].showtime}`;
                        let capacity = `${data[index].capacity}` 
                        let ticketsSold = `${data[index].tickets_sold}`
                        let remainingTickets = +capacity - +ticketsSold;
                    ticket.innerText = remainingTickets;

                   
                btn.addEventListener('click', () => {
                    if (remainingTickets > 0) {
                        remainingTickets -= 1;
                        ticket.innerText = remainingTickets;
                    } else {
                     
                        btn.replaceWith(soldBtn);
                    }      
                    
                })
            })
        }
    })

});