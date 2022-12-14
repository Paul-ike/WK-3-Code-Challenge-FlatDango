document.addEventListener('DOMContentLoaded', () => {

    const listEl = document.querySelector('ul');
    const element = document.getElementById("buy-ticket");

    let soldButton = document.createElement("div");
    soldButton.innerHTML = `
        <button class= "sold-out">Sold Out</button>
        `;

    soldButton.replaceWith(element);  

    
        fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            
            let img = document.querySelector('img#poster');
                img.src = `${data[0].poster}`;

            let title = document.querySelector('#title');
                title.innerText = `${data[0].title}`;

            let runtime = document.querySelector('#runtime');
                runtime.innerText = `${data[0].runtime} minutes`;

            let description = document.querySelector('#film-info');
                description.innerText = `${data[0].description}`;

            let showtime = document.querySelector('#showtime');
            showtime.innerText = `${data[0].showtime}`;

            let ticket = document.querySelector('#ticket-num');
                let capacity = `${data[0].capacity}` 
                let ticketsSold = `${data[0].tickets_sold}`
                let remainingTickets = +capacity - +ticketsSold;
                ticket.innerText = remainingTickets;


                let buyTicket = document.querySelector('#buy-ticket');
                buyTicket.addEventListener('click', () => {
                     soldButton.replaceWith(element);  
                    if (remainingTickets > 0) {
                        remainingTickets -= 1;
                        ticket.innerText = remainingTickets;
                    } else {
                     
                        element.replaceWith(soldButton);   
                    }      
                    
                })

            data.forEach(data =>{
                listEl.insertAdjacentHTML('beforeend', `<li class="film item">${data.title}</li>`);
                
            });
               
            let titleEl = document.querySelectorAll('.film');
            for (let index = 0; index < titleEl.length; index++) {
                let el = titleEl[index];         
                
                el.addEventListener('click', () =>{
                    
                    img.src = `${data[index].poster}`;
                    title.innerText = `${data[index].title}`;
                    runtime.innerText = `${data[index].runtime} minutes`;
                    description.innerText = `${data[index].description}`;
                    showtime.innerText = `${data[index].showtime}`;
                        let capacity = `${data[index].capacity}` 
                        let ticketsSold = `${data[index].tickets_sold}`
                        let remainingTickets = +capacity - +ticketsSold;
                    ticket.innerText = remainingTickets;

                    soldButton.replaceWith(element);  
                   
                let buyTicket = document.querySelector('#buy-ticket');
                buyTicket.addEventListener('click', () => {
                     soldButton.replaceWith(element);  
                    if (remainingTickets > 0) {
                        remainingTickets -= 1;
                        ticket.innerText = remainingTickets;
                    } else {
                     
                        element.replaceWith(soldButton);   
                    }      
                    
                })
            })
        }
    })

});